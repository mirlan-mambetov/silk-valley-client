"use client"

import {
	ButtonComponent,
	FeaturedComponent,
	PriceComponent,
	__ProductActions,
} from "@/components"
import { showDestinationName } from "@/helpers/showDestinationName"
import { useCart } from "@/hooks/cart/useCart"
import { useDeliver } from "@/hooks/deliver/useDeliver"
import { useScreen } from "@/hooks/screen/useScreen"
import { IProduct } from "@/interfaces/product.interface"
import cn from "classnames"
import { FC } from "react"
import { FiEdit2 } from "react-icons/fi"
import { SlHandbag } from "react-icons/sl"
import style from "./product-info.module.scss"

interface IProductInfoComponentProps {
	data: IProduct
	type?: "sticky" | "default"
	selectedColor?: string
	selectedSize?: string
}
export const ProductInfoComponent: FC<IProductInfoComponentProps> = ({
	data,
	type = "default",
	selectedColor,
	selectedSize,
}) => {
	const { setContentHandler } = useScreen()
	const { address } = useDeliver()
	const { products } = useCart()

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
					color={selectedColor}
					size={selectedSize}
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
