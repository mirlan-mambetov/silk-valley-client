"use client"

import {
	ButtonComponent,
	DeliverComponent,
	ProductActionsComponent,
	ProductPriceComponent,
} from "@/components"
import { useCart } from "@/hooks/cart/useCart"
import { useDeliver } from "@/hooks/deliver/useDeliver"
import { useScreen } from "@/hooks/screen/useScreen"
import { IProduct } from "@/interfaces/product.interface"
import cn from "classnames"
import { FC, useEffect, useState } from "react"
import { FiEdit2 } from "react-icons/fi"
import style from "./product-info.module.scss"

interface IProductInfoComponentProps {
	data: IProduct
	type?: "sticky" | "default"
	size: string | undefined
	color: string | undefined
}
export const ProductInfoComponent: FC<IProductInfoComponentProps> = ({
	data,
	type = "default",
	color,
	size,
}) => {
	const [isExistColor, setIsExistColor] = useState<string | undefined>(
		undefined
	)
	const { setContentHandler } = useScreen()
	const { address } = useDeliver()
	const { products } = useCart()

	useEffect(() => {
		const isExist = products.find((product) => product.id === data.id)
		setIsExistColor(isExist?.selectedColor)
	}, [])

	return (
		<div
			className={cn(style.info, {
				[style.sticky]: type === "sticky",
			})}
		>
			<h3 className={style.total}>Общие детали</h3>
			<div className={style.wrap}>
				<div className={style.box}>
					<small>Доставка</small>
					<div className={style.box_item}>
						<span>
							{address.city ||
								address.town ||
								address.state ||
								"Иссык - Кульская область. г. Каракол"}
						</span>
						<ButtonComponent
							title="Выбрать координаты доставки"
							onClick={() => setContentHandler(<DeliverComponent />)}
						>
							<FiEdit2 />
						</ButtonComponent>
					</div>
				</div>

				<div className={style.box}>
					{data.discount ? (
						<>
							<small>
								Цена
								<>с учетом скидки</>
							</small>
							<div className={style.box_item}>
								<ProductPriceComponent
									price={data.price}
									discount={data.discount}
									orientation="column"
								/>
							</div>
						</>
					) : (
						<>
							<small>Цена</small>
							<div className={style.box_item}>
								<ProductPriceComponent
									price={data.price}
									discount={data.discount}
									orientation="column"
								/>
							</div>
						</>
					)}
				</div>

				{color ? (
					<div className={style.box}>
						<small>Цвет</small>
						<div className={style.box_item}>
							<span>{color}</span>
						</div>
					</div>
				) : isExistColor ? (
					<div className={style.box}>
						<small>Цвет</small>
						<div className={style.box_item}>
							<span>{isExistColor}</span>
						</div>
					</div>
				) : null}

				{size && (
					<div className={style.box}>
						<small>Размеры</small>
						<div className={style.box_item}>
							<span>{size}</span>
						</div>
					</div>
				)}

				<ProductActionsComponent
					color={color}
					size={size}
					actionType="toCart"
					alias={data.alias}
					product={data}
				/>
			</div>
		</div>
	)
}
