"use client"

import { PaymentApi } from "@/api/api-payment/api-payment"
import { IPaymentDTO } from "@/api/api-payment/dto"
import { Button, Checkbox, Price } from "@/components"
import { NotifyEnum } from "@/enums/notify.enum"
import {
	EnumOrderStatus,
	EnumPaymentMethod,
	EnumSaveStorage,
} from "@/enums/Payment.enum"
import { saveItemToStorage } from "@/helpers/local.storage.helper"
import { useCart } from "@/hooks/cart/useCart"
import { useScreen } from "@/hooks/screen/useScreen"
import { useAttributes } from "@/hooks/useAttributes"
import { useMap } from "@/hooks/useMap"
import { useNotification } from "@/hooks/useNotification"
import { useUser } from "@/hooks/user/useUser"
import { IUser } from "@/interfaces/user.interface"
import { scrollToSection } from "@/utils/scrollToAnchor"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import cn from "classnames"
import { useRouter } from "next/navigation"
import { FC, useState } from "react"
import style from "./payment.module.scss"

interface IPaymentProps {
	paymentMethod: EnumPaymentMethod | undefined
	userData: Pick<IUser, "email" | "name" | "phoneNumber"> | undefined
}
export const Payment: FC<IPaymentProps> = ({ userData, paymentMethod }) => {
	const { state, clearCart } = useCart()
	const { push } = useRouter()
	const { user } = useUser()
	const { screenHandle } = useScreen()
	const { pointDeliverLocation } = useMap()
	const { addNotification } = useNotification()
	const queryClient = useQueryClient()
	const { payload } = useAttributes()

	const [rules, setRules] = useState<{ rulesOfUse: boolean; parties: boolean }>(
		{
			parties: false,
			rulesOfUse: false,
		}
	)

	// PAYMENT MUTATION
	const { mutateAsync, isPending } = useMutation({
		mutationKey: ["placeOrder"],
		mutationFn: (data: IPaymentDTO) => PaymentApi.placeOrder(data),
	})

	const placeOrderHandler = async () => {
		try {
			if (pointDeliverLocation && paymentMethod && user)
				await mutateAsync(
					{
						products: state.products,
						address: pointDeliverLocation,
						paymentMethod,
						status: EnumOrderStatus.WAITING,
						totalPrice: state.totalCache,
						user: userData ?? {
							email: user?.email,
							name: user?.name,
							phoneNumber: user?.phoneNumber,
						},
						color: payload.selectedColor,
						sizes: payload.selectedSize,
					},
					{
						onSuccess(data, variables, context) {
							saveItemToStorage(
								`${EnumSaveStorage.ORDER_ID}-${user?.id}`,
								data.orderId
							)
							saveItemToStorage(
								`${NotifyEnum.NOTIFY_ID}-${user?.id}`,
								data.notifyId
							)
							if (data.message) {
								addNotification({
									message: data.message,
									options: {
										background: "Black",
									},
								})
							}
							queryClient.invalidateQueries({ queryKey: ["getUserProfile"] })
							if (data.detail_order?.url) {
								console.log(data.detail_order)
								push(`${data.detail_order.url}`)
							}
							if (!data.detail_order) {
								push(`/`)
							}
							clearCart()
						},
					}
				)
		} catch (error) {
			addNotification({
				message: String(error),
				options: {
					background: "Black",
				},
			})
		}
	}

	const confirmRuleHandle = () => {
		setRules((prevState) => ({
			...prevState,
			rulesOfUse: !rules.rulesOfUse,
		}))
	}

	const confirmPartiesHandle = () => {
		setRules((prevState) => ({
			...prevState,
			parties: !rules.parties,
		}))
	}
	return (
		<div className={style.payment}>
			<div className={style.wrapp}>
				<div className={style.head}>
					<div className={style.headItem}>
						Скидка <span>{state.totalDiscount || "Н/Д"}</span>
					</div>
					<div className={cn(style.headItem, style.total)}>
						Итого <Price price={state.totalCache} />
					</div>
				</div>
				<Button
					btnType="promo"
					onClick={() =>
						screenHandle({
							content: <>Ведите промо код</>,
							typeOfScreen: "modal",
						})
					}
				/>
			</div>
			<div className={style.action}>
				<div className={style.rules}>
					<div className={style.rulesItem}>
						<Checkbox
							isChecked={rules.rulesOfUse}
							onChange={confirmRuleHandle}
						/>
						<div className={style.checkbox} onClick={confirmRuleHandle}>
							Соглашаюсь c
							<Button onClick={() => scrollToSection("rules")}>
								Правилами пользования
							</Button>
						</div>
					</div>
					<div className={style.rulesItem}>
						<Checkbox
							isChecked={rules.parties}
							onClick={confirmPartiesHandle}
						/>
						<div className={style.checkbox} onClick={confirmPartiesHandle}>
							Ознакомлен
							<Button onClick={() => scrollToSection("rules")}>
								Права и обязанности сторон
							</Button>
						</div>
					</div>
				</div>
				<Button
					title={!user ? "Войдите в систему" : "Перейти к оформлению"}
					btnType="placeOrder"
					disabled={
						!user ||
						!pointDeliverLocation ||
						!rules.parties ||
						!rules.rulesOfUse ||
						!paymentMethod
					}
					onClick={placeOrderHandler}
				>
					Оформить
				</Button>
			</div>
		</div>
	)
}
