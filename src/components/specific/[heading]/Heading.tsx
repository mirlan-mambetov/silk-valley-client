"use client"

import { NotifyPlaceholder } from "@/components"
import cn from "classnames"
import { FC } from "react"
import style from "./heading.module.scss"
import { IHeadingProps } from "./Heading.props"

export const Heading: FC<IHeadingProps> = ({
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
