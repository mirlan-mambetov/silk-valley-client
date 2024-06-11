"use client"

import { DestinationPoin } from "@/components/specific/[destination-point]/DestinationPoint"
import cn from "classnames"
import style from "./steps.module.scss"

export const StepTwo = () => {
	return (
		<>
			<div className={style.title}>Выбрать пункт доставки</div>
			<div className={cn(style.items, style.poin)}>
				<div className={style.item}>
					<DestinationPoin />
				</div>
			</div>
		</>
	)
}
