"use client"

import {
	ButtonComponent,
	ProductDiscountComponent,
	ProductPriceComponent,
} from "@/components"
import { IProduct } from "@/interfaces/product.interface"
import Image from "next/image"
import { FC } from "react"
import { IoResizeOutline } from "react-icons/io5"
import { MdInvertColors } from "react-icons/md"
import { CartRangeComponent } from "../cart-range/Cart-range"
import style from "./cart-product.module.scss"

interface ICartProductComponentProps {
	products: IProduct[]
}
export const CartProductComponent: FC<ICartProductComponentProps> = ({
	products,
}) => {
	return (
		<>
			{products.map((product) => (
				<div className={style.product} key={product.id}>
					<div className={style.poster}>
						<Image
							src={product.poster}
							alt={product.title}
							width={110}
							height={150}
						/>
					</div>
					<div className={style.content}>
						<div className={style.wrap}>
							<h4 className={style.title}>{product.title}</h4>
							<div className={style.items}>
								{/* <div className={style.item}>
										<AiOutlineLike />
										<span>Есть доставка</span>
									</div>
									<div className={style.item}>
										<HiStatusOnline />
										<span>Онлайн оплата</span>
									</div> */}
								<div className={style.item}>
									<MdInvertColors />
									<span>
										Цвет: <small>Черный</small>
									</span>
								</div>
								<div className={style.item}>
									<IoResizeOutline />
									<span>
										Размер: <small>32x</small>
									</span>
								</div>
							</div>
						</div>

						<div className={style.range}>
							<CartRangeComponent text={false} />
						</div>
						<div className={style.price}>
							<div className={style.button}>
								<ButtonComponent type="promo" />
							</div>
							<ProductPriceComponent
								className={style.number}
								price={product.price}
								discount={product.discount}
								size="1xxl"
							/>
						</div>
					</div>
					<div className={style.discount}>
						<ProductDiscountComponent product={product} type="absolute" />
					</div>
				</div>
			))}
		</>
	)
}
