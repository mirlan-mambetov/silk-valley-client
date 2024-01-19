"use client"

import { screenMotionVariant } from "@/framer-motion/screen/screen.motion"
import { useScreen } from "@/hooks/screen/useScreen"
import { motion } from "framer-motion"
import { FC } from "react"
import { ButtonComponent, LogoComponent } from ".."
import style from "./screen.module.scss"

export const ScreenComponent: FC = () => {
	const { clearContentHandler, content, isOpen } = useScreen()
	return (
		<motion.div
			variants={screenMotionVariant}
			animate={isOpen ? "open" : "closed"}
			className={style.screen}
		>
			<div className="container">
				<div className={style.wrap}>
					<div className={style.top}>
						<LogoComponent />
						<ButtonComponent
							onClick={clearContentHandler}
							className={style.close}
						>
							Закрыть
						</ButtonComponent>
					</div>
					{/* CONTENT */}
					<div className={style.content}>{content}</div>
				</div>
			</div>
		</motion.div>
	)
}
