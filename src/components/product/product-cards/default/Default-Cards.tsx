"use client"

import {
	FeaturedComponent,
	HeadingComponent,
	ProductActionsComponent,
	ProductDiscountComponent,
	ProductPriceComponent,
} from "@/components"
import { IProduct } from "@/interfaces/product.interface"
import cn from "classnames"
import Image from "next/image"
import Link from "next/link"
import { FC, useState } from "react"
import style from "./default-cards.module.scss"

interface IDefaultCardsComponentProps {
	data: IProduct[]
	limit?: number
	title?: string
	grid?: "6" | "5"
}
export const DefaultCardsComponent: FC<IDefaultCardsComponentProps> = ({
	data,
	limit,
	title,
	grid,
}) => {
	const limitedData = data.slice(0, limit)
	const [isHover, setIsHover] = useState(false)

	return (
		<div className={style.cards}>
			{title ? <HeadingComponent text={title} /> : null}
			<div className={cn(style.wrap, { [style.grid5]: grid === "5" })}>
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
							<Link href={`/product/${product.alias}`}>
								<div className={style.top}>
									<div className={style.poster}>
										<Image
											priority
											width={900}
											height={700}
											src={product.poster}
											alt={product.title}
										/>
										<ProductDiscountComponent
											type="absolute"
											product={product}
										/>
									</div>
								</div>
								<div className={style.content}>
									<div className={style.name}>
										<h2 className={style.title}>
											{product.title}. <small>{product.subtitle}</small>
										</h2>
										<span>Бренд: Apple </span>
									</div>
									<ProductPriceComponent
										className={style.price}
										price={product.price}
										discount={product.discount}
										orientation="column"
									/>
								</div>
							</Link>
							<div className={style.buttons}>
								<ProductActionsComponent data={product} />
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
