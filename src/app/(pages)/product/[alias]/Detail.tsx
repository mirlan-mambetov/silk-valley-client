"use client"

import {
	__Product_info,
	__ProductAttributes,
	__ProductImages,
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
	const {
		payload: { selectedColor },
	} = useAttributes()

	const attribute = data.attributes.find((item) => item.color === selectedColor)

	useEffect(() => {
		if (selectedColor) {
			setSelectedImages(attribute?.images)
		}
	}, [selectedColor])

	return (
		<div className={style.detail}>
			<div className={style.wrap}>
				{/* PRODUCT */}
				<div className={style.product}>
					{/* IMAGES */}
					<__ProductImages
						data={{
							poster: selectedImages ? selectedImages[0] : data.poster,
							images: selectedImages || data.attributes[0].images,
						}}
					/>
					{/* PRODUCT CONTENT */}
					<div className={style.product_content}>
						<__ProductAttributes data={data} />
					</div>
				</div>
				{/* ORDER INFO */}
				<__Product_info data={data} />
				<ProductSpecification specifications={data.specifications} />
			</div>
		</div>
	)
}
