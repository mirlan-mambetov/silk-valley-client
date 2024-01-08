"use client"

import {
	ButtonComponent,
	PriceComponent,
	ProductDiscountComponent,
} from "@/components"
import { IProduct } from "@/interfaces/product.interface"
import { FC } from "react"
import { FiEdit2 } from "react-icons/fi"
import style from "./product-info.module.scss"

interface IProductInfoComponentProps {
	data: IProduct
}
export const ProductInfoComponent: FC<IProductInfoComponentProps> = ({
	data,
}) => {
	return (
		<div className={style.info}>
			<h3 className={style.total}>Общие детали</h3>
			<div className={style.wrap}>
				<div className={style.box}>
					<small>Доставка</small>
					<div className={style.box_item}>
						<span> Иссык - Кульская область. г. Каракол</span>
						<ButtonComponent title="Выбрать координаты доставки">
							<FiEdit2 />
						</ButtonComponent>
					</div>
				</div>

				<div className={style.box}>
					{data.discount ? (
						<small>
							Цена
							<>
								с учетом скидки
								<ProductDiscountComponent
									discount={data.discount}
									type="extension"
									size="xl1"
								/>
							</>
						</small>
					) : (
						<>
							<small>Цена</small>
							<div className={style.box_item}>
								<PriceComponent
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

				<div className={style.buttons}>
					<ButtonComponent type="cart" />
					<ButtonComponent type="cart">Купить сейчас</ButtonComponent>
				</div>
			</div>
		</div>
	)
}
