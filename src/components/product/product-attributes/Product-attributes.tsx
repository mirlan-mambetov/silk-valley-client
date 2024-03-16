"use client"

import {
	ProducAttributeComponent,
	ProductDiscountComponent,
	ProductPriceComponent,
	ProductRatingComponent,
} from "@/components"
import { useSelectedAttributes } from "@/hooks/cart/useSelectedAttributes"
import { IProduct } from "@/interfaces/product.interface"
import { FC } from "react"
import style from "./product-attributes.module.scss"

interface IAttributesComponentProps {
	data: IProduct
}
export const ProductAttributesComponent: FC<IAttributesComponentProps> = ({
	data,
}) => {
	const { setColorHandler, setSizeHandler } = useSelectedAttributes()

	return (
		<div className={style.attributes}>
			<ProductRatingComponent
				rating={data?.rating || 0}
				className={style.rating}
			/>
			<div className={style.price}>
				<ProductPriceComponent
					price={data.price}
					discount={data.discount}
					orientation="column"
					size="2xl"
				/>
				<ProductDiscountComponent product={data} type="extension" size="xl2" />
			</div>
			<ProducAttributeComponent
				selectedValueHandler={(value) => setColorHandler(value)}
				data={["Черный", "Белый", "Зеленый", "Черно&Белый"]}
				title="Цвета"
				size="1xl"
			/>
			<ProducAttributeComponent
				selectedValueHandler={(value) => setSizeHandler(value)}
				data={["32xl", "34xl", "38xl", "48XXL"]}
				title="Размеры"
				size="1xl"
			/>
			<div className={style.description}>
				<h5 className={style.title}>Описание</h5>
				<p>{data?.description}</p>
			</div>
		</div>
	)
}
