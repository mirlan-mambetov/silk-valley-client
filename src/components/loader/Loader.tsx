"use client"

import cn from "classnames"
import { FC } from "react"
import style from "./loader.module.scss"

interface ILoaderComponentProps {
	color?: "white" | "black"
	position?: "absolute"
}
export const LoaderComponent: FC<ILoaderComponentProps> = ({
	color,
	position,
}) => {
	return (
		<div
			className={cn(style.parent, {
				[style.absolute]: position === "absolute",
			})}
		>
			<div
				className={cn(style.loader, { [style.black]: color === "black" })}
			></div>
		</div>
	)
}
