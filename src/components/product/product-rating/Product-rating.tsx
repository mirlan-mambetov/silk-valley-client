import cn from "classnames"
import { FC } from "react"
import { Rating } from "react-simple-star-rating"
import style from "./rating.module.scss"

interface IRatingComponentProps {
	rating: number
	className?: string
}
export const ProductRatingComponent: FC<IRatingComponentProps> = ({
	rating,
	className,
}) => {
	return (
		<div className={cn(style.rating, className)}>
			<Rating initialValue={rating} size={14} disableFillHover />
			<span className={style.reviews}>Отзывов: 323</span>
		</div>
	)
}
