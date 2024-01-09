"use client"

import { IShares } from "@/interfaces/shares.interface"
import { FC } from "react"
import { IoArrowRedoOutline } from "react-icons/io5"

import { ButtonComponent } from ".."
import style from "./promotions.module.scss"

interface IPromotionsComponentProps {
	data: IShares[]
}
export const PromotionsComponent: FC<IPromotionsComponentProps> = ({
	data,
}) => {
	return (
		<div className={style.shares}>
			<div className={style.wrap}>
				{data.map((shares) => (
					<div
						className={style.column}
						key={shares.id}
						style={{ backgroundImage: `url(${shares.image})` }}
					>
						<div className={style.overlay}></div>
						<div className={style.content}>
							<div className={style.title}>
								<h2 className={style.name}>{shares.name}</h2>
								<p className={style.description}>{shares.description}</p>
							</div>
							<div className={style.action}>
								<ButtonComponent>
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
