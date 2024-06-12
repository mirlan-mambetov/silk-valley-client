"use client"

import { PaymentApi } from "@/api/api-payment/api-payment"
import { IPaymentDTO } from "@/api/api-payment/dto"
import {
	Button,
	FieldComponent,
	Heading,
	Price,
	SelectLocation,
} from "@/components"
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
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { BiWallet } from "react-icons/bi"
import { FiEdit2 } from "react-icons/fi"
import style from "./checkout.module.scss"

export const Checkout = () => {
	const { push } = useRouter()
	const [userData, setUserData] =
		useState<Pick<IUser, "email" | "name" | "phoneNumber">>()
	const [rules, setRules] = useState<{ rulesOfUse: boolean; parties: boolean }>(
		{
			parties: false,
			rulesOfUse: false,
		}
	)
	const { payload } = useAttributes()
	const { screenHandle } = useScreen()
	const { clearCart, state } = useCart()
	const { user } = useUser()
	const [paymentMethod, setPaymentMethod] = useState<
		EnumPaymentMethod | undefined
	>()
	const { addNotification } = useNotification()

	const queryClient = useQueryClient()
	const { pointDeliverLocation } = useMap()

	const { register, getValues } = useForm<
		Pick<IUser, "email" | "name" | "phoneNumber">
	>({
		mode: "all",
		values: {
			email: user?.email || "",
			name: user?.name || "",
			phoneNumber: user?.phoneNumber || 2,
		},
	})

	const getUserValue = () => {
		const values = getValues()
		setUserData(values)
	}

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

	useEffect(() => {
		if (paymentMethod === EnumPaymentMethod.CARD) {
			addNotification({
				message:
					"Для прохождения оплаты по visa. Используйте следующее. Номер карты 4242 4242 4242 4242. Дата истечения срока 04/26. CVC 444",
				options: {
					notifyType: "Dialog",
					background: "Black",
				},
			})
		}
	}, [paymentMethod])

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

	return (
		<>
			<section>
				<div className="container">
					<div className={style.checkout}>
						{/* <Button btnType="default" className={style.btnGo}>
							Заказать
						</Button> */}
						<Heading text="Оформление заказа" />
						<div className={style.wrapp}>
							<div className={style.column}>
								<strong>Данные получателя</strong>
								<div className={style.items}>
									<FieldComponent
										{...register("email")}
										defaultValue={user?.email}
										className={style.item}
										placeholder={user?.email}
									/>
									<FieldComponent
										{...register("name")}
										defaultValue={user?.name}
										className={style.item}
										placeholder={user?.name}
									/>
									<FieldComponent
										{...register("phoneNumber")}
										defaultValue={user?.phoneNumber}
										className={style.item}
										placeholder={user?.phoneNumber.toString()}
										type="number"
									/>
									<Button
										className={cn(style.btn, style.action)}
										btnType="submit"
										onClick={getUserValue}
									>
										Готово
									</Button>
								</div>
								<Button
									className={cn(style.btn, style.fixed)}
									btnType="default"
								>
									<FiEdit2 />
								</Button>
							</div>
							<div className={style.column}>
								<strong>Пункт выдачи</strong>
								<div className={style.items}>
									<div className={cn(style.item, style.point)}>
										{pointDeliverLocation?.name}
									</div>
								</div>
								<Button
									className={cn(style.btn, style.fixed)}
									btnType="default"
									onClick={() =>
										screenHandle({
											content: <SelectLocation />,
											typeOfScreen: "default",
										})
									}
								>
									<FiEdit2 />
								</Button>
							</div>
							<div className={style.column}>
								<strong>Способ оплаты</strong>
								<div className={style.methods}>
									<div
										className={cn(style.method, {
											[style.disabled]:
												paymentMethod === EnumPaymentMethod.CACHE,
										})}
										onClick={() => setPaymentMethod(EnumPaymentMethod.CARD)}
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
												className={cn(style.icon, style.elcard)}
												title="Элкарт"
											></div>
											<div
												className={cn(style.icon, style.mbank)}
												title="Mbank"
											></div>
										</div>
										<FieldComponent
											readOnly
											type="checkbox"
											checked={paymentMethod === EnumPaymentMethod.CARD}
											disabled={paymentMethod === EnumPaymentMethod.CACHE}
										/>
									</div>
									<div
										className={cn(style.method, {
											[style.disabled]:
												paymentMethod === EnumPaymentMethod.CARD,
										})}
										onClick={() => setPaymentMethod(EnumPaymentMethod.CACHE)}
									>
										<strong>
											<BiWallet />
											Наличными
										</strong>
										<FieldComponent
											readOnly
											type="checkbox"
											checked={paymentMethod === EnumPaymentMethod.CACHE}
											disabled={paymentMethod === EnumPaymentMethod.CARD}
										/>
									</div>
								</div>
							</div>
							<div className={style.column}>
								<strong>Товары, {state.products.length}шт</strong>
								<div className={style.products}>
									{state.products.map((product) => (
										<div className={style.product} key={product.id}>
											<span># {product.title}</span>
											<Price
												price={product.price}
												discount={product.discount}
											/>
										</div>
									))}
								</div>
							</div>
							<div className={style.column}>
								<div className={style.payment}>
									<div className={style.paymentItem}>
										Скидка <span>{state.totalDiscount || "Н/Д"}</span>
									</div>
									<div className={cn(style.paymentItem, style.total)}>
										Итого <Price price={state.totalCache} />
									</div>
									<div className={style.rules}>
										<div className={style.rulesItem}>
											Соглашаюсь c
											<div className={style.checkbox}>
												<FieldComponent
													type="checkbox"
													onChange={() =>
														setRules((prevState) => ({
															...prevState,
															rulesOfUse: !rules.rulesOfUse,
														}))
													}
												/>
												<Button onClick={() => scrollToSection("rules")}>
													Правилами пользования
												</Button>
											</div>
										</div>
										<div className={style.rulesItem}>
											Ознакомлен
											<div className={style.checkbox}>
												<FieldComponent
													type="checkbox"
													onChange={() =>
														setRules((prevState) => ({
															...prevState,
															parties: !rules.parties,
														}))
													}
												/>
												<Button>Права и обязанности сторон</Button>
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
										Перейти к оформлению
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="container">
					{/* Позднее добавить превью чека... */}
					{/* <div className={style.preview}>
						<div className={style.previewDocument}>
										
						</div>
					</div> */}
					<div className={style.privacy} id="rules">
						<div className={style.policy}>
							<strong>Политика конфеденциальности</strong>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Possimus accusantium in sequi quae magnam assumenda labore alias
								doloremque optio. Sunt nostrum aliquid molestias officia veniam
								accusamus fugit voluptatibus quaerat praesentium!
							</p>
						</div>
						<div className={style.policy}>
							<strong>Правила Silk Valley</strong>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Beatae, iure distinctio. Rem aspernatur vel iste qui accusamus
								explicabo reprehenderit sit earum maiores quidem!
							</p>
						</div>
						<div className={style.policy}>
							<strong>Права и обязанности сторон</strong>
							<p>
								<q>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</q>
								Repellat veritatis cumque modi sequi fugit non, assumenda nam
								perspiciatis totam esse illo illum necessitatibus debitis
								voluptatem eum ipsam possimus obcaecati. Quod sed tenetur sequi
								ullam ut omnis eius quos ipsum maxime, possimus quasi, similique
								tempora quisquam at libero nulla est illum voluptate dolor.
								Cumque doloremque repellat molestias voluptas sint sit neque!
							</p>
						</div>
						<div className={style.policy}>
							<strong>Правила пользования</strong>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
								quibusdam debitis culpa pariatur totam, nobis officia labore nam
								placeat non facilis, sint minima commodi. Nihil perferendis
								obcaecati ad repudiandae itaque qui voluptates molestiae
								delectus temporibus optio iure velit dignissimos, incidunt
								provident at! Possimus aliquid illo autem esse laboriosam
								quisquam ut ratione odit. Vel odio reprehenderit quasi sed quod
								harum itaque modi omnis deleniti quibusdam numquam consequatur
								corrupti deserunt alias, amet fugit, rem voluptatem qui ipsam
								delectus, tempore tempora voluptas eius voluptates! Officia
								soluta odio, praesentium mollitia architecto eius asperiores
								excepturi voluptatibus perferendis eligendi optio odit doloribus
								officiis voluptates, porro labore!
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
