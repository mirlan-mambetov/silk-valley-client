import { GoHeart } from "react-icons/go"

import cn from "classnames"
import { FC } from "react"
import { ButtonComponent } from ".."
import style from "./featured.module.scss"

// GoHeartFill
interface IFeaturedComponentProps {
	type?: "fixed" | "default"
}
export const FeaturedComponent: FC<IFeaturedComponentProps> = ({ type }) => {
	return (
		<div className={cn(style.featured, { [style.fixed]: type === "fixed" })}>
			<ButtonComponent type="default">
				<GoHeart />
			</ButtonComponent>
		</div>
	)
}
