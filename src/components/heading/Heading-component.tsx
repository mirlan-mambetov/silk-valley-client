"use client"

import cn from "classnames"
import { FC } from "react"
import { NotifyPlaceholder } from "../notify/notify-placeholder/Notify-placeholder"
import style from "./heading.component.module.scss"

interface IHeadingComponentProps {
	text?: string
	length?: number
}
export const HeadingComponent: FC<IHeadingComponentProps> = ({
	text = "Заголовок",
	length,
}) => {
	return (
		<h3 className={cn(style.heading, style.top)}>
			<span>
				{text}
				<NotifyPlaceholder length={length} />
			</span>
		</h3>
	)
}
