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
import { IoMdSend } from "react-icons/io"
import style from "./button.module.scss"

type IButtonComponentProps = {
	isExistOnCart?: boolean
	btnType?: "default" | "cart" | "closed" | "promo" | "delete" | "submit"
	children?: ReactNode
	size?: "xl1" | "xxl1" | "xl2"
	isLoading?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement> &
	DetailsHTMLAttributes<HTMLButtonElement>

export const ButtonComponent: FC<IButtonComponentProps> = ({
	btnType,
	children,
	className,
	isExistOnCart,
	size = "xl1",
	isLoading,
	...props
}) => {
	switch (btnType) {
		case "submit":
			return (
				<button
					className={cn(style.button, style.submit, className)}
					{...props}
				>
					{children ? (
						<>{isLoading ? "Загрузка.." : children}</>
					) : (
						<>
							<IoMdSend />
							<span>Отправить</span>
						</>
					)}
				</button>
			)
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
					{/* {isExistOnCart ? <>Перейти в корзину </> : "В корзину"} */}
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
