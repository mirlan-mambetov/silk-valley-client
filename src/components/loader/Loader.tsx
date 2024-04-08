"use client"

import { FC } from "react"
import style from "./loader.module.scss"

interface ILoaderComponent {}
export const LoaderComponent: FC<ILoaderComponent> = () => {
	return (
		<div className={style.parent}>
			<div className={style.loader}></div>
		</div>
	)
}
