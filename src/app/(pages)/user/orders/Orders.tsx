"use client"

import { Button } from "@/components"
import { NotifyEnum } from "@/enums/notify.enum"
import { EnumSaveStorage } from "@/enums/Payment.enum"
import { formatDateString } from "@/helpers/formate.data.helper"
import { getItemFormStorage } from "@/helpers/local.storage.helper"
import { useMutationHooks } from "@/hooks/useMutation"
import { useUser } from "@/hooks/user/useUser"
import { formatPrice } from "@/utils/product.utils"
import { useQueryClient } from "@tanstack/react-query"
import cn from "classnames"
import { useRouter } from "next/navigation"
import { FC, useEffect, useState } from "react"
import { MdOutlineBookmarkBorder } from "react-icons/md"
import style from "./orders.module.scss"

const Orders: FC = () => {
	const { changeNotificationExpire } = useMutationHooks()
	const queryClient = useQueryClient()
	const [orderId, setOrderId] = useState<number | undefined>(undefined)
	const { user } = useUser()
	const { push } = useRouter()

	useEffect(() => {
		const orderId = getItemFormStorage(
			`${EnumSaveStorage.ORDER_ID}-${user?.id}`
		)

		const notifyId = localStorage.getItem(`${NotifyEnum.NOTIFY_ID}-${user?.id}`)
		const changeExpire = async (id: number) => {
			await changeNotificationExpire.mutateAsync(id, {
				onSuccess(data, variables, context) {
					if (!!data) {
						localStorage.removeItem(`${NotifyEnum.NOTIFY_ID}-${user?.id}`)
						queryClient.invalidateQueries({ queryKey: ["getUserProfile"] })
					}
				},
			})
		}
		if (notifyId) {
			changeExpire(parseInt(notifyId))
		}
		if (orderId) {
			setOrderId(+orderId)
		}
		return () => {
			localStorage.removeItem(`${EnumSaveStorage.ORDER_ID}-${user?.id}`)
		}
	}, [])

	return (
		<div className={style.orders}>
			{user?.orders.length ? (
				user.orders.map((order) => (
					<div
						className={cn(style.order, {
							[style.active]: order.id === orderId,
						})}
						key={order.id}
					>
						<div className={style.row}>
							<strong>ORDER [ID]</strong>
							<span>{order.orderId}</span>
						</div>
						<div className={style.row}>
							<strong>Статус</strong>
							<span>{order.status}</span>
						</div>
						<div className={style.row}>
							<strong>Товар</strong>
							<div className={style.productNames}>
								{order.items.map((product) => (
									<span key={product.id}>{product.name}</span>
								))}
							</div>
						</div>
						<div className={style.row}>
							<strong>Сумма заказа</strong>
							<span>{formatPrice(order.totalCache)} KGS</span>
						</div>
						<div className={style.row}>
							<strong>Дата заказа</strong>
							<span>{formatDateString(order.createdAt)}</span>
						</div>
						<div className={style.row}>
							<strong>Действие</strong>
							<Button
								onClick={() => push(`/user/orders/${order.id}`)}
								title={`Просмотр заказа ${order.orderId}`}
							>
								<span>
									<MdOutlineBookmarkBorder />
								</span>
							</Button>
						</div>
					</div>
				))
			) : (
				<span>У вас заказов нет</span>
			)}
		</div>
	)
}

export default Orders
