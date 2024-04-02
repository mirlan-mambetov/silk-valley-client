"use client"

import {
	ButtonComponent,
	ProductDiscountComponent,
	ProductPriceComponent,
	ProductRatingComponent,
} from "@/components"
import { SwiperComponent } from "@/components/swiper-component/Swiper-component"
import { IProduct } from "@/interfaces/product.interface"
import cn from "classnames"
import Image from "next/image"
import { Dispatch, FC, SetStateAction } from "react"
import { SwiperSlide } from "swiper/react"
import style from "./product-attributes.module.scss"

interface IAttributesComponentProps {
	data: IProduct
	selectedColor: string | undefined
	selectedSize: string | undefined
	setSelectedColor: Dispatch<SetStateAction<string | undefined>>
	setSelectedSize: Dispatch<SetStateAction<string | undefined>>
}
export const ProductAttributesComponent: FC<IAttributesComponentProps> = ({
	data,
	selectedColor,
	selectedSize,
	setSelectedColor,
	setSelectedSize,
}) => {
	return (
		<div className={style.attributes}>
			{/* COLORS */}
			<div className={cn(style.colors)}>
				<span>
					Цвет:
					<b>{selectedColor ? selectedColor : data.images[0].color}</b>
				</span>
				<SwiperComponent
					options={{
						className: style.slider,
						breakpoints: {
							300: {
								slidesPerView: 5,
								spaceBetween: 10,
							},
							640: {
								slidesPerView: 8,
							},
							760: {
								slidesPerView: 10,
							},
							830: {
								slidesPerView: 12,
							},
							1024: {
								slidesPerView: 5,
								spaceBetween: 7,
							},
						},
					}}
				>
					{data.images.map((color) => (
						<SwiperSlide
							title={`Цвет: ${color.color}`}
							className={cn(style.color, {
								[style.active_color]: selectedColor === color.color,
							})}
							key={color.id}
							onClick={() => {
								setSelectedColor(color.color)
							}}
						>
							<Image
								src={`${process.env.NEXT_PUBLIC_API_STATIC}/${color.image[0]}`}
								width={80}
								height={110}
								alt={color.color}
							/>
						</SwiperSlide>
					))}
				</SwiperComponent>
			</div>

			{/* SIZES */}
			{data.sizes?.length ? (
				<div className={style.sizes}>
					<h5 className={style.title}>Размеры</h5>
					<div className={style.size}>
						{data.sizes.map((size, i) => (
							<ButtonComponent
								className={cn(style.button, {
									[style.active_color]: selectedSize === size,
								})}
								key={i}
								onClick={() => {
									setSelectedSize(size)
								}}
							>
								{size}
							</ButtonComponent>
						))}
					</div>
				</div>
			) : null}
			<ProductRatingComponent
				rating={data?.rating || 0}
				className={style.rating}
			/>
			<div className={style.price}>
				<ProductPriceComponent
					price={data.price}
					discount={data.discount}
					orientation="column"
					size="2xl"
				/>
				<ProductDiscountComponent product={data} type="extension" size="xl2" />
			</div>
			<div className={style.description}>
				<h5 className={style.title}>Описание</h5>
				<p>{data?.description}</p>
			</div>
		</div>
	)
}
