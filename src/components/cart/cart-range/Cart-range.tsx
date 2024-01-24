"use client"

import { ButtonComponent } from "@/components"
import cn from "classnames"
import { DetailsHTMLAttributes, FC } from "react"
import { LuMinus, LuPlus } from "react-icons/lu"
import style from "./cart-range.module.scss"

interface ICartRangeComponentProps
	extends DetailsHTMLAttributes<HTMLDivElement> {
	text?: boolean
}
export const CartRangeComponent: FC<ICartRangeComponentProps> = ({
	text = true,
	className,
	...props
}) => {
	return (
		<div className={cn(style.quantity, className)} {...props}>
			{text && <small>Количество</small>}
			<div className={style.quantity_item}>
				<ButtonComponent>
					<LuMinus />
				</ButtonComponent>
				<span>1</span>
				<ButtonComponent>
					<LuPlus />
				</ButtonComponent>
			</div>
		</div>
	)
}
