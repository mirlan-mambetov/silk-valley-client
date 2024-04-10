"use client"

import { FiltersComponent, ProductCardsComponent } from "@/components"
import { IPromotions } from "@/interfaces/promotions.interface"
import { FC } from "react"
import style from "./pomotion.module.scss"

interface IPromotionsProps {
	data: IPromotions
}
export const Promotions: FC<IPromotionsProps> = ({ data }) => {
	return (
		<div className="container">
			<div className={style.wrap}>
				<div className={style.title}>{/* <h2>Акция! {data.name}</h2> */}</div>
				<div className={style.promotions}>
					<FiltersComponent />
					{data.products && <ProductCardsComponent products={data.products} />}
				</div>
			</div>
		</div>
	)
}
