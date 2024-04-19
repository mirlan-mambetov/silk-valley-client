"use client"

import {
	ProductActionsComponent,
	ProductDiscountComponent,
	ProductPriceComponent,
} from "@/components"
import { SwiperComponent } from "@/components/swiper-component/Swiper-component"
import { IProduct } from "@/interfaces/product.interface"
import { hostSourceImages } from "@/utils/hostSource"
import { motion } from "framer-motion"
import Image from "next/image"
import { FC } from "react"
import { Autoplay } from "swiper/modules"
import { SwiperSlide } from "swiper/react"
import style from "./promotion.component.module.scss"

interface IPromotionComponentProps {
	data: IProduct[]
}
export const PromotionComponent: FC<IPromotionComponentProps> = ({ data }) => {
	return (
		<motion.div className={style.promotion}>
			<div className="container">
				<SwiperComponent
					options={{
						className: style.columns,
						slidesPerView: 6,
						speed: 3000,
						spaceBetween: 10,
						loop: true,
						modules: [Autoplay],
						autoplay: {
							delay: 100,
							pauseOnMouseEnter: true,
							disableOnInteraction: false,
						},
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
								slidesPerView: 6,
							},
						},
					}}
				>
					{data.map((promotion) => (
						<SwiperSlide className={style.column} key={promotion.id}>
							<ProductDiscountComponent
								product={promotion}
								type="absolute"
								size="xl1"
								position="top"
							/>
							<div className={style.poster}>
								<Image
									priority
									src={hostSourceImages(promotion.poster)}
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
									alias={`${promotion.alias}`}
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
