"use client"

import { ButtonComponent, RoutesHistoryComponent } from "@/components"
import { IPromotions } from "@/interfaces/promotions.interface"
import cn from "classnames"
import { useRouter } from "next/navigation"
import { FC } from "react"
import { IoArrowRedoOutline } from "react-icons/io5"
import style from "./promotion.component.module.scss"

interface IPromotionComponentProps {
	data: IPromotions[]
	size?: "xl1" | "xl2" | "xl3"
}
export const PromotionComponent: FC<IPromotionComponentProps> = ({
	data,
	size = "xl2",
}) => {
	const { push } = useRouter()
	return (
		<>
			<RoutesHistoryComponent productName="Акции" />
			<div className={style.promotion}>
				<div
					className={cn(style.wrap, {
						[style.xl1]: size === "xl1",
						[style.xl2]: size === "xl2",
						[style.xl3]: size === "xl3",
					})}
				>
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
		</>
	)
}
