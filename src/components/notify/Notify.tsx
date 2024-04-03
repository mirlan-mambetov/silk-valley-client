"use client"

import { notifyMotionVariant } from "@/framer-motion/notify/notify.motion"
import { useNotify } from "@/hooks/notify/useNotify"
import { useStoreActions } from "@/hooks/store/useStoreActions"
import cn from "classnames"
import { motion } from "framer-motion"
import { FC, useEffect } from "react"
import { IoCheckmarkCircleOutline } from "react-icons/io5"
import { VscError } from "react-icons/vsc"
import style from "./notify.module.scss"

export const NotifyComponent: FC = () => {
	const { isOpen, text, options, type } = useNotify()
	const { closeNotifyHandler } = useStoreActions()

	useEffect(() => {
		const timeoutId = setTimeout(
			() => closeNotifyHandler(),
			options?.timeOut ? options.timeOut : 1200
		)
		return () => clearTimeout(timeoutId)
	}, [isOpen])

	return (
		<motion.div
			animate={isOpen ? "open" : "closed"}
			variants={notifyMotionVariant}
			className={cn(style.notify, {
				[style.bottomRight]: options?.position === "bottomRight",
				[style.topRight]: options?.position === "topRight",
				[style.success]: type === "success",
				[style.error]: type === "error",
				[style.xl2]: options?.size === "xl2",
			})}
		>
			{type === "success" && (
				<strong>
					<IoCheckmarkCircleOutline />
				</strong>
			)}
			{type === "error" && (
				<strong>
					<VscError />
				</strong>
			)}
			<span>{text}</span>
		</motion.div>
	)
}
