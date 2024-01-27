"use client"

import { ButtonComponent, ProductPriceComponent } from "@/components"
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
					<div className={style.items}>
						<div className={style.item}>
							<h3 className={style.name}>{data.title}</h3>
						</div>
						<div className={style.item}>
							<ProductPriceComponent
								price={data.price}
								className={style.price}
								discount={data.discount}
								orientation="column"
								size="1xxl"
							/>
						</div>
					</div>
				</div>
				<div className={style.button}>
					<ButtonComponent type="cart" />
				</div>
			</div>
		</div>
	)
}
