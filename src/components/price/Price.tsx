import { FC } from "react"
import style from "./price.module.scss"

interface IPriceComponentProps {
	price: number
}
export const PriceComponent: FC<IPriceComponentProps> = ({ price }) => {
	return (
		<div className={style.price}>
			{price}
			<span>KGS</span>
		</div>
	)
}
