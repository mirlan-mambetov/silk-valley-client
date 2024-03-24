"use client"

import { modalMotionVariant } from "@/framer-motion/modal/modal.motion"
import { useModal } from "@/hooks/modal/useModal"
import { useStoreActions } from "@/hooks/store/useStoreActions"
import { motion } from "framer-motion"
import { FC } from "react"
import { ButtonComponent } from "../button/Button"
import style from "./modal.module.scss"

export const ModalComponent: FC = () => {
	const { isActive, content } = useModal()
	const { closeModalHandler } = useStoreActions()
	return (
		<motion.div
			className={style.modal}
			animate={isActive ? "open" : "closed"}
			variants={modalMotionVariant}
		>
			<div className={style.content}>
				<ButtonComponent
					className={style.close}
					onClick={() => closeModalHandler()}
					btnType="closed"
					size="xl1"
				></ButtonComponent>
				{content.children}
			</div>
		</motion.div>
	)
}
