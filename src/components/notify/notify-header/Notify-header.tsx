"use client"

import { ButtonComponent } from "@/components/button/Button"
import {
	clearSessionStorage,
	getSessionStorage,
	setSessionStorage,
} from "@/helpers/session.storage.helper"
import { FC, useEffect, useState } from "react"
import style from "./notify.header.module.scss"

export const NotifyHeaderComponent: FC = () => {
	const [isVisited, setIsVisited] = useState(false)

	useEffect(() => {
		const visited = getSessionStorage()
		if (!visited) {
			setIsVisited(true)
			setSessionStorage("true")
		}

		return () => clearSessionStorage()
	}, [])

	const handleDismiss = () => {
		clearSessionStorage()
		setIsVisited(false)
	}

	return isVisited ? (
		<div className={style.header}>
			<div className="container">
				<div className={style.content}>
					<span>
						В магазине Silk Valley с 21.04.24 действует скидка 30% на все товары
						смартфонов!
					</span>
					<ButtonComponent onClick={handleDismiss}>Понятно</ButtonComponent>
				</div>
			</div>
		</div>
	) : null
}
