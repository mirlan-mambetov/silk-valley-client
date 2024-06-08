import { DetailsHTMLAttributes } from "react"

export interface ILogo extends DetailsHTMLAttributes<HTMLDivElement> {
	width?: number
	height?: number
	color?: "black" | "purple"
}
