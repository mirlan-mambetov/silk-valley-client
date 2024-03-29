"use client"

import { IProductSpecifications } from "@/interfaces/product.interface"
import { FC } from "react"
import style from "./specifications.module.scss"

interface IProductSpecificationsComponentProps {
	specifications: IProductSpecifications | undefined
}

export const ProductSpecificationsComponent: FC<
	IProductSpecificationsComponentProps
> = ({ specifications }) => {
	return (
		<div className={style.specifications}>
			<h3 className={style.title}>
				<span>Дополнительная информация</span>
			</h3>
			<div className={style.wrap}>
				{specifications?.attributes.map((attribute) => (
					<div className={style.column} key={attribute.id}>
						<div className={style.row}>
							<span>{attribute.name}</span>
						</div>
						<span>{attribute.value}</span>
					</div>
				))}
			</div>
		</div>
	)
}
