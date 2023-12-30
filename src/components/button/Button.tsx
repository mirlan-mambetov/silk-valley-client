import cn from "classnames"
import { DetailsHTMLAttributes, FC, ReactNode } from "react"
import style from "./button.module.scss"

interface IButtonComponent extends DetailsHTMLAttributes<HTMLButtonElement> {
	type?: "default" | "cart"
	children?: ReactNode
}
export const ButtonComponent: FC<IButtonComponent> = ({
	type,
	children,
	className,
}) => {
	switch (type) {
		case "cart":
			return <button className={cn(style.button, className)}>cartbtn</button>
		default:
			return <button className={cn(style.button, className)}>{children}</button>
	}
}
