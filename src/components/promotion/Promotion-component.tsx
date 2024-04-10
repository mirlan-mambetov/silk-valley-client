"use client"

import { ButtonComponent, HeadingComponent } from "@/components"
import { IPromotions } from "@/interfaces/promotions.interface"
import cn from "classnames"
import { useRouter } from "next/navigation"
import { FC } from "react"
import { IoArrowRedoOutline } from "react-icons/io5"
import style from "./promotion.component.module.scss"

interface IPromotionComponentProps {
	data: IPromotions[]
	size?: "xl1" | "xl2" | "xl3"
	routes?: boolean
}
export const PromotionComponent: FC<IPromotionComponentProps> = ({
	data,
	size = "xl2",
	routes = false,
}) => {
	const { push } = useRouter()
	return (
		<>
			<div className={style.promotion}>
				{routes ? <HeadingComponent text="Акции недели" length={4} /> : null}
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
								{/* <div className={style.title}>
									<h2
										className={style.name}
										onClick={() => push(`/promotions/${promotion.alias}`)}
									>
										{promotion.name}
									</h2>
									<p className={style.description}>{promotion.description}</p>
								</div> */}
								<div className={style.action}>
									<ButtonComponent
										aria-label="Ссылка"
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
