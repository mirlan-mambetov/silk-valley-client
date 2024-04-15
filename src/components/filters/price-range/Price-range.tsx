"use client"

import { FC } from "react"
import style from "./price.range.module.scss"

export const PriceRangeComponent: FC = () => {
	// const { addFilter } = useStoreActions()
	const MAX_PRICE = 300000
	const MIN_PRICE = 100
	return (
		<div className={style.wrap}>
			<div className={style.range}>
				<input
					disabled
					min={MIN_PRICE}
					type="number"
					max={MAX_PRICE}
					step={10}
					// onChange={(e) =>
					// 	addFilter({ filter: { minPrice: +e.currentTarget.value } })
					// }
					placeholder="Цена: от"
				/>
			</div>
			<div className={style.range}>
				<input
					disabled
					type="number"
					min={MIN_PRICE}
					max={MAX_PRICE}
					step={10}
					// onChange={(e) =>
					// 	addFilter({ filter: { maxPrice: +e.currentTarget.value } })
					// }
					placeholder="Цена: до"
				/>
			</div>
		</div>
	)
}
