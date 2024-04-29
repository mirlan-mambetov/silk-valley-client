"use client"

import {
	ButtonComponent,
	ProductDiscountComponent,
	ProductPriceComponent,
	ProductRatingComponent,
} from "@/components"
import { SwiperComponent } from "@/components/swiper-component/Swiper-component"
import { IProduct } from "@/interfaces/product.interface"
import { hostSourceImages } from "@/utils/hostSource"
import cn from "classnames"
import Image from "next/image"
import { FC } from "react"
import { MdContentCopy } from "react-icons/md"
import { SwiperSlide } from "swiper/react"
import style from "./product-attributes.module.scss"

interface IAttributesComponentProps {
	data: IProduct
	selectedColorHandle: (value: string) => void
	selectedSizeHandle: (value: string) => void
	selectedSize?: string
	selectedColor?: string
}
export const ProductAttributesComponent: FC<IAttributesComponentProps> = ({
	data,
	selectedColorHandle,
	selectedSizeHandle,
	selectedColor,
	selectedSize,
}) => {
	return (
		<div className={style.attributes}>
			<div className={style.attribute}>
				<h2 className={style.product_name}>{data?.title}</h2>
				<div className={style.product_id}>
					<span>ID: {data?.articleNumber}</span>
					<ButtonComponent title="Нажмите скопировать">
						<MdContentCopy />
					</ButtonComponent>
				</div>
			</div>
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
					<b>{data.attributes[0].color}</b>
				</h5>

				<div className={cn(style.colors)}>
					<SwiperComponent
						options={{
							slidesPerView: 6,
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
						{data.attributes.map((attribute) => (
							<SwiperSlide
								title={`Цвет: ${attribute.color}`}
								className={cn(style.color, {
									[style.active_color]: selectedColor === attribute.color,
								})}
								key={attribute.id}
								onClick={() => {
									selectedColorHandle(attribute.color)
								}}
							>
								<Image
									src={hostSourceImages(attribute.images[0])}
									width={80}
									height={110}
									alt={attribute.color}
								/>
							</SwiperSlide>
						))}
					</SwiperComponent>
				</div>
			</div>

			{/* SIZES */}
			{data.attributes ? (
				<div className={style.attribute}>
					<h5 className={style.title}>Размеры</h5>
					<div className={style.sizes}>
						<div className={style.size}>
							{data.attributes.map((attribute, i) => (
								<ButtonComponent
									className={cn(style.button, {
										[style.active_color]: selectedSize === attribute.size,
									})}
									key={i}
									onClick={() => {
										attribute.size
											? selectedSizeHandle(attribute.size)
											: undefined
									}}
								>
									{attribute.size}
								</ButtonComponent>
							))}
						</div>
					</div>
				</div>
			) : null}

			<div className={style.attribute}>
				<h5 className={style.title}>Описание</h5>
				<div className={style.description}>
					<p>{data?.description}</p>
				</div>
			</div>
		</div>
	)
}
