"use client"

import {
	ButtonComponent,
	FeaturedComponent,
	HeadingComponent,
	ProductDiscountComponent,
	ProductPriceComponent,
} from "@/components"
import { useCart } from "@/hooks/cart/useCart"
import { useStoreActions } from "@/hooks/store/useStoreActions"
import { IProduct } from "@/interfaces/product.interface"
import cn from "classnames"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
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
	const { addToCart } = useStoreActions()
	const { products } = useCart()
	const { push } = useRouter()

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
											// layout="responsive"
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
							<ButtonComponent
								isExistOnCart={products.some((item) => item.id === product.id)}
								className={style.button}
								aria-label="В корзину"
								btnType="cart"
								onClick={() => {
									products.some((item) => item.id === product.id)
										? push("/cart")
										: addToCart({ product: { ...product, quantity: 1 } })
								}}
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
