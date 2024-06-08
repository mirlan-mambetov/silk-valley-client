"use client"

import cn from "classnames"
import { FC } from "react"
import style from "./loader.module.scss"
import { ILoaderProps } from "./Loader.props"

export const Loader: FC<ILoaderProps> = ({ color, position }) => {
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
