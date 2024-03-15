"use client"

import { notifyMotionVariant } from "@/framer-motion/notify/notify.motion"
import { useNotify } from "@/hooks/notify/useNotify"
import { useStoreActions } from "@/hooks/store/useStoreActions"
import { motion } from "framer-motion"
import { FC, useEffect } from "react"
import style from "./notify.module.scss"

export const NotifyComponent: FC = () => {
	const { isOpen, text } = useNotify()
	const { closeNotifyHandler } = useStoreActions()

	useEffect(() => {
		const timeoutId = setTimeout(() => closeNotifyHandler(), 1200)
		return () => clearTimeout(timeoutId)
	}, [isOpen])

	return (
		<motion.div
			animate={isOpen ? "open" : "closed"}
			variants={notifyMotionVariant}
			className={style.notify}
		>
			<span>{text}</span>
		</motion.div>
	)
}
