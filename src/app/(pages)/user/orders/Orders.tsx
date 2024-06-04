"use client"

import { ButtonComponent } from "@/components"
import { formatDateString } from "@/helpers/formate.data.helper"
import { useUser } from "@/hooks/user/useUser"
import { formatPrice } from "@/utils/product.utils"
import { useRouter } from "next/navigation"
import { FC } from "react"
import { MdOutlineBookmarkBorder } from "react-icons/md"
import style from "./orders.module.scss"

const Orders: FC = () => {
	const { user } = useUser()
	const { push } = useRouter()
	return (
		<div className={style.orders}>
			{user?.orders.length ? (
				user.orders.map((order) => (
					<div className={style.order} key={order.id}>
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
							<ButtonComponent
								onClick={() => push(`/user/orders/${order.id}`)}
								title={`Просмотр заказа ${order.orderId}`}
							>
								<span>
									<MdOutlineBookmarkBorder />
								</span>
							</ButtonComponent>
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
