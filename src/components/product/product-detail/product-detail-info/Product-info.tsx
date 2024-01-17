"use client"

import { ButtonComponent, ProductPriceComponent } from "@/components"
import { IProduct } from "@/interfaces/product.interface"
import { FC } from "react"
import { FiEdit2 } from "react-icons/fi"
import { LuMinus, LuPlus } from "react-icons/lu"
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

				<div className={style.quantity}>
					<small>Количество</small>
					<div className={style.quantity_item}>
						<ButtonComponent>
							<LuMinus />
						</ButtonComponent>
						<span>1</span>
						<ButtonComponent>
							<LuPlus />
						</ButtonComponent>
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
