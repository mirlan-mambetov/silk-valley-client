"use client"

import { Button } from "@/components"
import cn from "classnames"
import { FC } from "react"
import { GoHeart } from "react-icons/go"
import style from "./featured.module.scss"
import { IFeaturedProps } from "./Featured.props"

// GoHeartFill

export const Featured: FC<IFeaturedProps> = ({ type, size }) => {
	return (
		<div className={cn(style.featured, { [style.fixed]: type === "fixed" })}>
			<Button btnType="default">
				<GoHeart size={size} />
			</Button>
		</div>
	)
}
