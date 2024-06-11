"use client"

import { FieldComponent } from "@/components/field-component/Field-component"
import cn from "classnames"
import Image from "next/image"
import style from "./steps.module.scss"

export const StepThree = () => {
	return (
		<>
			<div className={style.title}>Выбрать метод оплаты</div>

			<div className={style.methods}>
				<div className={style.method}>
					<div className={style.icons}>
						<div className={cn(style.icon, style.iconVisa)} title="Visa"></div>
						<div
							className={cn(style.icon, style.masterCard)}
							title="MasterCard"
						></div>
						<div
							className={cn(style.icon, style.maestro)}
							title="Maestro"
						></div>
						<div
							className={cn(style.icon, style.unionPay)}
							title="UnionPay"
						></div>
						<div className={cn(style.icon, style.elcard)} title="Элкарт"></div>
					</div>
					<FieldComponent type="checkbox" checked={false} />
				</div>
				<div className={cn(style.method)}>
					<Image
						width={300}
						height={300}
						src={"/images/mbank.png"}
						alt="mbank"
					/>
					<FieldComponent type="checkbox" checked={false} disabled />
				</div>
				<div className={cn(style.method)}>
					<strong>Наличными</strong>
					<FieldComponent type="checkbox" checked={false} disabled />
				</div>
			</div>
		</>
	)
}
