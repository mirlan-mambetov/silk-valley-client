"use client"

import { Featured, Heading, Price, ProductActions } from "@/components"
import { hostSourceImages } from "@/utils/hostSource"
import cn from "classnames"
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"
import style from "./product-cards.module.scss"
import { IProductCardsProps } from "./ProductCards.props"

export const ProductCards: FC<IProductCardsProps> = ({
	products,
	grid,
	title,
}) => {
	return (
		<div className={style.cards}>
			{title ? <Heading text={title} /> : null}
			<div className={cn(style.wrap, { [style.grid5]: grid === "5" })}>
				{products.map((product) => (
					<div className={style.card} key={product.id}>
						<div className={style.card_wrap}>
							<div className={style.featured}>
								<Featured />
							</div>
							<Link href={`/product/${product.alias}`}>
								<div className={style.top}>
									<div className={style.poster}>
										<Image
											priority
											width={400}
											height={400}
											src={hostSourceImages(product.poster)}
											alt={product.title}
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
									<Price
										className={style.price}
										price={product.price}
										discount={product.discount}
										orientation="column"
									/>
								</div>
							</Link>
							<div className={style.buttons}>
								<ProductActions
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
