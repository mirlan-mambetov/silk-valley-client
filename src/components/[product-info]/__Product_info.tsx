"use client"

import {
	__ProductActions,
	ButtonComponent,
	FeaturedComponent,
	PriceComponent,
} from "@/components"
import { showDestinationName } from "@/helpers/showDestinationName"
import { useCart } from "@/hooks/cart/useCart"
import { useDeliver } from "@/hooks/deliver/useDeliver"
import { useAttributes } from "@/hooks/useAttributes"
import cn from "classnames"
import { FC } from "react"
import { FiEdit2 } from "react-icons/fi"
import { SlHandbag } from "react-icons/sl"
import { IProductInfoProps } from "./__Product_info.props"
import style from "./_product_info.module.scss"

export const __Product_info: FC<IProductInfoProps> = ({ data, type }) => {
	const { address } = useDeliver()
	const { products } = useCart()
	const {
		payload: { selectedColor, selectedSize },
	} = useAttributes()

	return (
		<div
			className={cn(style.wrap, {
				[style.sticky]: type === "sticky",
			})}
		>
			<div className={style.info}>
				<div className={style.box}>
					{data.discount ? (
						<>
							<small>
								Цена
								<>с учетом скидки</>
							</small>
							<div className={style.box_item}>
								<PriceComponent
									price={data.price}
									discount={data.discount}
									orientation="column"
									size="3xxl"
								/>
							</div>
						</>
					) : (
						<>
							<small>Цена</small>
							<div className={style.box_item}>
								<PriceComponent
									price={data.price}
									discount={data.discount}
									orientation="column"
									size="3xxl"
								/>
								<FeaturedComponent size={18} type="fixed" />
							</div>
						</>
					)}
				</div>
				<div className={style.box}>
					<small>Доставка</small>
					<div className={style.box_item}>
						<span>{showDestinationName(address)}</span>
						<ButtonComponent
							title="Выбрать координаты доставки"
							// onClick={() => setContentHandler(<DeliverComponent />)}
						>
							<FiEdit2 />
						</ButtonComponent>
					</div>
				</div>

				{selectedColor && (
					<div className={style.box}>
						<small>Цвет</small>
						<div className={style.box_item}>
							<span>{selectedColor}</span>
						</div>
					</div>
				)}

				{selectedSize && (
					<div className={style.box}>
						<small>Размеры</small>
						<div className={style.box_item}>
							<span>{selectedSize}</span>
						</div>
					</div>
				)}
				<__ProductActions
					btnSize="2xl"
					actionType="toCart"
					alias={data.alias}
					product={data}
				/>
			</div>

			<div className={style.cart}>
				<span>Товары, {products.length}шт</span>
				<ButtonComponent>
					<SlHandbag />
				</ButtonComponent>
			</div>
		</div>
	)
}
