"use client"

import {
	ProductAttributesComponent,
	ProductImagesComponent,
	ProductInfoComponent,
	SpecificationsComponent,
} from "@/components"
import { useCart } from "@/hooks/cart/useCart"
import { IProduct } from "@/interfaces/product.interface"
import { FC, useEffect, useMemo, useState } from "react"
import style from "./detail.module.scss"

interface IDetailProps {
	data: IProduct
}
export const Detail: FC<IDetailProps> = ({ data }) => {
	const { products } = useCart()

	const [selectedImages, setSelectedImages] = useState<string[] | undefined>(
		undefined
	)
	const [selectedColor, setSelectedColor] = useState<string | undefined>(
		data.attributes[0]?.color
	)
	const [selectedSize, setSelectedSize] = useState<string | undefined>(
		data.attributes[0]?.size
	)

	const attribute = data.attributes.find((item) => item.color === selectedColor)

	useEffect(() => {
		if (selectedColor) {
			setSelectedImages(attribute?.images)
		}
	}, [selectedColor])

	const attributes = useMemo(() => {
		const isExist = products.find((product) => product.id === data.id)
		return isExist
	}, [products])

	useEffect(() => {
		if (attributes) {
			if (attributes.selectedColor) {
				setSelectedColor(attributes.selectedColor)
			}
			if (attributes.selectedSize) {
				setSelectedSize(attributes.selectedSize)
			}
		}
	}, [])

	return (
		<div className={style.detail}>
			{/* STICKY INFORMATION */}
			{/* <StickyHeaderComponent start={width < 940 ? 200 : 900}>
				<MobileDetailInfoComponent
					data={data}
					selectedColor={selectedColor}
					selectedSize={selectedSize}
					setSelectedColor={(value) => setSelectedColor(value)}
					setSelectedSize={(value) => setSelectedSize(value)}
				/>
			</StickyHeaderComponent> */}
			<div className={style.wrap}>
				{/* PRODUCT */}
				<div className={style.product}>
					{/* IMAGES */}
					<ProductImagesComponent
						data={{
							poster: selectedImages ? selectedImages[0] : data.poster,
							images: selectedImages || data.attributes[0].images,
						}}
					/>
					{/* PRODUCT CONTENT */}
					<div className={style.product_content}>
						<ProductAttributesComponent
							selectedColor={selectedColor}
							selectedSize={selectedSize}
							data={data}
							selectedColorHandle={(value) => setSelectedColor(value)}
							selectedSizeHandle={(value) => setSelectedSize(value)}
						/>
					</div>
				</div>
				{/* ORDER INFO */}
				{/* {width > 940 ? ( */}
				<ProductInfoComponent
					data={data}
					selectedColor={selectedColor}
					selectedSize={selectedSize}
				/>
				{/* // ) : null} */}
				<SpecificationsComponent specifications={data.specifications} />
			</div>
		</div>
	)
}
