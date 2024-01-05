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
	limit?: number
	title?: string
}
export const DefaultCardsComponent: FC<IDefaultCardsComponentProps> = ({
	data,
	limit,
	title,
}) => {
	const limitedData = data.slice(0, limit)
	const [isHover, setIsHover] = useState(false)
	return (
		<div className={style.cards}>
			{title ? <h3 className="section-title">{title}</h3> : null}
			<div className={style.wrap}>
				{limitedData.map((product) => (
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
										{product.isHit && <span className={style.hit}>Хит!</span>}
										{product.discount && (
											<span className={style.discount}>
												-{product.discount}%
											</span>
										)}
										{product.new && <span className={style.new}>Новинка</span>}
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
