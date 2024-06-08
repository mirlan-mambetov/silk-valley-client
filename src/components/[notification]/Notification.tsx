"use client"

import { notifyMotionVariant } from "@/framer-motion/notify/notify.motion"
import cn from "classnames"
import { motion } from "framer-motion"
import { FC } from "react"
import { IoCheckboxOutline } from "react-icons/io5"
import { ButtonComponent } from "../button/Button"
import { INotificationProps } from "./Notification.props"

import { VscWarning } from "react-icons/vsc"

import style from "./notification.module.scss"

export const Notification: FC<INotificationProps> = ({
	message,
	onClose,
	isShow,
	options,
	onCanceled,
	onConfirm,
	type,
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
			<div className={style.content}>
				{type === "error" ? (
					<VscWarning />
				) : type === "success" ? (
					<IoCheckboxOutline />
				) : null}
				{message}
			</div>
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
