"use client"

import { PaymentApi } from "@/api/api-payment/api-payment"
import { IPaymentDTO } from "@/api/api-payment/data-transfer"
import { ButtonComponent, FieldComponent, HeadingComponent } from "@/components"
import {
	EnumOrderStatus,
	EnumPaymentMethod,
	EnumSaveStorage,
} from "@/enums/Payment.enum"
import { NotifyEnum } from "@/enums/notify.enum"
import { saveItemToStorage } from "@/helpers/local.storage.helper"
import { useCart } from "@/hooks/cart/useCart"
import { useNotification } from "@/hooks/useNotification"
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
	// const { address } = useDeliver()
	const queryClient = useQueryClient()
	const { addNotification } = useNotification()

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

	// useEffect(() => {
	// 	if (methodCard) {
	// 		openDialogHandler({
	// 			message:
	// 				"Для прохождения оплаты по visa. Используйте следующее. Номер карты 4242 4242 4242 4242. Дата истечения срока 04/26. CVC 444",
	// 			type: "notify",
	// 		})
	// 	}
	// }, [methodCard])

	const placeOrderHandler = async (data: IPaymentDTO) => {
		try {
			await mutateAsync(data, {
				onSuccess(data, variables, context) {
					saveItemToStorage(
						`${EnumSaveStorage.ORDER_ID}-${user?.id}`,
						data.orderId
					)
					saveItemToStorage(
						`${NotifyEnum.NOTIFY_ID}-${user?.id}`,
						data.notifyId
					)
					addNotification({
						message: data.message,
						options: {
							background: "Black",
						},
					})
					queryClient.invalidateQueries({ queryKey: ["getUserProfile"] })
					if (data.detail_order?.url) {
						push(`${data.detail_order.url}`)
					}
					console.log(data)
					clearCart()
					push(`/`)
				},
			})
		} catch (error) {
			addNotification({
				message: String(error),
				options: {
					background: "Black",
				},
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
								isLoading={isPending}
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
										address: {
											city: "",
										},
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
