import cn from "classnames"
import { DetailsHTMLAttributes, FC, ReactNode } from "react"
import style from "./button.module.scss"

interface IButtonComponentProps
	extends DetailsHTMLAttributes<HTMLButtonElement> {
	type?: "default" | "cart"
	children?: ReactNode
}
export const ButtonComponent: FC<IButtonComponentProps> = ({
	type,
	children,
	className,
	...props
}) => {
	switch (type) {
		case "cart":
			return (
				<button className={cn(style.button, style.cart, className)} {...props}>
					{children ? children : "В корзину"}
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
