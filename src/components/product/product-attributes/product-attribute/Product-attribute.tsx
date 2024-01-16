"use client"

import { ButtonComponent } from "@/components"
import cn from "classnames"
import { DetailsHTMLAttributes, FC, useState } from "react"
import style from "./product.attribute.module.scss"

interface IProducAttributeProps extends DetailsHTMLAttributes<HTMLDivElement> {
	title?: string
	data: string[]
	orientation?: "row" | "column"
	size?: "1xl" | "2xl"
}
export const ProducAttributeComponent: FC<IProducAttributeProps> = ({
	data,
	title,
	orientation = "row",
	size = "2xl",
	className,
}) => {
	const [active, setActive] = useState(0)

	return (
		<div
			className={cn(style.wrap, className, {
				[style.column]: orientation === "column",
				[style.xl1]: size === "1xl",
			})}
		>
			<h5 className={style.title}>{title}</h5>
			<div className={style.box}>
				{data.map((item, i) => (
					<ButtonComponent
						onClick={() => setActive(i)}
						className={cn({ [style.active_btn]: i === active })}
						key={i}
					>
						{item}
					</ButtonComponent>
				))}
			</div>
		</div>
	)
}
