import cn from "classnames"
import { FC } from "react"
import { Rating } from "react-simple-star-rating"
import style from "./rating.module.scss"

interface IRatingComponentProps {
	rating: number
	className?: string
	hideReviews?: boolean
}
export const RatingComponent: FC<IRatingComponentProps> = ({
	rating,
	className,
	hideReviews = false,
}) => {
	return (
		<div className={cn(style.rating, className)}>
			<Rating initialValue={rating} size={14} disableFillHover />
			{!hideReviews && <span className={style.reviews}>Отзывов: 323</span>}
		</div>
	)
}
