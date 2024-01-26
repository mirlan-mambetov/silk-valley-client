"use client"

import { IPromotions } from "@/interfaces/promotions.interface"
import { useRouter } from "next/navigation"
import { FC } from "react"
import { HeadingComponent, PromotionComponent } from ".."
import style from "./promotions.module.scss"

interface IPromotionsProps {
	data: IPromotions[]
}
export const Promotions: FC<IPromotionsProps> = ({ data }) => {
	const { push } = useRouter()
	return (
		<div className={style.promo}>
			<HeadingComponent text="Акции недели" length={4} />
			<div className={style.wrap}>
				<PromotionComponent data={data} size="xl3" />
			</div>
		</div>
	)
}
