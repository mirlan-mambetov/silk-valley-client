"use client"

import { IProduct } from "@/interfaces/product.interface"
import cn from "classnames"
import Image from "next/image"
import { FC } from "react"
import { ProductDiscountComponent } from "../../product-discount/Product-discount"
import { ProductPriceComponent } from "../../product-price/Product-price"
import style from "./catalog.cards.module.scss"

interface ICatalogCardsComponentProps {
	data: IProduct[]
	gridSize?: "3" | "4"
	limited?: number
}
export const CatalogCardsComponent: FC<ICatalogCardsComponentProps> = ({
	data,
	gridSize = "3",
	limited = 7,
}) => {
	const limitedData = data.slice(0, limited)
	return (
		<div className={style.wrap}>
			<div className={cn(style.cards, { [style.grid4]: gridSize === "4" })}>
				{limitedData.map((product, i) => (
					<div key={i} className={style.card}>
						<div className={style.image}>
							<Image
								priority
								src={product.poster}
								alt={product.title}
								width={900}
								height={1300}
							/>
							<div className={style.discount}>
								<ProductDiscountComponent
									size="xl1"
									product={product}
									type="absolute"
								/>
							</div>
						</div>
						<div className={style.content}>
							<h2 className={style.title}>{product.title}</h2>
							<ProductPriceComponent
								size="1xl"
								price={product.price}
								discount={product.discount}
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
