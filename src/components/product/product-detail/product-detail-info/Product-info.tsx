"use client"

import {
	ButtonComponent,
	DeliverComponent,
	ProductActionsComponent,
	ProductPriceComponent,
} from "@/components"
import { useCart } from "@/hooks/cart/useCart"
import { useDeliver } from "@/hooks/deliver/useDeliver"
import { useScreen } from "@/hooks/screen/useScreen"
import { IProduct } from "@/interfaces/product.interface"
import cn from "classnames"
import { FC, useEffect, useState } from "react"
import { FiEdit2 } from "react-icons/fi"
import style from "./product-info.module.scss"

interface IProductInfoComponentProps {
	data: IProduct
	type?: "sticky" | "default"
	size: string | undefined
	color: string | undefined
}
export const ProductInfoComponent: FC<IProductInfoComponentProps> = ({
	data,
	type = "default",
	color,
	size,
}) => {
	const [isExistAttributes, setIsExistAttributes] = useState<
		| { existColor: string | undefined; existSize: string | undefined }
		| undefined
	>(undefined)
	const { setContentHandler } = useScreen()
	const { address } = useDeliver()
	const { products } = useCart()

	useEffect(() => {
		const isExist = products.find((product) => product.id === data.id)
		setIsExistAttributes({
			existColor: isExist?.selectedColor,
			existSize: isExist?.selectedSize,
		})
	}, [])

	return (
		<div
			className={cn(style.info, {
				[style.sticky]: type === "sticky",
			})}
		>
			<div className={style.wrap}>
				<div className={style.box}>
					{data.discount ? (
						<>
							<small>
								Цена
								<>с учетом скидки</>
							</small>
							<div className={style.box_item}>
								<ProductPriceComponent
									price={data.price}
									discount={data.discount}
									orientation="column"
									size="3xxl"
								/>
							</div>
						</>
					) : (
						<>
							<small>Цена</small>
							<div className={style.box_item}>
								<ProductPriceComponent
									price={data.price}
									discount={data.discount}
									orientation="column"
									size="3xxl"
								/>
							</div>
						</>
					)}
				</div>
				<div className={style.box}>
					<small>Доставка</small>
					<div className={style.box_item}>
						<span>
							{address.city && address.road
								? `${address.city.replace("город", "г.")}. ${address.road}`
								: address.town && address.road
								? `${address.town}. ${address.road}`
								: address.village && address.road
								? `${address.village}. ${address.road}`
								: "Выбрать адрес доставки"}
						</span>
						<ButtonComponent
							title="Выбрать координаты доставки"
							onClick={() => setContentHandler(<DeliverComponent />)}
						>
							<FiEdit2 />
						</ButtonComponent>
					</div>
				</div>

				{color ? (
					<div className={style.box}>
						<small>Цвет</small>
						<div className={style.box_item}>
							<span>{color}</span>
						</div>
					</div>
				) : isExistAttributes?.existColor ? (
					<div className={style.box}>
						<small>Цвет</small>
						<div className={style.box_item}>
							<span>{isExistAttributes?.existColor}</span>
						</div>
					</div>
				) : null}

				{size ? (
					<div className={style.box}>
						<small>Размеры</small>
						<div className={style.box_item}>
							<span>{size}</span>
						</div>
					</div>
				) : (
					<div className={style.box}>
						<small>Размеры</small>
						<div className={style.box_item}>
							<span>{isExistAttributes?.existSize}</span>
						</div>
					</div>
				)}

				<ProductActionsComponent
					btnSize="2xl"
					color={color}
					size={size}
					actionType="toCart"
					alias={data.alias}
					product={data}
				/>
			</div>
		</div>
	)
}
