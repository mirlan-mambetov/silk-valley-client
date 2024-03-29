"use client"

import { FC, useState } from "react"
import style from "./price.range.module.scss"

export const PriceRangeComponent: FC = () => {
	const MAX_PRICE = 300000
	const MIN_PRICE = 100
	const [minPrice, setMinPrice] = useState(MIN_PRICE)
	const [maxPrice, setMaxPrice] = useState(MAX_PRICE)
	return (
		<div className={style.wrap}>
			<div className={style.range}>
				<span>Цена от</span>
				<input
					min={MIN_PRICE}
					type="number"
					max={MAX_PRICE}
					step={10}
					onChange={(e) => setMinPrice(+e.currentTarget.value)}
					defaultValue={MIN_PRICE}
				/>
			</div>
			<div className={style.range}>
				<span>Цена до</span>
				<input
					type="number"
					min={MIN_PRICE}
					max={MAX_PRICE}
					defaultValue={MAX_PRICE}
					step={10}
					onChange={(e) => setMaxPrice(+e.currentTarget.value)}
				/>
			</div>
		</div>
	)
}
