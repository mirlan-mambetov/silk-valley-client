"use client"

import cn from "classnames"
import {
	ButtonHTMLAttributes,
	DetailsHTMLAttributes,
	FC,
	ReactNode,
} from "react"
import { IoIosRemoveCircleOutline, IoMdSend } from "react-icons/io"
import { IoCloseOutline } from "react-icons/io5"
import { LuPercent } from "react-icons/lu"
import { LoaderComponent } from "../loader/Loader"
import style from "./button.module.scss"

type IButtonComponentProps = {
	isExistOnCart?: boolean
	btnType?:
		| "default"
		| "cart"
		| "closed"
		| "promo"
		| "delete"
		| "submit"
		| "rangeButton"
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
						<>{isLoading ? <LoaderComponent /> : children}</>
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
					className={cn(style.button, style.delete, className, {
						[style.xl2]: size === "xl2",
						[style.xxl1]: size === "xxl1",
					})}
					{...props}
				>
					<IoIosRemoveCircleOutline />
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
					{isLoading ? <LoaderComponent /> : children ? children : "В корзину"}
				</button>
			)
		case "rangeButton":
			return (
				<button
					className={cn(style.button, style.range, className, {
						[style.isloading]: isLoading,
					})}
					{...props}
				>
					{isLoading ? <LoaderComponent /> : children}
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
					{isLoading ? <LoaderComponent /> : children}
				</button>
			)
	}
}
