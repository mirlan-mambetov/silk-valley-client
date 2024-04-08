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
			<div className={style.attribute}>
				<h5 className={style.title}>Оценка</h5>
				<ProductRatingComponent
					rating={data?.rating || 0}
					className={style.rating}
				/>
			</div>
			<div className={style.attribute}>
				<h5 className={style.title}>Цена</h5>
				<div className={style.price}>
					<ProductPriceComponent
						price={data.price}
						discount={data.discount}
						orientation="column"
						size="2xl"
					/>
					<ProductDiscountComponent
						product={data}
						type="extension"
						size="xl2"
					/>
				</div>
			</div>
			{/* COLORS */}
			<div className={style.attribute}>
				<h5 className={style.title}>
					Цвет:
					<b>{selectedColor ? selectedColor : data.images[0].color}</b>
				</h5>
				<div className={cn(style.colors)}>
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
									slidesPerView: 6,
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
			</div>

			{/* SIZES */}
			<div className={style.attribute}>
				<h5 className={style.title}>Размеры</h5>
				{data.sizes?.length ? (
					<div className={style.sizes}>
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
			</div>

			<div className={style.attribute}>
				<h5 className={style.title}>Описание</h5>
				<div className={style.description}>
					<p>{data?.description}</p>
				</div>
			</div>
		</div>
	)
}
