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
}
export const HeadingComponent: FC<IHeadingComponentProps> = ({
	text = "Заголовок",
	length,
	...props
}) => {
	return (
		<h3 className={cn(style.heading, style.top)} {...props}>
			<span>
				{text}
				<NotifyPlaceholder length={length} toUp="1" />
			</span>
		</h3>
	)
}
