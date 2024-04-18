"use client"

import { ButtonComponent } from "@/components/button/Button"
import { SwiperComponent } from "@/components/swiper-component/Swiper-component"
import { useWindowWidth } from "@/hooks/app/useWindowWidth"
import { IProductImages } from "@/interfaces/product.interface"
import Image from "next/image"
import { FC, useEffect, useState } from "react"
import {
	MdOutlineKeyboardArrowDown,
	MdOutlineKeyboardArrowUp,
} from "react-icons/md"
import ReactImageMagnify from "react-image-magnify"
import { Navigation, Pagination } from "swiper/modules"
import { SwiperSlide } from "swiper/react"
import style from "./product-images.module.scss"

interface IProductImagesComponent {
	data: {
		poster: string
		images: Pick<IProductImages, "image">
	}
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

	useEffect(() => {
		setNewSrc(`${process.env.NEXT_PUBLIC_API_STATIC}/${data?.poster}`)
	}, [data.poster])

	return (
		<div className={style.product_image}>
			{/* IMAGES */}
			<div className={style.images}>
				<SwiperComponent
					options={{
						slidesPerView: 4,
						spaceBetween: 4,
						className: style.slider,
						direction: width > 1024 ? "vertical" : "horizontal",
						modules: [Navigation, Pagination],
						navigation: {
							nextEl: `.${style.next}`,
							prevEl: `.${style.prev}`,
						},
						breakpoints: {
							320: {
								slidesPerView: 1,
							},
							530: {
								slidesPerView: 2,
							},
							640: {
								slidesPerView: 3,
								spaceBetween: 10,
							},
							1024: {
								slidesPerView: 4,
								spaceBetween: 5,
							},
						},
					}}
				>
					{data.images.image.map((image, i) => (
						<SwiperSlide key={i} className={style.slide}>
							<Image
								className={style.image}
								priority
								onMouseEnter={(e) => setImgSrc(e.currentTarget.src)}
								onMouseLeave={() => setImgSrc(null)}
								src={`${process.env.NEXT_PUBLIC_API_STATIC}${image}`}
								alt={"product-poster"}
								width={500}
								height={500}
							/>
						</SwiperSlide>
					))}
					<div className={style.navigation}>
						<ButtonComponent className={style.prev}>
							<MdOutlineKeyboardArrowUp />
						</ButtonComponent>
						<ButtonComponent className={style.next}>
							<MdOutlineKeyboardArrowDown />
						</ButtonComponent>
					</div>
				</SwiperComponent>
			</div>
			{/* POSTER */}
			<div className={style.product_poster}>
				<div className={style.poster}>
					<ReactImageMagnify
						smallImage={{
							// @ts-ignore
							src: newSrc
								? newSrc
								: `${process.env.NEXT_PUBLIC_API_STATIC}${data?.poster}`,
							alt: "product-poster",
							isFluidWidth: true,
						}}
						largeImage={{
							width: 900,
							height: 1300,
							// @ts-ignore
							src: newSrc
								? newSrc
								: `${process.env.NEXT_PUBLIC_API_STATIC}${data?.poster}`,
						}}
					/>
				</div>
			</div>
		</div>
	)
}
