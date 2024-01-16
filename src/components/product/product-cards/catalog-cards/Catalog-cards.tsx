"use client"

import { IProduct } from "@/interfaces/product.interface"
import Image from "next/image"
import { FC } from "react"
import { ProductDiscountComponent } from "../../product-discount/Product-discount"
import { ProductPriceComponent } from "../../product-price/Product-price"
import style from "./catalog.cards.module.scss"

interface ICatalogCardsComponentProps {
	data: IProduct[]
}
export const CatalogCardsComponent: FC<ICatalogCardsComponentProps> = ({
	data,
}) => {
	const limitedData = data.slice(0, 7)
	return (
		<div className={style.wrap}>
			<div className={style.cards}>
				{limitedData.map((product, i) => (
					<div key={i} className={style.card}>
						<div className={style.image}>
							<Image
								src={product.poster}
								alt={product.title}
								width={900}
								height={1300}
							/>
							<div className={style.discount}>
								<ProductDiscountComponent size="xl1" product={product} />
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
