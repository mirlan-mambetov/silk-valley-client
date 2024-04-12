"use client"

import { withProtected } from "@/components"
import { formatDateString } from "@/helpers/formate.data.helper"
import { useUser } from "@/hooks/user/useUser"
import { formatPrice } from "@/utils/product.utils"
import { FC } from "react"
import style from "./orders.module.scss"

const Orders: FC = () => {
	const { user } = useUser()
	return (
		<div className={style.orders}>
			{user?.orders.map((order) => (
				<div className={style.order} key={order.id}>
					<div className={style.row}>
						<strong>ORDER [ID]</strong>
						<span>{order.id}</span>
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
						<span>{formatPrice(order.total)} KGS</span>
					</div>
					<div className={style.row}>
						<strong>Дата заказа</strong>
						<span>{formatDateString(order.createdAt)}</span>
					</div>
				</div>
			))}
		</div>
	)
}

export default withProtected(Orders)
