"use client"

import cn from "classnames"
import { FC } from "react"
import style from "./notify-placeholder.module.scss"
import { INotifyPlaceholderProps } from "./Notify-Placeholder.props"

export const NotifyPlaceholder: FC<INotifyPlaceholderProps> = ({
	length,
	toUp,
}) => {
	return length ? (
		<div
			className={cn(style.placeholder, style.default, {
				[style.one]: toUp === "1",
			})}
		>
			{length}
		</div>
	) : null
}
