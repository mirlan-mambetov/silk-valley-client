"use client"

import { ButtonComponent } from "@/components/button/Button"
import { useSessionVisited } from "@/hooks/session-storage/useSessionVisited"
import { FC } from "react"
import style from "./notify.header.module.scss"

export const NotifyHeaderComponent: FC = () => {
	const { handleDismiss, isVisited } = useSessionVisited()

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
