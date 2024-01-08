"use client"

import cn from "classnames"
import { FC } from "react"
import style from "./product-discount.module.scss"

interface IProductDiscountComponentProps {
	discount?: number
	type?: "default" | "extension"
	size?: "xl1" | "xl2"
}
export const ProductDiscountComponent: FC<IProductDiscountComponentProps> = ({
	discount,
	type = "default",
	size = "xl1",
}) => {
	return (
		<>
			{discount && (
				<span
					className={cn(style.discount, {
						[style.extension]: type === "extension",
						[style.default]: type === "default",
						[style.xl1]: size === "xl1",
						[style.xl2]: size === "xl2",
					})}
				>
					-{discount}%
				</span>
			)}
		</>
	)
}
