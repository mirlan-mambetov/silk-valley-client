"use client"

import { stickyHeaderMotion } from "@/framer-motion/sticky.header"
import { useScrollHeight } from "@/hooks/app/useScrollHeigth"
import { motion } from "framer-motion"
import { FC, PropsWithChildren } from "react"
import style from "./sticky.header.module.scss"

export const StickyHeaderComponent: FC<PropsWithChildren> = ({ children }) => {
	const { isStart } = useScrollHeight(200)
	return (
		<motion.div
			animate={isStart ? "open" : "closed"}
			variants={stickyHeaderMotion}
			className={style.sticky}
		>
			<div className="container">
				<div className={style.content}>{children}</div>
			</div>
		</motion.div>
	)
}
