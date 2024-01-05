import { FC } from "react"
import { Rating } from "react-simple-star-rating"

interface IRatingComponentProps {
	rating: number
}
export const RatingComponent: FC<IRatingComponentProps> = ({ rating }) => {
	return <Rating initialValue={rating} size={14} disableFillHover />
}
