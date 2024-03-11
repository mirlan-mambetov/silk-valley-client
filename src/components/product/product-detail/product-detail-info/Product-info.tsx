"use client"

import {
	ButtonComponent,
	CartRangeComponent,
	DeliverComponent,
	ProductPriceComponent,
} from "@/components"
import { useScreen } from "@/hooks/screen/useScreen"
import { IProduct } from "@/interfaces/product.interface"
import cn from "classnames"
import { FC } from "react"
import { FiEdit2 } from "react-icons/fi"
import style from "./product-info.module.scss"

interface IProductInfoComponentProps {
	data: IProduct
	type?: "sticky" | "default"
}
export const ProductInfoComponent: FC<IProductInfoComponentProps> = ({
	data,
	type = "default",
}) => {
	const { setContentHandler } = useScreen()
	return (
		<div
			className={cn(style.info, {
				[style.sticky]: type === "sticky",
			})}
		>
			<h3 className={style.total}>Общие детали</h3>
			<div className={style.wrap}>
				<div className={style.box}>
					<small>Доставка</small>
					<div className={style.box_item}>
						<span> Иссык - Кульская область. г. Каракол</span>
						<ButtonComponent
							title="Выбрать координаты доставки"
							onClick={() => setContentHandler(<DeliverComponent />)}
						>
							<FiEdit2 />
						</ButtonComponent>
					</div>
				</div>

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
								/>
							</div>
						</>
					)}
				</div>

				<div className={style.box}>
					<small>Цвет</small>
					<div className={style.box_item}>
						<span>White&Black</span>
					</div>
				</div>

				<div className={style.box}>
					<small>Размеры</small>
					<div className={style.box_item}>
						<span>32X</span>
					</div>
				</div>

				<CartRangeComponent />

				<div className={style.buttons}>
					<ButtonComponent type="cart" />
					<ButtonComponent type="cart">Купить сейчас</ButtonComponent>
				</div>
			</div>
		</div>
	)
}
