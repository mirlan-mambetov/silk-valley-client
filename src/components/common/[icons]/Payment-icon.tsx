"use client"

import cn from "classnames"
import style from "./payment.module.scss"

export const PaymentIcon = () => {
	return (
		<div className={style.icons}>
			<div className={cn(style.icon, style.iconVisa)} title="Visa"></div>
			<div
				className={cn(style.icon, style.masterCard)}
				title="MasterCard"
			></div>
			<div className={cn(style.icon, style.maestro)} title="Maestro"></div>

			<div className={cn(style.icon, style.elcard)} title="Элкарт"></div>
			<div className={cn(style.icon, style.mbank)} title="Mbank"></div>
		</div>
	)
}
