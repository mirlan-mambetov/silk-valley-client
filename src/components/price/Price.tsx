"use client"

import { calculateOldPrice, formatPrice } from "@/utils/product.utils"
import cn from "classnames"
import { FC } from "react"
import style from "./price.module.scss"

interface IPriceComponentProps {
	price: number
	discount?: number
	size?: "1xl" | "2xl"
	orientation?: "column" | "row"
}
export const PriceComponent: FC<IPriceComponentProps> = ({
	price,
	discount,
	size = "1xl",
	orientation = "row",
}) => {
	return (
		<div
			className={cn(style.price, {
				[style.xl2]: size === "2xl",
				[style.column]: orientation === "column",
			})}
		>
			{discount ? (
				<>
					<div className={style.old}>
						{formatPrice(price)} <span>KGS</span>
					</div>
					<div className={style.new}>
						{calculateOldPrice(price, discount)} <span>KGS</span>
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
