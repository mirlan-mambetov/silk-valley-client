"use client"

import {
	ButtonComponent,
	FeaturedComponent,
	RatingComponent,
} from "@/components"
import { IProduct } from "@/interfaces/product.interface"
import Image from "next/image"
import { FC, useState } from "react"
import style from "./default-cards.module.scss"

interface IDefaultCardsComponentProps {
	data: IProduct[]
}
export const DefaultCardsComponent: FC<IDefaultCardsComponentProps> = ({
	data,
}) => {
	const [isHover, setIsHover] = useState(false)
	return (
		<div className={style.cards}>
			<div className={style.wrap}>
				{data.map((product) => (
					<div
						className={style.card}
						key={product.id}
						onMouseEnter={() => setIsHover(!isHover)}
					>
						<div className={style.card_wrap}>
							<div className={style.featured}>
								<FeaturedComponent />
							</div>
							<div className={style.top}>
								<div className={style.poster}>
									<Image
										priority
										width={900}
										height={700}
										src={product.poster}
										alt={product.title}
									/>
									<div className={style.action}>
										{product.discount && (
											<span className={style.discount}>
												-{product.discount}%
											</span>
										)}
										{product.new && <span>Новинка</span>}
									</div>
								</div>
							</div>
							<div className={style.content}>
								<div className={style.name}>
									<h2 className={style.title}>
										{product.title}. <small>Кеды / мужские</small>
									</h2>
									<span>Бренд: Apple </span>
								</div>

								<div className={style.middle}>
									<div className={style.rating}>
										<RatingComponent rating={product.rating} />
										<span>Отзывов: 323</span>
									</div>
									<div className={style.price}>
										{product.price}
										<span>KGS</span>
									</div>
								</div>
							</div>
							<div className={style.buttons}>
								<ButtonComponent type="cart" />
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
