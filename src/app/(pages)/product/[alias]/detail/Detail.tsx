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
import { IProduct, IProductImages } from "@/interfaces/product.interface"
import { FC, useEffect, useState } from "react"
import { MdContentCopy } from "react-icons/md"
import style from "./detail.module.scss"

interface IDetailProps {
	data: IProduct
}
export const Detail: FC<IDetailProps> = ({ data }) => {
	// FOR SELECTED IMAGE WITH COLOR
	const [selectedImages, setSelectedImages] = useState<
		IProductImages | undefined
	>(undefined)

	// SELECTED COLOR PRODUCT
	const [selectedColor, setSelectedColor] = useState<string | undefined>(
		data.images[0].color
	)

	// SELECTED SIZE PRODUCT
	const [selectedSize, setSelectedSize] = useState<string | undefined>(
		data.sizes ? data.sizes[0] : undefined
	)

	const { width } = useWindowWidth()

	useEffect(() => {
		if (selectedColor) {
			const images = data.images.find((itemt) => itemt.color === selectedColor)
			setSelectedImages(images)
		}
	}, [selectedColor])

	return (
		<div className={style.detail}>
			{/* STICKY INFORMATION */}
			<StickyHeaderComponent start={width < 940 ? 200 : 900}>
				<MobileDetailInfoComponent
					data={data}
					selectedColor={selectedColor}
					selectedSize={selectedSize}
					setSelectedColor={(value) => setSelectedColor(value)}
					setSelectedSize={(value) => setSelectedSize(value)}
				/>
			</StickyHeaderComponent>
			{/* ROUTES HISTORY */}
			<RoutesHistoryComponent productName={data.title} />
			<div className={style.wrap}>
				{/* PRODUCT */}
				<div className={style.product}>
					{/* IMAGES */}
					<ProductImagesComponent
						data={{
							poster: selectedImages ? selectedImages.image[0] : data.poster,
							images: selectedImages ? selectedImages : data.images[0],
						}}
					/>
					{/* PRODUCT CONTENT */}
					<div className={style.product_content}>
						<h2 className={style.product_name}>{data?.title}</h2>
						<div className={style.product_id}>
							<span>ID: {data?.articleNumber}</span>
							<ButtonComponent title="Нажмите скопировать">
								<MdContentCopy />
							</ButtonComponent>
						</div>
						<ProductAttributesComponent
							data={data}
							selectedColor={selectedColor}
							selectedSize={selectedSize}
							setSelectedColor={(value) => setSelectedColor(value)}
							setSelectedSize={(value) => setSelectedSize(value)}
						/>
					</div>
				</div>
				{/* ORDER INFO */}
				{width > 940 ? (
					<ProductInfoComponent
						data={data}
						size={selectedSize}
						color={selectedColor}
					/>
				) : null}
				<ProductSpecificationsComponent specifications={data.specifications} />
			</div>
		</div>
	)
}
