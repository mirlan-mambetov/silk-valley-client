"use client"

import {
	Button,
	Featured,
	Price,
	ProductActions,
	SelectLocation,
} from "@/components"
import { showDestinationName } from "@/helpers/showDestinationName"
import { useCart } from "@/hooks/cart/useCart"
import { useScreen } from "@/hooks/screen/useScreen"
import { useAttributes } from "@/hooks/useAttributes"
import { useMap } from "@/hooks/useMap"
import cn from "classnames"
import { FC } from "react"
import { FiEdit2 } from "react-icons/fi"
import { SlHandbag } from "react-icons/sl"
import { IProductInfoProps } from "./ProductInfo.props"
import style from "./product-info.module.scss"

export const ProductInfo: FC<IProductInfoProps> = ({ data, type }) => {
	const { state } = useCart()
	const { pointDeliverLocation } = useMap()
	const { screenHandle } = useScreen()
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
								<Price
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
								<Price
									price={data.price}
									discount={data.discount}
									orientation="column"
									size="3xxl"
								/>
								<Featured size={18} type="fixed" />
							</div>
						</>
					)}
				</div>
				<div className={style.box}>
					<small>Доставка</small>
					<div className={style.box_item}>
						<span>{showDestinationName(pointDeliverLocation)}</span>
						<Button
							title="Выбрать координаты доставки"
							onClick={() => screenHandle({ content: <SelectLocation /> })}
						>
							<FiEdit2 />
						</Button>
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
				<ProductActions actionType="toCart" product={data} alias="d" />
			</div>

			<div className={style.cart}>
				<span>Товары, {state.products.length}шт</span>
				<Button>
					<SlHandbag />
				</Button>
			</div>
		</div>
	)
}
