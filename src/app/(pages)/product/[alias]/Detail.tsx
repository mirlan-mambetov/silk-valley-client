"use client"

import {
	ProductAttributes,
	ProductImages,
	ProductInfo,
	ProductSpecification,
} from "@/components"
import { useAttributes } from "@/hooks/useAttributes"
import { IProduct } from "@/interfaces/product.interface"
import { FC, useEffect, useState } from "react"
import style from "./detail.module.scss"

interface IDetailProps {
	data: IProduct
}
export const Detail: FC<IDetailProps> = ({ data }) => {
	const [selectedImages, setSelectedImages] = useState<string[] | undefined>(
		undefined
	)
	const { payload, addAttribute } = useAttributes()

	const attribute = data.attributes.find(
		(item) => item.color === payload.selectedColor
	)

	useEffect(() => {
		if (payload.selectedColor && payload.selectedSize) {
			addAttribute({ selectedColor: undefined, selectedSize: undefined })
		}
	}, [])

	useEffect(() => {
		if (payload.selectedColor) {
			setSelectedImages(attribute?.images)
		}
	}, [payload.selectedColor])

	return (
		<div className={style.detail}>
			<div className={style.wrap}>
				{/* PRODUCT */}
				<div className={style.product}>
					{/* IMAGES */}
					<ProductImages
						data={{
							poster: selectedImages
								? selectedImages[0]
								: data.attributes[0].images[0],
							images: selectedImages || data.attributes[0].images,
						}}
					/>
					{/* PRODUCT CONTENT */}
					<div className={style.product_content}>
						<ProductAttributes data={data} />
					</div>
				</div>
				{/* ORDER INFO */}
				<ProductInfo data={data} />
				<ProductSpecification specifications={data.specifications} />
			</div>
		</div>
	)
}
