"use client"

import { useDebounce } from "@/hooks/app/useDebounce"
import { useFilterInit } from "@/hooks/filter/useFilter"
import { FC, useEffect, useState } from "react"
import style from "./price.range.module.scss"

export const PriceRangeComponent: FC = () => {
	const [maxPrice, setMaxPrice] = useState<string | undefined>()
	const [minPrice, setMinPrice] = useState<string | undefined>()
	const MAX_PRICE = 300000
	const MIN_PRICE = 100
	const { addSearchParams } = useFilterInit()

	const price = useDebounce({ maxPrice, minPrice }, 1200)

	useEffect(() => {
		if (price.maxPrice && price.minPrice) {
			addSearchParams("maxPrice", price.maxPrice)
			addSearchParams("minPrice", price.minPrice)
		}
	}, [price])
	return (
		<div className={style.wrap}>
			<div className={style.range}>
				<input
					min={MIN_PRICE}
					type="number"
					max={MAX_PRICE}
					step={10}
					onChange={(e) => setMinPrice(e.currentTarget.value)}
					placeholder="Цена: от"
				/>
			</div>
			<div className={style.range}>
				<input
					type="number"
					min={MIN_PRICE}
					max={MAX_PRICE}
					step={10}
					onChange={(e) => setMaxPrice(e.currentTarget.value)}
					placeholder="Цена: до"
				/>
			</div>
		</div>
	)
}
