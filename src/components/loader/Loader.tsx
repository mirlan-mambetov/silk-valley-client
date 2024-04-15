"use client"

import cn from "classnames"
import { FC } from "react"
import style from "./loader.module.scss"

interface ILoaderComponentProps {
	color?: "white" | "black"
}
export const LoaderComponent: FC<ILoaderComponentProps> = ({ color }) => {
	return (
		<div className={style.parent}>
			<div
				className={cn(style.loader, { [style.black]: color === "black" })}
			></div>
		</div>
	)
}
