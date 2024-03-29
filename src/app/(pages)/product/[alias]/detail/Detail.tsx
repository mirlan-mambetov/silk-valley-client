"use client"

import {
	ButtonComponent,
	MobileDetailInfoComponent,
	ProductAttributesComponent,
	ProductImagesComponent,
	ProductInfoComponent,
	ProductSpecificationsComponent,
	RoutesHistoryComponent,
	StickyHeaderComponent,
} from "@/components"
import { useWindowWidth } from "@/hooks/app/useWindowWidth"
import { IProduct } from "@/interfaces/product.interface"
import { FC } from "react"
import { MdContentCopy } from "react-icons/md"
import style from "./detail.module.scss"

interface IDetailProps {
	data: IProduct
}
export const Detail: FC<IDetailProps> = ({ data }) => {
	const { width } = useWindowWidth()

	console.log(data)
	return (
		<div className={style.detail}>
			{/* STICY INFORMATION */}
			{/* {width < 940 ? ( */}
			<StickyHeaderComponent start={width < 940 ? 200 : 900}>
				<MobileDetailInfoComponent data={data} />
			</StickyHeaderComponent>
			{/* ) : null} */}
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
							<span>ID: {data?.articleNumber}</span>
							<ButtonComponent title="Нажмите скопировать">
								<MdContentCopy />
							</ButtonComponent>
						</div>
						{/* ATTRIBUTES */}
						<ProductAttributesComponent data={data} />
					</div>
				</div>
				{/* ORDER INFO */}
				{width > 940 ? <ProductInfoComponent data={data} /> : null}
				<ProductSpecificationsComponent specifications={data.specifications} />
			</div>
		</div>
	)
}
