import { ButtonHTMLAttributes, DetailsHTMLAttributes, ReactNode } from "react"

export type ButtonType = {
	isExistOnCart?: boolean
	btnType?:
		| "default"
		| "cart"
		| "closed"
		| "promo"
		| "delete"
		| "submit"
		| "rangeButton"
		| "placeOrder"
	children?: ReactNode
	size?: "xl1" | "xxl1" | "xl2"
	isLoading?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement> &
	DetailsHTMLAttributes<HTMLButtonElement>
