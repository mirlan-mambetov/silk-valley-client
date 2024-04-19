"use client"

import cn from "classnames"
import { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import { NotifyPlaceholder } from "../notify/notify-placeholder/Notify-placeholder"
import style from "./heading.component.module.scss"

interface IHeadingComponentProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLHeadingElement>,
		HTMLHeadingElement
	> {
	text?: string
	length?: number
	size?: "xl1" | "xl2" | "xl3" | "xxl1"
}
export const HeadingComponent: FC<IHeadingComponentProps> = ({
	text = "Заголовок",
	length,
	className,
	size,
	...props
}) => {
	return (
		<h3
			className={cn(style.heading, style.top, className, {
				[style.xl1]: size === "xl1",
				[style.xl2]: size === "xl2",
				[style.xl3]: size === "xl3",
			})}
			{...props}
		>
			<span>
				{text}
				<NotifyPlaceholder length={length} toUp="1" />
			</span>
		</h3>
	)
}
