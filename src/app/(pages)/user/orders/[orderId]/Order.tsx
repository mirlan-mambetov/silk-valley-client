"use client"

import { OrderApi } from "@/api/api-order/api-order"
import { Heading, Loader, Price } from "@/components"
import { formatDateString } from "@/helpers/formate.data.helper"
import { showDestinationName } from "@/helpers/showDestinationName"
import { useQuery } from "@tanstack/react-query"
import { FC } from "react"
import style from "./order.module.scss"

interface IOrderProps {
	orderId: string
}
export const Order: FC<IOrderProps> = ({ orderId }) => {
	const { data, isLoading } = useQuery({
		queryKey: ["getUserOrder"],
		queryFn: () => OrderApi.fetchOrder(+orderId),
	})

	return isLoading ? (
		<Loader />
	) : (
		<div className="container">
			<div className={style.order}>
				<Heading text={`Детали заказа № "${data?.orderId}"`} />
				<div className={style.wrap}>
					<div className={style.column}>
						<strong>ID заказа</strong>
						{data?.orderId}
					</div>

					<div className={style.column}>
						<strong>Товары</strong>
						<div className={style.items}>
							{data?.items.map((product) => (
								<div className={style.item} key={product.id}>
									<span>#{product.name}</span>
								</div>
							))}
						</div>
					</div>
					<div className={style.column}>
						<strong>Оформлен</strong>
						{formatDateString(data?.createdAt || "")}
					</div>
					<div className={style.column}>
						<strong>Метод оплаты</strong>
						{data?.payment_type}
					</div>
					<div className={style.column}>
						<strong>Статус заказа</strong>
						{data?.status}
					</div>
					<div className={style.column}>
						<strong>Итого</strong>
						<Price price={data?.totalCache || 20} orientation="column" />
					</div>
					<div className={style.column}>
						<strong>Обновлен</strong>
						{formatDateString(data?.updatedAt || "")}
					</div>
					<div className={style.column}>
						<strong>Пункт доставки</strong>
						{showDestinationName(data?.address)}
					</div>
				</div>
			</div>
		</div>
	)
}
