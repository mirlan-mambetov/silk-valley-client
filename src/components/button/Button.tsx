"use client"

import cn from "classnames"
import { DetailsHTMLAttributes, FC, ReactNode } from "react"
import { IoCloseOutline } from "react-icons/io5"
import { LuPercent } from "react-icons/lu"

import style from "./button.module.scss"

interface IButtonComponentProps
	extends DetailsHTMLAttributes<HTMLButtonElement> {
	type?: "default" | "cart" | "closed" | "promo"
	children?: ReactNode
}
export const ButtonComponent: FC<IButtonComponentProps> = ({
	type,
	children,
	className,
	...props
}) => {
	switch (type) {
		case "promo":
			return (
				<button className={cn(style.button, style.promo, className)} {...props}>
					<LuPercent />
					<span>Есть промо-код</span>
				</button>
			)
		case "cart":
			return (
				<button className={cn(style.button, style.cart, className)} {...props}>
					{children ? children : "В корзину"}
				</button>
			)
		case "closed":
			return (
				<button className={cn(style.button, className)} {...props}>
					<IoCloseOutline />
				</button>
			)
		default:
			return (
				<button className={cn(style.button, className)} {...props}>
					{children}
				</button>
			)
	}
}
