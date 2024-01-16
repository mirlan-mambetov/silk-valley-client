"use client"

import { IProduct } from "@/interfaces/product.interface"
import cn from "classnames"
import { FC } from "react"
import style from "./product-discount.module.scss"

interface IProductDiscountComponentProps {
	product: Pick<IProduct, "discount" | "new" | "isHit">
	type?: "default" | "extension"
	size?: "xl1" | "xl2"
}
export const ProductDiscountComponent: FC<IProductDiscountComponentProps> = ({
	product,
	type = "default",
	size = "xl1",
}) => {
	return (
		<div
			className={cn(style.wrap, {
				[style.extension]: type === "extension",
				[style.default]: type === "default",
			})}
		>
			{product?.discount ? (
				<div className={style.discount}>
					<span>- {product.discount}%</span>
				</div>
			) : null}
			<div className={style.promotions}>
				{product?.new && <span className={style.new}>Новинка</span>}
				{product?.isHit && <span className={style.hite}>Хит продаж</span>}
			</div>
		</div>
	)
}
