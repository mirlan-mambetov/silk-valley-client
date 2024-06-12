"use client"

import { Button, FieldComponent, Heading, SelectLocation } from "@/components"
import { EnumPaymentMethod } from "@/enums/Payment.enum"
import { useScreen } from "@/hooks/screen/useScreen"
import { useMap } from "@/hooks/useMap"
import { useNotification } from "@/hooks/useNotification"
import { useUser } from "@/hooks/user/useUser"
import cn from "classnames"
import { useEffect, useState } from "react"
import { BiWallet } from "react-icons/bi"
import { FiEdit2 } from "react-icons/fi"
import style from "./checkout.module.scss"

export const Checkout = () => {
	// const { push } = useRouter()
	const { screenHandle } = useScreen()
	const { user } = useUser()
	const [userData, setUserData] = useState()
	const [paymentMethod, setPaymentMethod] = useState<
		EnumPaymentMethod | undefined
	>()
	const { addNotification } = useNotification()
	// // const { products, totalCache, clearCart } = useCart()
	// const queryClient = useQueryClient()
	const { pointDeliverLocation } = useMap()
	// const { addNotification } = useNotification()

	// PAYMENT MUTATION
	// const { mutateAsync, isPending } = useMutation({
	// 	mutationKey: ["placeOrder"],
	// 	mutationFn: (data: IPaymentDTO) => PaymentApi.placeOrder(data),
	// })

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

	// const placeOrderHandler = async (dto: IPaymentDTO) => {
	// 	try {
	// 		await mutateAsync(dto, {
	// 			onSuccess(data, variables, context) {
	// 				saveItemToStorage(
	// 					`${EnumSaveStorage.ORDER_ID}-${user?.id}`,
	// 					data.orderId
	// 				)
	// 				saveItemToStorage(
	// 					`${NotifyEnum.NOTIFY_ID}-${user?.id}`,
	// 					data.notifyId
	// 				)
	// 				addNotification({
	// 					message: data.message,
	// 					options: {
	// 						background: "Black",
	// 					},
	// 				})
	// 				queryClient.invalidateQueries({ queryKey: ["getUserProfile"] })
	// 				if (data.detail_order?.url) {
	// 					console.log(data.detail_order)
	// 					push(`${data.detail_order.url}`)
	// 				}
	// 				// clearCart()
	// 				// push(`/`)
	// 			},
	// 		})
	// 	} catch (error) {
	// 		addNotification({
	// 			message: String(error),
	// 			options: {
	// 				background: "Black",
	// 			},
	// 		})
	// 	}
	// }

	return (
		<>
			<section>
				<div className="container">
					<div className={style.checkout}>
						<Heading text="Оформление заказа" />
						<div className={style.wrapp}>
							<div className={style.column}>
								<strong>Данные получателя</strong>
								<div className={style.items}>
									<FieldComponent
										defaultValue={user?.email}
										className={style.item}
										placeholder={user?.email}
									/>
									<FieldComponent
										defaultValue={user?.name}
										className={style.item}
										placeholder={user?.name}
									/>
									<FieldComponent
										defaultValue={user?.phoneNumber}
										className={style.item}
										placeholder={user?.phoneNumber.toString()}
										type="number"
									/>
									<Button className={style.btn} btnType="default">
										<FiEdit2 />
									</Button>
								</div>
							</div>
							<div className={style.columns}>
								<div className={style.column}>
									<strong>Пункт выдачи</strong>
									<div className={style.items}>
										<div className={cn(style.item, style.point)}>
											{pointDeliverLocation?.name}
										</div>
									</div>
									<Button
										className={style.btn}
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
											type="checkbox"
											checked={paymentMethod === EnumPaymentMethod.CACHE}
											disabled={paymentMethod === EnumPaymentMethod.CARD}
										/>
									</div>
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
					<div className={style.privacy}>
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
