"use client"

import {
	promotionImageMotionVariant,
	promotionMotionVariant,
} from "@/framer-motion/promotion/promotion.motion"
import { useScrollHeight } from "@/hooks/app/useScrollHeigth"
import { motion } from "framer-motion"
import Link from "next/link"
import { FC } from "react"
import { BsArrowRight } from "react-icons/bs"
import style from "./test.module.scss"

export const TestPromotion: FC = () => {
	const { isStart } = useScrollHeight(200)
	return (
		<div className={style.promotions}>
			<div className={style.promotion}>
				<motion.div
					initial={{
						y: "-100%",
						borderTopRightRadius: "0",
						borderBottomLeftRadius: "0",
					}}
					className={style.overlay}
					animate={isStart ? "open" : "closed"}
					variants={promotionMotionVariant}
					transition={{
						duration: 1.1,
						ease: "easeInOut",
						times: [0, 0.1, 0.3, 0.5, 1],
						// repeat: Infinity,
					}}
				/>
				<motion.div
					inherit={false}
					animate={isStart ? "open" : "closed"}
					variants={promotionImageMotionVariant}
					className={style.poster}
					transition={{
						duration: 1.1,
						ease: "easeInOut",
						times: [0, 0.2, 0.5, 0.7, 1],
						// repeat: Infinity,
					}}
					style={{
						backgroundImage: `url('https://getsellr.com/fw/images/real_laptop_flying_datastudio.png')`,
					}}
				></motion.div>
				<div className={style.content}>
					<h4 className={style.name}>
						<span>Ноутбуки</span>
						<Link href={"/"}>
							<BsArrowRight />
						</Link>
					</h4>
				</div>
			</div>

			<div className={style.promotion}>
				<motion.div
					initial={{
						y: "-100%",
						borderTopRightRadius: "0",
						borderBottomLeftRadius: "0",
					}}
					className={style.overlay}
					animate={isStart ? "open" : "closed"}
					variants={promotionMotionVariant}
					transition={{
						duration: 1.3,
						ease: "easeInOut",
						times: [0, 0.3, 0.6, 0.7, 1],
						// repeat: Infinity,
					}}
				/>
				<motion.div
					inherit={false}
					animate={isStart ? "open" : "closed"}
					variants={promotionImageMotionVariant}
					className={style.poster}
					transition={{
						duration: 1.2,
						ease: "easeInOut",
						times: [0, 0.2, 0.3, 0.6, 1],
						// repeat: Infinity,
					}}
					style={{
						backgroundImage: `url('https://koodoo.co.za/cdn/shop/products/PS5-DiscStandAlone_300x300.png?v=1648135393')`,
					}}
				></motion.div>
				<div className={style.content}>
					<h4 className={style.name}>
						<span>Консоли</span>
						<Link href={"/"}>
							<BsArrowRight />
						</Link>
					</h4>
				</div>
			</div>
			<div className={style.promotion}>
				<motion.div
					initial={{
						y: "-100%",
						borderTopRightRadius: "0",
						borderBottomLeftRadius: "0",
					}}
					className={style.overlay}
					animate={isStart ? "open" : "closed"}
					variants={promotionMotionVariant}
					transition={{
						duration: 2,
						ease: "easeInOut",
						times: [0, 0.2, 0.5, 0.8, 1],
						// repeat: Infinity,
					}}
				/>
				<motion.div
					inherit={false}
					animate={isStart ? "open" : "closed"}
					variants={promotionImageMotionVariant}
					className={style.poster}
					transition={{
						duration: 1.2,
						ease: "easeInOut",
						times: [0, 0.2, 0.3, 0.6, 1],
						// repeat: Infinity,
					}}
					style={{
						backgroundImage: `url('https://static.nike.com/a/images/t_default/61051bd6-196b-4afb-9946-cdd2c30bf658/air-max-pulse-mens-shoes-DWTVpN.png')`,
					}}
				></motion.div>
				<div className={style.content}>
					<h4 className={style.name}>
						<span>Кеды</span>
						<Link href={"/"}>
							<BsArrowRight />
						</Link>
					</h4>
				</div>
			</div>
			<div className={style.promotion}>
				<motion.div
					initial={{
						y: "-100%",
						borderTopRightRadius: "0",
						borderBottomLeftRadius: "0",
					}}
					className={style.overlay}
					animate={isStart ? "open" : "closed"}
					variants={promotionMotionVariant}
					transition={{
						duration: 1.3,
						ease: "easeInOut",
						times: [0, 0.3, 0.6, 0.7, 1],
						// repeat: Infinity,
					}}
				/>
				<motion.div
					inherit={false}
					animate={isStart ? "open" : "closed"}
					variants={promotionImageMotionVariant}
					className={style.poster}
					transition={{
						duration: 1.2,
						ease: "easeInOut",
						times: [0, 0.2, 0.3, 0.6, 1],
						// repeat: Infinity,
					}}
					style={{
						backgroundImage: `url('https://storefront.saleor.io/_next/image?url=https%3A%2F%2Fstorefront1.saleor.cloud%2Fmedia%2Fthumbnails%2Fproducts%2Fsaleor-cushion-blue_thumbnail_1024.webp&w=1080&q=75')`,
					}}
				></motion.div>
				<div className={style.content}>
					<h4 className={style.name}>
						<span>Подушка</span>
						<Link href={"/"}>
							<BsArrowRight />
						</Link>
					</h4>
				</div>
			</div>
		</div>
	)
}
