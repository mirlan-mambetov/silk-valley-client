"use client"

import { calculateOldPrice, formatPrice } from "@/utils/product.utils"
import cn from "classnames"
import { FC } from "react"
import style from "./price.module.scss"
import { IPriceProps } from "./Price.props"

export const Price: FC<IPriceProps> = ({
	price,
	discount,
	size = "1xl",
	orientation = "row",
	className,
}) => {
	return (
		<div
			className={cn(style.price, className, {
				[style.xl2]: size === "2xl",
				[style.xl1]: size === "1xl",
				[style.xxl3]: size === "3xxl",
				[style.xxl1]: size === "1xxl",
				[style.column]: orientation === "column",
				[style.row]: orientation === "row",
			})}
		>
			{discount ? (
				<>
					<div className={style.new}>
						{calculateOldPrice(price, discount)} <span>KGS</span>
					</div>
					<div className={style.old}>
						{formatPrice(price)} <span>KGS</span>
					</div>
				</>
			) : (
				<div className={style.default}>
					{formatPrice(price)}
					<span>KGS</span>
				</div>
			)}
		</div>
	)
}
