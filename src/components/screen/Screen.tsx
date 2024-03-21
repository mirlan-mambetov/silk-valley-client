"use client"

import { screenMotionVariant } from "@/framer-motion/screen/screen.motion"
import { useScreen } from "@/hooks/screen/useScreen"
import { motion } from "framer-motion"
import { FC, useEffect } from "react"
import { ButtonComponent } from ".."
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
			<ButtonComponent
				className={style.close}
				onClick={clearContentHandler}
				btnType="closed"
				size="xl2"
			></ButtonComponent>
			{/* CONTENT */}
			<div className={style.content}>{content}</div>
		</motion.div>
	)
}
