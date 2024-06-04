"use client"

import { FC } from "react"
import style from "./productSpecification.module.scss"
import { IProductSpecificationsProps } from "./ProductSpecification.props"

export const ProductSpecification: FC<IProductSpecificationsProps> = ({
	specifications,
}) => {
	return (
		<div className={style.specifications}>
			<h3 className={style.title}>
				<span>Дополнительная информация</span>
			</h3>
			<div className={style.wrap}>
				{specifications?.map((attribute) => (
					<div className={style.column} key={attribute.id}>
						<small>{attribute.name}</small>
						<span>{attribute.value}</span>
					</div>
				))}
			</div>
		</div>
	)
}
