"use client"

import {
	DefaultCardsComponent,
	FiltersComponent,
	RoutesHistoryComponent,
} from "@/components"
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
				<div className={style.title}>
					<RoutesHistoryComponent
						links={[
							{
								href: `/promotions`,
								name: "Акции",
							},
						]}
						productName={data.name}
					/>
					{/* <h2>Акция! {data.name}</h2> */}
				</div>
				<div className={style.promotions}>
					<FiltersComponent />
					{data.products && <DefaultCardsComponent data={data.products} />}
				</div>
			</div>
		</div>
	)
}
