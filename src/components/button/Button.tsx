"use client"

import cn from "classnames"
import {
	ButtonHTMLAttributes,
	DetailsHTMLAttributes,
	FC,
	ReactNode,
} from "react"
import { IoCloseOutline } from "react-icons/io5"
import { LuPercent } from "react-icons/lu"

import { CgRemove } from "react-icons/cg"
import style from "./button.module.scss"

type IButtonComponentProps = {
	btnType?: "default" | "cart" | "closed" | "promo" | "delete"
	children?: ReactNode
	size?: "xl1" | "xxl1" | "xl2"
} & ButtonHTMLAttributes<HTMLButtonElement> &
	DetailsHTMLAttributes<HTMLButtonElement>

export const ButtonComponent: FC<IButtonComponentProps> = ({
	btnType,
	children,
	className,
	size = "xl1",
	...props
}) => {
	switch (btnType) {
		case "delete":
			return (
				<button
					className={cn(style.button, style.delete, className)}
					{...props}
				>
					<CgRemove />
				</button>
			)
		case "promo":
			return (
				<button className={cn(style.button, style.promo, className)} {...props}>
					<LuPercent />
					<span>Промо-код</span>
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
				<button
					className={cn(style.button, style.close, className, {
						[style.xl2]: size === "xl2",
					})}
					{...props}
				>
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
