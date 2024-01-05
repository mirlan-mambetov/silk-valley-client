"use client"

import { FC, useEffect, useRef, useState } from "react"
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"

import { ButtonComponent } from "@/components"
import { IProduct } from "@/interfaces/product.interface"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import style from "./banner.module.scss"

interface IMainBannerProps {
	data: IProduct[]
}
export const Banner: FC<IMainBannerProps> = ({ data }) => {
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
	const [isChanged, setIsChanged] = useState<"change" | "changed" | "stoped">(
		"stoped"
	)
	const videoRefs = useRef<Array<HTMLVideoElement | null>>(
		Array(data.length).fill(null)
	)
	const progressCircles = useRef<Array<SVGSVGElement | null>>(
		Array(data.length).fill(null)
	)
	const progressContents = useRef<Array<HTMLSpanElement | null>>(
		Array(data.length).fill(null)
	)
	const [videoDurations, setVideoDurations] = useState<Array<number>>(
		Array(data.length).fill(0)
	)

	useEffect(() => {
		data.forEach((data, index) => {
			if (videoRefs.current[index]) {
				const duration = videoRefs.current[index].duration
				setVideoDurations((prevDurations) =>
					prevDurations.map((prevDuration, i) =>
						i === index ? Math.floor(duration * 1000) : prevDuration
					)
				)
			}
			if (isChanged === "changed" && currentSlideIndex === index) {
				videoRefs.current[index]?.play()
			} else {
				videoRefs.current[index]?.pause()
			}
		})
	}, [currentSlideIndex, isChanged])

	const onAutoplayTimeLeft = (s, time: number, progress: number) => {
		data.forEach((data, index) => {
			const totalSeconds = time / 1000
			const minutes = Math.floor(totalSeconds / 60)
			const seconds = Math.floor(totalSeconds % 60)
			if (progressCircles.current[index] && progressContents.current[index]) {
				progressCircles.current[index]?.style.setProperty(
					"--progress",
					String(1 - progress)
				)
				progressContents.current[index].textContent = `${minutes}m ${seconds}s`
			}
		})
	}
	return (
		<div className={style.banner}>
			<div className={style.bannerWrapp}>
				<Swiper
					onTransitionStart={({ activeIndex, slides }) => {
						setCurrentSlideIndex(activeIndex)
						setIsChanged("change")
					}}
					onTransitionEnd={({ activeIndex }) => {
						setIsChanged("changed")
					}}
					onAutoplayTimeLeft={onAutoplayTimeLeft}
					autoplay={{
						delay: videoDurations[currentSlideIndex],
						disableOnInteraction: false,
					}}
					// onAutoplayTimeLeft={onAutoplayTimeLeft}
					navigation={{
						nextEl: `.${style.next}`,
						prevEl: `.${style.prev}`,
					}}
					effect={"fade"}
					pagination={{
						el: `.${style.pagination}`,
						bulletActiveClass: style.bulletActiveClass,
						bulletClass: style.bulletClass,
						renderBullet: function (index: number, className: string) {
							return `<span class="${className}"></span>`
						},
						clickable: true,
					}}
					modules={[Navigation, Pagination, Autoplay, EffectFade]}
					className={style.wrapp}
				>
					{data.map((data, index) => (
						<SwiperSlide key={data.id} className={style.bannerBox}>
							{/* <Discount discount={data.discount} /> */}
							<div className={style.reel}>
								<video
									playsInline
									muted
									ref={(el) => (videoRefs.current[index] = el)}
									loop
									className={style.video}
									src={data.video}
								></video>
							</div>
							<div className={style.content}>
								<div className={style.name}>
									<h2>{data.title}</h2>
								</div>
								<div className={style.description}>
									<p className={style.text}>{data.description}</p>
								</div>
							</div>
							<div className={style.autoplayProgress} slot="container-end">
								<svg
									viewBox="0 0 48 48"
									ref={(el) => (progressCircles.current[index] = el)}
								>
									<circle cx="24" cy="24" r="20"></circle>
								</svg>
								<span
									ref={(el) => (progressContents.current[index] = el)}
								></span>
							</div>
						</SwiperSlide>
					))}
					<div className={style.navigations}>
						<ButtonComponent className={style.prev}>
							<BsArrowLeft />
						</ButtonComponent>
						<ButtonComponent className={style.next}>
							<BsArrowRight />
						</ButtonComponent>
					</div>
					<div className={style.pagination}></div>
				</Swiper>
			</div>
		</div>
	)
}
