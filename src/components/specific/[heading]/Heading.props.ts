import { DetailedHTMLProps, HTMLAttributes } from "react"

export interface IHeadingProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLHeadingElement>,
		HTMLHeadingElement
	> {
	text?: string
	length?: number
	size?: "xl1" | "xl2" | "xl3" | "xxl1"
}
