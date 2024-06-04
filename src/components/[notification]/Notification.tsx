"use client"

import { notifyMotionVariant } from "@/framer-motion/notify/notify.motion"
import cn from "classnames"
import { motion } from "framer-motion"
import { FC } from "react"
import { ButtonComponent } from "../button/Button"
import { INotificationProps } from "./Notification.props"
import style from "./notification.module.scss"

export const Notification: FC<INotificationProps> = ({
	message,
	onClose,
	isShow,
	options,
	onCanceled,
	onConfirm,
}) => {
	return (
		<motion.div
			initial={false}
			variants={notifyMotionVariant}
			animate={isShow ? "open" : "closed"}
			className={cn(style.notification, {
				[style.backgroundBlack]: options?.background === "Black",
				[style.backgroundWhite]: options?.background === "White",
			})}
		>
			{message}
			{options?.notifyType === "Dialog" ? (
				<div className={style.buttons}>
					<ButtonComponent
						btnType="default"
						onClick={() => {
							onConfirm && onConfirm()
							onClose()
						}}
					>
						Да
					</ButtonComponent>
					<ButtonComponent
						btnType="default"
						onClick={() => {
							onCanceled && onCanceled()
							onClose()
						}}
					>
						Нет
					</ButtonComponent>
				</div>
			) : null}
		</motion.div>
	)
}
