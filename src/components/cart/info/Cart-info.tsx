"use client"

import { ButtonComponent, ProductPriceComponent } from "@/components"
import { FC } from "react"
import { FaMapMarkerAlt } from "react-icons/fa"
import { MdOutlineBorderColor } from "react-icons/md"

import style from "./cart-info.module.scss"

interface ICartInfoComponentProps {
	anchorHanlder: (id: string) => void
}
export const CartInfoComponent: FC<ICartInfoComponentProps> = ({
	anchorHanlder,
}) => {
	return (
		<div className={style.info}>
			<div className={style.wrap}>
				<ButtonComponent className={style.deliver}>
					<span>Выбрать адрес доставки</span>
					<small>
						<FaMapMarkerAlt />
					</small>
				</ButtonComponent>
				<div className={style.box}>
					<span>Товары, 3шт</span>
					<ProductPriceComponent
						size="1xxl"
						className={style.price}
						price={23133}
					/>
				</div>
				<div className={style.box}>
					<span>Итого</span>
					<ProductPriceComponent className={style.total} price={23133} />
				</div>
				<ButtonComponent
					className={style.button}
					onClick={() => anchorHanlder("#section-authorization")}
				>
					<MdOutlineBorderColor />
					<span>Заказать</span>
				</ButtonComponent>
			</div>
		</div>
	)
}
