"use client"

import { ButtonComponent } from "@/components"
import { screenMotionVariant } from "@/framer-motion/screen/screen.motion"
import cn from "classnames"
import { motion } from "framer-motion"
import { FC } from "react"
import style from "./screen-component.module.scss"
import { IScreenComponentProps } from "./ScreenComponent.props"

export const ScreenComponent: FC<IScreenComponentProps> = ({
	active,
	content,
	closeHandle,
	typeOfScreen,
}) => {
	return (
		<motion.div
			variants={screenMotionVariant}
			animate={active ? "open" : "closed"}
			className={cn(style.screen, {
				[style.modal]: typeOfScreen === "modal",
				[style.default]: typeOfScreen === "default",
			})}
		>
			<ButtonComponent
				className={style.close}
				onClick={closeHandle}
				btnType="closed"
				size={"xl2"}
			></ButtonComponent>
			{/* CONTENT */}
			<div className={style.content}>
				<ButtonComponent
					className={style.closeContent}
					onClick={closeHandle}
					btnType="closed"
					size={"xxl1"}
				></ButtonComponent>
				{content}
			</div>
		</motion.div>
	)
}
