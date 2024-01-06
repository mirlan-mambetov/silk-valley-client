import { calculateOldPrice, formatPrice } from "@/utils/product.utils"
import { FC } from "react"
import style from "./price.module.scss"

interface IPriceComponentProps {
	price: number
	discount?: number
}
export const PriceComponent: FC<IPriceComponentProps> = ({
	price,
	discount,
}) => {
	return (
		<div className={style.price}>
			{discount ? (
				<>
					<div className={style.old}>
						{formatPrice(price)} <span>KGS</span>
					</div>
					<div className={style.new}>
						{calculateOldPrice(price, discount)} <span>KGS</span>
					</div>
				</>
			) : (
				<div className={style.default}>
					{formatPrice(price)}
					<span>KGS</span>
				</div>
			)}
		</div>
	)
}
