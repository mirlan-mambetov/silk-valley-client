"use client"

import { FC, useState } from "react"
import style from "./price.range.module.scss"

export const PriceRangeComponent: FC = () => {
	const [value1, setValue1] = useState("")
	const [value2, setValue2] = useState("")
	return (
		<div className={style.wrap}>
			<div className={style.range}>
				<div className={style.value}>
					<span>Цена от</span>
					<input
						type="range"
						min={100}
						max={300000}
						step={10}
						onChange={(e) => setValue1(e.currentTarget.value)}
					/>
				</div>
				<small>{value1} KGS</small>
			</div>
			<div className={style.range}>
				<div className={style.value}>
					<span>Цена до</span>
					<input
						type="range"
						min={100}
						max={300000}
						step={10}
						onChange={(e) => setValue2(e.currentTarget.value)}
					/>
				</div>
				<small>{value2} KGS</small>
			</div>
		</div>
	)
}
