"use client"

import {
	ButtonComponent,
	ProductAttributesComponent,
	ProductImagesComponent,
	ProductInfoComponent,
	ProductSpecificationsComponent,
	RoutesHistoryComponent,
} from "@/components"
import { IProduct } from "@/interfaces/product.interface"
import { FC } from "react"
import { MdContentCopy } from "react-icons/md"
import style from "./detail.module.scss"

interface IDetailProps {
	data: IProduct
}
export const Detail: FC<IDetailProps> = ({ data }) => {
	return (
		<div className={style.detail}>
			{/* ROUTES HISTORY */}
			<RoutesHistoryComponent productName={data.title} />
			<div className={style.wrap}>
				{/* PRODUCT */}
				<div className={style.product}>
					{/* IMAGES */}
					<ProductImagesComponent data={data} />
					{/* PRODUCT CONTENT */}
					<div className={style.product_content}>
						<h2 className={style.product_name}>{data?.title}</h2>
						<div className={style.product_id}>
							<span>ID: {data?.article}</span>
							<ButtonComponent title="Нажмите скопировать">
								<MdContentCopy />
							</ButtonComponent>
						</div>
						{/* ATTRIBUTES */}
						<ProductAttributesComponent data={data} />
					</div>
				</div>
				{/* ORDER INFO */}
				<ProductInfoComponent data={data} />
				<ProductSpecificationsComponent />
			</div>
		</div>
	)
}
