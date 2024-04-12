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
					<div className={style.head}>
						<span>ORDER [ID]</span>
						<span>Статус</span>
						<span>Товар</span>
						<span>Сумма заказа</span>
						<span>Дата заказа</span>
					</div>
					<div className={style.body}>
						<span>{order.id}</span>
						<span>{order.status}</span>
						<div className={style.productNames}>
							{order.items.map((product) => (
								<span key={product.id}>{product.name}</span>
							))}
						</div>
						<span>{formatPrice(order.total)} KGS</span>
						<span>{formatDateString(order.createdAt)}</span>
					</div>
				</div>
			))}
		</div>
	)
}

export default withProtected(Orders)
