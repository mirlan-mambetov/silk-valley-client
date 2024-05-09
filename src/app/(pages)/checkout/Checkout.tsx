"use client"

import { PaymentApi } from "@/api/api-payment/api-payment"
import { IPaymentDTO } from "@/api/api-payment/data-transfer"
import { ButtonComponent, FieldComponent, HeadingComponent } from "@/components"
import {
	EnumOrderStatus,
	EnumOrderStatusInCookie,
	EnumPaymentMethod,
} from "@/enums/Payment.enum"
import { saveItemToCookie } from "@/helpers/cookie.helpers"
import { useCart } from "@/hooks/cart/useCart"
import { useDeliver } from "@/hooks/deliver/useDeliver"
import { useStoreActions } from "@/hooks/store/useStoreActions"
import { useUser } from "@/hooks/user/useUser"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import cn from "classnames"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import style from "./checkout.module.scss"

export const Checkout = () => {
	const [methodCard, setMethodCard] = useState(false)
	const [methodCache, setMethodCache] = useState(false)
	const { push } = useRouter()
	const { user } = useUser()
	const { products, totalPrice, clearCart } = useCart()
	const { address } = useDeliver()
	const { openNotifyHandler, openDialogHandler } = useStoreActions()
	const queryClient = useQueryClient()

	// PAYMENT MUTATION
	const { mutateAsync, isPending } = useMutation({
		mutationKey: ["placeOrder"],
		mutationFn: (data: IPaymentDTO) => PaymentApi.placeOrder(data),
	})

	// CANCEDLED TRANSACTION
	// const { mutate: cancelTransaction } = useMutation({
	// 	mutationKey: ["cancelTransaction"],
	// 	mutationFn: (sessionId?: string) =>
	// 		PaymentApi.canceldTransaction({ sessionId }),
	// })

	const placeOrderHandler = async (data: IPaymentDTO) => {
		try {
			await mutateAsync(data, {
				onSuccess(data, variables, context) {
					if (data.message) {
						openNotifyHandler({
							text: data.message,
							type: "success",
							options: {
								timeOut: 5000,
							},
						})
						queryClient.invalidateQueries({ queryKey: ["getUserProfile"] })
					} else if (data.url) {
						saveItemToCookie(
							EnumOrderStatusInCookie._SV__ST_OR,
							data.status,
							data.expires_at
						)
						saveItemToCookie(
							EnumOrderStatusInCookie._SV__R_CL_ID,
							data.client_reference_id
						)
						saveItemToCookie(EnumOrderStatusInCookie._SV_UR_S_, data.url)
						saveItemToCookie(EnumOrderStatusInCookie._SV_OR_ID, data.id)
						push(`${data.url}`)
					}
					clearCart()
				},
			})
		} catch (error) {
			openNotifyHandler({
				text: String(error),
				options: {
					position: "bottomCenter",
				},
				type: "error",
			})
		}
	}

	const methodCardHandl = () => {
		if (methodCache) return
		setMethodCard(!methodCard)
	}
	const methodCacheHandl = () => {
		if (methodCard) return
		setMethodCache(!methodCache)
	}

	return (
		<>
			<section>
				<div className="container">
					<HeadingComponent text="Выберите метод оплаты" />
					<div className={style.wrap}>
						<div className={style.payments}>
							<div
								className={cn(style.method, { [style.active]: methodCard })}
								onClick={methodCardHandl}
							>
								<div className={style.icons}>
									<div
										className={cn(style.icon, style.iconVisa)}
										title="Visa"
									></div>
									<div
										className={cn(style.icon, style.masterCard)}
										title="MasterCard"
									></div>
									<div
										className={cn(style.icon, style.maestro)}
										title="Maestro"
									></div>
									<div
										className={cn(style.icon, style.unionPay)}
										title="UnionPay"
									></div>
									<div
										className={cn(style.icon, style.elcard)}
										title="Элкарт"
									></div>
								</div>
								<FieldComponent
									checked={methodCard}
									type="checkbox"
									onChange={methodCardHandl}
									disabled={methodCache}
								/>
							</div>
							<div className={cn(style.method)}>
								<Image
									width={300}
									height={300}
									src={"/images/mbank.png"}
									alt="mbank"
								/>
								<FieldComponent type="checkbox" checked={false} disabled />
							</div>
							<div
								className={cn(style.method, { [style.active]: methodCache })}
								onClick={methodCacheHandl}
							>
								<strong>Наличными при доставке</strong>
								<FieldComponent
									checked={methodCache}
									type="checkbox"
									disabled={methodCard}
									onChange={methodCacheHandl}
								/>
							</div>
						</div>
						<div className={style.policy}>
							<ul className={style.description}>
								<li>При оформлении заказа:</li>
								<li>
									Если оформить заказ, выбрав пунк 'оплата наличными'. При этом
									если клиент по окончанию доставки товара не будет оформлять,
									по какой-либо причине не будет произведена оплата, то, по
									приеме правил соглашений сторон, будет возмещена стоимость
									товара(полная) + 12% неустойки.
								</li>
								<li>
									Чтобы не было недопониманий сторон, просим ознакомится с
									<a href="#">Правила пользования и (соглашения)</a>
								</li>
							</ul>
						</div>
						<div className={style.policy}>
							<h5>Товары, {products.length}шт</h5>
							<div className={style.items}>
								{products.map((product) => (
									<strong key={product.id}># {product.title}</strong>
								))}
								<div className={style.total}>
									Итого:
									<span>
										{totalPrice} <small>KGS</small>
									</span>
								</div>
							</div>
							<ButtonComponent
								btnType="placeOrder"
								disabled={
									(!methodCache && !methodCard) || !user || !products.length
								}
								onClick={() =>
									placeOrderHandler({
										paymentMethod: methodCache
											? EnumPaymentMethod.CACHE
											: EnumPaymentMethod.CARD,
										products,
										status: EnumOrderStatus.WAITING,
										totalPrice,
										address,
									})
								}
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
