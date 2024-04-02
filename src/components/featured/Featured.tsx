"use client"

import { GoHeart } from "react-icons/go"

import cn from "classnames"
import { FC } from "react"
import { ButtonComponent } from ".."
import style from "./featured.module.scss"

// GoHeartFill
interface IFeaturedComponentProps {
	type?: "fixed" | "default"
	size?: number
}
export const FeaturedComponent: FC<IFeaturedComponentProps> = ({
	type,
	size,
}) => {
	return (
		<div className={cn(style.featured, { [style.fixed]: type === "fixed" })}>
			<ButtonComponent btnType="default">
				<GoHeart size={size} />
			</ButtonComponent>
		</div>
	)
}
