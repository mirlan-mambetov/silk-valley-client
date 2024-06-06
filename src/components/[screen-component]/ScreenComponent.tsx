"use client"

import { screenMotionVariant } from "@/framer-motion/screen/screen.motion"
import { motion } from "framer-motion"
import { FC } from "react"
import { ButtonComponent } from ".."
import style from "./screen-component.module.scss"
import { IScreenComponentProps } from "./ScreenComponent.props"

export const ScreenComponent: FC<IScreenComponentProps> = ({
	active,
	content,
	closeHandle,
}) => {
	return (
		<motion.div
			variants={screenMotionVariant}
			animate={active ? "open" : "closed"}
			className={style.screen}
		>
			<ButtonComponent
				className={style.close}
				onClick={closeHandle}
				btnType="closed"
				size="xl2"
			></ButtonComponent>
			{/* CONTENT */}
			<div className={style.content}>{content}</div>
		</motion.div>
	)
}
