"use client"

import { ButtonComponent } from "@/components"
import { useSelectedAttributes } from "@/hooks/cart/useSelectedAttributes"
import cn from "classnames"
import { DetailsHTMLAttributes, FC } from "react"
import style from "./product.attribute.module.scss"

interface IProducAttributeProps extends DetailsHTMLAttributes<HTMLDivElement> {
	title?: string
	data: string[]
	orientation?: "row" | "column"
	size?: "1xl" | "2xl"
	selectedValueHandler: (value: string) => void
}
export const ProducAttributeComponent: FC<IProducAttributeProps> = ({
	data,
	title,
	orientation = "row",
	size = "2xl",
	className,
	selectedValueHandler,
}) => {
	const { size: stateSize, color } = useSelectedAttributes()

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
						onClick={() => {
							selectedValueHandler(item)
						}}
						className={cn({
							[style.active_btn]:
								(color && item === color) || (stateSize && item === stateSize),
						})}
						key={i}
					>
						{item}
					</ButtonComponent>
				))}
			</div>
		</div>
	)
}
