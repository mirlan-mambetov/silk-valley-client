"use client"

import {
	ProductActionsComponent,
	ProductDiscountComponent,
	ProductPriceComponent,
} from "@/components"
import { SwiperComponent } from "@/components/swiper-component/Swiper-component"
import { motion } from "framer-motion"
import Image from "next/image"
import { FC } from "react"
import { Autoplay } from "swiper/modules"
import { SwiperSlide } from "swiper/react"
import { PROMOTION_NEW_DATA } from "./promotion.data"
import style from "./promotion.unique.module.scss"

export const PromotionUniqueComponent: FC = () => {
	return (
		<motion.div
			className={style.promotion}
			// style={{
			// 	backgroundImage: `url('https://img.freepik.com/premium-photo/psd-flawless-beauty-cosmetics-banner_605905-28618.jpg')`,
			// }}
		>
			<div className="container">
				{/* <h4 className={style.title}>Электроника</h4> */}
				<SwiperComponent
					options={{
						className: style.columns,
						slidesPerView: 5,
						speed: 3000,
						spaceBetween: 10,
						loop: true,
						modules: [Autoplay],
						autoplay: { delay: 100, pauseOnMouseEnter: true },
						breakpoints: {
							320: {
								slidesPerView: 2,
							},
							530: {
								slidesPerView: 3,
							},
							776: {
								slidesPerView: 4,
							},
							1024: {
								slidesPerView: 5,
							},
						},
					}}
				>
					{PROMOTION_NEW_DATA.map((promotion) => (
						<SwiperSlide className={style.column} key={promotion.id}>
							<ProductDiscountComponent
								product={promotion}
								type="absolute"
								size="xl1"
								position="top"
							/>
							<div className={style.poster}>
								<Image
									src={promotion.poster}
									alt={promotion.title}
									width={400}
									height={400}
								/>
							</div>

							<div className={style.content}>
								<div className={style.top}>
									<h2 className={style.title}>{promotion.title}</h2>
									<ProductPriceComponent
										size="1xxl"
										price={promotion.price}
										discount={promotion.discount}
										orientation="column"
									/>
								</div>
								<ProductActionsComponent
									actionType="toView"
									disable
									alias={promotion.alias}
									product={promotion}
								/>
							</div>
						</SwiperSlide>
					))}
				</SwiperComponent>
			</div>
		</motion.div>
	)
}
