"use client"

import {
	ProducAttributeComponent,
	ProductActionsComponent,
	ProductPriceComponent,
} from "@/components"
import { IProduct } from "@/interfaces/product.interface"
import Image from "next/image"
import { FC } from "react"
import style from "./mobile-detail-info.module.scss"

interface IMobileDetailInfoComponentProps {
	data: IProduct
}
export const MobileDetailInfoComponent: FC<IMobileDetailInfoComponentProps> = ({
	data,
}) => {
	return (
		<div className={style.mobile}>
			<div className={style.wrap}>
				<div className={style.product}>
					<div className={style.image}>
						<Image src={data.poster} alt={data.title} width={90} height={150} />
					</div>
					<div className={style.content}>
						<div className={style.item}>
							<h3 className={style.name}>{data.title}</h3>
							<ProductPriceComponent
								price={data.price}
								className={style.price}
								discount={data.discount}
								orientation="column"
								size="1xxl"
							/>
						</div>

						<div className={style.item}>
							<ProducAttributeComponent
								className={style.attribute}
								title="Цвета"
								data={["Черный", "Белый", "Зеленый", "Черно-белый"]}
								size="1xl"
							/>
						</div>
						<div className={style.item}>
							<ProducAttributeComponent
								title="Размеры"
								className={style.attribute}
								data={["32x", "34x", "36x", "38x"]}
								size="1xl"
							/>
						</div>
					</div>
				</div>
				<div className={style.button}>
					<ProductActionsComponent data={data} />
				</div>
			</div>
		</div>
	)
}
