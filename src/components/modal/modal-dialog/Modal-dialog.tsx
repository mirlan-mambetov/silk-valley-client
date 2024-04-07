"use client"

import { ButtonComponent } from "@/components/button/Button"
import { useDialog } from "@/hooks/dialog/useDialog"
import { useStoreActions } from "@/hooks/store/useStoreActions"
import { motion } from "framer-motion"
import { FC } from "react"
import style from "./modal.dialog.module.scss"

export const ModalDialogComponent: FC = () => {
	const { dialogContent, isActive, isConfirm, type } = useDialog()
	const {
		closeDialogHandler,
		isConfirmDialogHandler,
		isCanceConfirmDialogHandler,
	} = useStoreActions()

	return (
		<motion.div
			className={style.dialog}
			animate={
				isActive ? { opacity: 1, zIndex: 3000 } : { opacity: 0, zIndex: "-2" }
			}
		>
			<div className={style.content}>
				<span>{dialogContent.message}</span>
				<div className={style.buttons}>
					{type === "dialog" ? (
						<>
							<ButtonComponent
								onClick={() => {
									isConfirmDialogHandler()
									closeDialogHandler()
								}}
							>
								Да
							</ButtonComponent>
							<ButtonComponent
								onClick={() => {
									isCanceConfirmDialogHandler()
									closeDialogHandler()
								}}
							>
								Нет
							</ButtonComponent>
						</>
					) : (
						<ButtonComponent onClick={() => closeDialogHandler()}>
							Понятно
						</ButtonComponent>
					)}
				</div>
			</div>
		</motion.div>
	)
}
