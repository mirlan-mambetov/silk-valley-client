"use client"

import { IPromotions } from "@/interfaces/promotions.interface"
import { FC } from "react"
import { IoArrowRedoOutline } from "react-icons/io5"

import { useRouter } from "next/navigation"
import { ButtonComponent } from ".."
import style from "./promotions.module.scss"

interface IPromotionsComponentProps {
	data: IPromotions[]
}
export const PromotionsComponent: FC<IPromotionsComponentProps> = ({
	data,
}) => {
	const { push } = useRouter()
	return (
		<div className={style.shares}>
			<div className={style.wrap}>
				{data.map((promotion) => (
					<div
						className={style.column}
						key={promotion.id}
						style={{ backgroundImage: `url(${promotion.image})` }}
					>
						<div className={style.overlay}></div>
						<div className={style.content}>
							<div className={style.title}>
								<h2
									className={style.name}
									onClick={() => push(`/promotions/${promotion.alias}`)}
								>
									{promotion.name}
								</h2>
								<p className={style.description}>{promotion.description}</p>
							</div>
							<div className={style.action}>
								<ButtonComponent
									onClick={() => push(`/promotions/${promotion.alias}`)}
								>
									<IoArrowRedoOutline />
								</ButtonComponent>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
