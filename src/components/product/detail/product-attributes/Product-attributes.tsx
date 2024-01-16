"use client"

import {
	PriceComponent,
	ProducAttributeComponent,
	ProductDiscountComponent,
	RatingComponent,
} from "@/components"
import { IProduct } from "@/interfaces/product.interface"
import { FC } from "react"
import style from "./product-attributes.module.scss"

interface IAttributesComponentProps {
	data: IProduct
}
export const ProductAttributesComponent: FC<IAttributesComponentProps> = ({
	data,
}) => {
	return (
		<div className={style.attributes}>
			<RatingComponent rating={data?.rating || 0} className={style.rating} />
			<div className={style.price}>
				<PriceComponent
					price={data.price}
					discount={data.discount}
					orientation="column"
					size="2xl"
				/>
				<ProductDiscountComponent product={data} type="extension" size="xl2" />
			</div>
			<ProducAttributeComponent
				data={["white", "black", "yellow", "White&Black"]}
				title="Цвета"
			/>
			<ProducAttributeComponent
				data={["32xl", "34xl", "38xl", "48XXL"]}
				title="Размеры"
			/>
			<div className={style.description}>
				<h5 className={style.title}>Описание</h5>
				<p>{data?.description}</p>
			</div>
		</div>
	)
}
