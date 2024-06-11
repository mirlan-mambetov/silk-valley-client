"use client"

import { Heading, Steps } from "@/components"
import { useMap } from "@/hooks/useMap"
import { useUser } from "@/hooks/user/useUser"
import style from "./checkout.module.scss"

export const Checkout = () => {
	// const { push } = useRouter()
	const { user } = useUser()
	// const [methodCard, setMethodCard] = useState(false)
	// const [methodCache, setMethodCache] = useState(false)
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

	// useEffect(() => {
	// 	if (methodCard) {
	// 		addNotification({
	// 			message:
	// 				"Для прохождения оплаты по visa. Используйте следующее. Номер карты 4242 4242 4242 4242. Дата истечения срока 04/26. CVC 444",
	// 			options: {
	// 				notifyType: "Dialog",
	// 				background: "Black",
	// 			},
	// 		})
	// 	}
	// }, [methodCard])

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
						<div className={style.head}>
							<Heading text="Оформление заказа#" size="xl1" />
							{/* <strong>
								Пожалуйста, будьте внимательны. Проверьте информацию прежде чем
								оформить заказ.
							</strong> */}
						</div>
						<div className={style.wrap}>
							<Steps />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
