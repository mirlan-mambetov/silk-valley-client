"use client"

import { screenMotionVariant } from "@/framer-motion/screen/screen.motion"
import { useScreen } from "@/hooks/screen/useScreen"
import { motion } from "framer-motion"
import { FC, useEffect } from "react"
import { ButtonComponent, LogoComponent } from ".."
import style from "./screen.module.scss"

export const ScreenComponent: FC = () => {
	const { clearContentHandler, content, isOpen } = useScreen()

	useEffect(() => {
		if (isOpen) document.body.style.overflow = "hidden"
		else document.body.style.overflow = "auto"
	}, [isOpen])

	return (
		<motion.div
			variants={screenMotionVariant}
			animate={isOpen ? "open" : "closed"}
			className={style.screen}
		>
			<div className="container">
				<div className={style.wrap}>
					<div className={style.top}>
						<LogoComponent className={style.logo} />
						<ButtonComponent
							onClick={clearContentHandler}
							type="closed"
							size="xl2"
						></ButtonComponent>
					</div>
					{/* CONTENT */}
					<div className={style.content}>{content}</div>
				</div>
			</div>
		</motion.div>
	)
}
