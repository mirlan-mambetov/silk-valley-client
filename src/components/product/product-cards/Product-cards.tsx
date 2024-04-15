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
import { FC } from "react"
import style from "./product-cards.module.scss"

interface IDefaultCardsComponentProps {
	products: IProduct[]
	limit?: number
	title?: string
	grid?: "6" | "5"
}
export const ProductCardsComponent: FC<IDefaultCardsComponentProps> = ({
	products,
	limit,
	title,
	grid,
}) => {
	const limitedData = products.slice(0, limit)

	return (
		<div className={style.cards}>
			{title ? <HeadingComponent text={title} /> : null}
			<div className={cn(style.wrap, { [style.grid5]: grid === "5" })}>
				{limitedData.map((product) => (
					<div className={style.card} key={product.id}>
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
											src={`${process.env.NEXT_PUBLIC_API_STATIC}${product.poster}`}
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
								<ProductActionsComponent
									actionType="toView"
									alias={product.alias}
									product={product}
								/>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
