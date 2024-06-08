import { DetailsHTMLAttributes } from "react"

export interface IPriceProps extends DetailsHTMLAttributes<HTMLDivElement> {
	price: number
	discount?: number
	size?: "1xl" | "2xl" | "1xxl" | "3xxl"
	orientation?: "column" | "row"
}
