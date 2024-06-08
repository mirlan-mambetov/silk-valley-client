"use client"

import { Loader } from "@/components"
import { ButtonType } from "@/types/button.type"
import cn from "classnames"
import { FC } from "react"
import { IoIosRemoveCircleOutline, IoMdSend } from "react-icons/io"
import { IoCloseOutline } from "react-icons/io5"
import { LuPercent } from "react-icons/lu"
import { MdOutlineBorderColor } from "react-icons/md"
import style from "./button.module.scss"

export const Button: FC<ButtonType> = ({
	btnType,
	children,
	className,
	isExistOnCart,
	size = "xl1",
	isLoading,
	...props
}) => {
	switch (btnType) {
		case "placeOrder":
			return (
				<button
					className={cn(style.button, style.placeOrder, className)}
					{...props}
				>
					<MdOutlineBorderColor />
					{children ? <span>{children}</span> : <span>Оформить заказ</span>}
				</button>
			)
		case "submit":
			return (
				<button
					className={cn(style.button, style.submit, className)}
					{...props}
				>
					{children ? (
						<>{isLoading ? <Loader /> : children}</>
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
					{isLoading ? <Loader /> : children ? children : "В корзину"}
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
					{isLoading ? <Loader /> : children}
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
					{isLoading ? <Loader /> : children}
				</button>
			)
	}
}
