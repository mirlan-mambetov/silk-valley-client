"use client"

import { Button, SwiperComponent } from "@/components"
import { useWindowWidth } from "@/hooks/app/useWindowWidth"
import { hostSourceImages } from "@/utils/hostSource"
import Image from "next/image"
import { FC, useEffect, useMemo, useState } from "react"
import {
	MdOutlineKeyboardArrowDown,
	MdOutlineKeyboardArrowUp,
} from "react-icons/md"
import ReactImageMagnify from "react-image-magnify"
import { Navigation, Pagination } from "swiper/modules"
import { SwiperSlide } from "swiper/react"
import style from "./__productCards.module.scss"
import { IProductImagesProps } from "./ProductImages.props"

export const __ProductImages: FC<IProductImagesProps> = ({ data }) => {
	// WINDOW ITH
	const { width } = useWindowWidth()
	// IMAGE SRC
	const [imgSrc, setImgSrc] = useState<string | null>(null)
	// NEW IMG SRC
	const [newSrc, setNewSrc] = useState<string | null>(null)

	// MEMOIZATION
	const source = useMemo(() => {
		if (imgSrc) {
			const urlWithoutPrefix = imgSrc.replace(/^.*\?url=/, "")
			const finalUrl = urlWithoutPrefix.replace(/\&.*$/, "")
			return finalUrl
		}
		return null
	}, [imgSrc])

	useEffect(() => {
		if (source) {
			setNewSrc(decodeURIComponent(source))
		}
	}, [imgSrc])

	useEffect(() => {
		setNewSrc(hostSourceImages(data.poster))
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
					{data.images.map((image, i) => (
						<SwiperSlide key={i} className={style.slide}>
							<Image
								className={style.image}
								priority
								onMouseEnter={(e) => setImgSrc(e.currentTarget.src)}
								onMouseLeave={() => setImgSrc(null)}
								src={hostSourceImages(image)}
								alt={"product-poster"}
								width={500}
								height={500}
							/>
						</SwiperSlide>
					))}
					<div className={style.navigation}>
						<Button className={style.prev}>
							<MdOutlineKeyboardArrowUp />
						</Button>
						<Button className={style.next}>
							<MdOutlineKeyboardArrowDown />
						</Button>
					</div>
				</SwiperComponent>
			</div>
			{/* POSTER */}
			<div className={style.product_poster}>
				<div className={style.poster}>
					<ReactImageMagnify
						smallImage={{
							// @ts-ignore
							src: newSrc ? newSrc : hostSourceImages(data.poster),
							alt: "product-poster",
							isFluidWidth: true,
						}}
						largeImage={{
							width: 900,
							height: 1300,
							// @ts-ignore
							src: newSrc ? newSrc : hostSourceImages(data.poster),
						}}
					/>
				</div>
			</div>
		</div>
	)
}
