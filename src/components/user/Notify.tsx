"use client"

import cn from "classnames"
import { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import style from "./user.nofify.module.scss"

interface IUserNotifyComponentProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	type: "head" | "item"
}
export const UserNotifyComponent: FC<IUserNotifyComponentProps> = ({
	type,
	...props
}) => {
	return (
		<div
			{...props}
			className={cn(style.notify, {
				[style.notifyItem]: type === "item",
				[style.head]: type === "head",
			})}
		></div>
	)
}
