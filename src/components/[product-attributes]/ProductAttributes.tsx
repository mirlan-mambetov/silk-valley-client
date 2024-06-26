"use client"

import { Button, Price, RatingComponent, SwiperComponent } from "@/components"
import { hostSourceImages } from "@/utils/hostSource"
import cn from "classnames"
import Image from "next/image"
import { FC } from "react"
import { MdContentCopy } from "react-icons/md"
import { SwiperSlide } from "swiper/react"
// import { ProductDiscountComponent } from "../product/product-discount/Product-discount"
import { useAttributes } from "@/hooks/useAttributes"
import style from "./product-attributes.module.scss"
import { IProductAttributes } from "./ProductAttributes.props"

export const ProductAttributes: FC<IProductAttributes> = ({ data }) => {
	const {
		addAttribute,
		payload: { selectedColor, selectedSize },
	} = useAttributes()
	return (
		<div className={style.attributes}>
			<div className={style.attribute}>
				<h2 className={style.product_name}>{data?.title}</h2>
				<div className={style.product_id}>
					<span>ID: {data?.articleNumber}</span>
					<Button title="Нажмите скопировать">
						<MdContentCopy />
					</Button>
				</div>
			</div>
			<div className={style.attribute}>
				<h5 className={style.title}>Оценка</h5>
				<RatingComponent rating={data?.rating || 0} className={style.rating} />
			</div>
			<div className={style.attribute}>
				<h5 className={style.title}>Цена</h5>
				<div className={style.price}>
					<Price
						price={data.price}
						discount={data.discount}
						orientation="column"
						size="2xl"
					/>
				</div>
			</div>
			{/* COLORS */}
			<div className={style.attribute}>
				<h5 className={style.title}>
					Цвет:
					<b>{selectedColor}</b>
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
									addAttribute({ selectedColor: attribute.color })
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
								<Button
									className={cn(style.button, {
										[style.active_color]: selectedSize === attribute.size,
									})}
									key={i}
									onClick={() => {
										addAttribute({ selectedSize: attribute.size })
									}}
								>
									{attribute.size}
								</Button>
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
