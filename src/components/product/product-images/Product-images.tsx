"use client"

import { useWindowWidth } from "@/hooks/app/useWindowWidth"
import { IProduct } from "@/interfaces/product.interface"
import Image from "next/image"
import { FC, useEffect, useState } from "react"
import ReactImageMagnify from "react-image-magnify"
import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react"
import style from "./product-images.module.scss"

interface IProductImagesComponent {
	data: IProduct
}
export const ProductImagesComponent: FC<IProductImagesComponent> = ({
	data,
}) => {
	const { width } = useWindowWidth()
	const [imgSrc, setImgSrc] = useState<string | null>(null)
	const [newSrc, setNewSrc] = useState<string | null>(null)

	useEffect(() => {
		if (imgSrc) {
			const urlWithoutPrefix = imgSrc.replace(/^.*\?url=/, "")
			const finalUrl = urlWithoutPrefix.replace(/\&.*$/, "")
			setNewSrc(decodeURIComponent(finalUrl))
		}
	}, [imgSrc])

	return (
		<div className={style.product_image}>
			{/* IMAGES */}
			<div className={style.product_images}>
				<Swiper
					loop
					className={style.slider}
					direction={width > 640 ? "vertical" : "horizontal"}
					breakpoints={{
						320: {
							slidesPerView: 1,
						},
						640: {
							slidesPerView: 2.7,
						},
						1024: {
							slidesPerView: 3.6,
							spaceBetween: 5,
						},
					}}
				>
					{data.images.map((image, i) => (
						<SwiperSlide key={i} className={style.slide}>
							<div className={style.image}>
								<Image
									priority
									onMouseEnter={(e) => setImgSrc(e.currentTarget.src)}
									onMouseLeave={() => setImgSrc(null)}
									src={image}
									alt={data.title}
									width={900}
									height={1300}
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			{/* POSTER */}
			<div className={style.product_poster}>
				<div className={style.poster}>
					<ReactImageMagnify
						{...{
							smallImage: {
								width: 900,
								height: 1000,
								src: newSrc ? newSrc : data?.poster,
								alt: data?.title,
								isFluidWidth: true,
							},
							largeImage: {
								width: 900,
								height: 1000,
								src: newSrc ? newSrc : data?.poster,
								alt: data?.title,
							},
						}}
					/>
				</div>
			</div>
		</div>
	)
}
