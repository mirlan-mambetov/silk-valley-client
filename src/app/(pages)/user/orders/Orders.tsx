"use client"

import { ButtonComponent } from "@/components"
import { formatDateString } from "@/helpers/formate.data.helper"
import { useUser } from "@/hooks/user/useUser"
import { formatPrice } from "@/utils/product.utils"
import { FC } from "react"
import { CgDetailsMore } from "react-icons/cg"
import style from "./orders.module.scss"

const Orders: FC = () => {
	const { user } = useUser()
	console.log(user?.orders)
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
							<strong>Подробнее</strong>
							<ButtonComponent title={`Просмотр заказа ${order.orderId}`}>
								<CgDetailsMore />
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
