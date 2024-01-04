"use client"

import { ButtonComponent } from "@/components"
import { IProduct } from "@/interfaces/product.interface"
import Image from "next/image"
import { FC, useState } from "react"
import { Rating } from "react-simple-star-rating"
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
							<div className={style.top}>
								<div className={style.poster}>
									<Image
										priority
										width={900}
										height={700}
										src={product.poster}
										alt={product.title}
									/>
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
										<Rating initialValue={3} size={14} />
										<span>Отзывов: 323</span>
									</div>
									<div className={style.price}>
										{product.price}
										<span>KGS</span>
									</div>
								</div>
							</div>

							<div className={style.action}>
								<ButtonComponent type="cart" />
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
