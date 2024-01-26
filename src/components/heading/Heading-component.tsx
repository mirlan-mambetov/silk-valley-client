"use client"

import cn from "classnames"
import { FC } from "react"
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
				{length ? <sup>{length}</sup> : null}
			</span>
		</h3>
	)
}
