"use client"

import { formatDateString } from "@/helpers/formate.data.helper"
import { useMutationHooks } from "@/hooks/useMutation"
import { useUser } from "@/hooks/user/useUser"
import { useQueryClient } from "@tanstack/react-query"
import style from "./notifications.module.scss"

export const Notifications = () => {
	const queryClient = useQueryClient()
	const { user } = useUser()
	const { changeNotificationExpire } = useMutationHooks()

	const changeExpire = async (id: number) => {
		try {
			await changeNotificationExpire.mutateAsync(id, {
				onSuccess(data, variables, context) {
					queryClient.invalidateQueries({ queryKey: ["getUserProfile"] })
				},
			})
		} catch (error) {
			throw new Error(String(error))
		}
	}
	return (
		<div className="container">
			<div className={style.notifications}>
				{user?.notifications?.map((notify) => (
					<div
						className={style.notify}
						key={notify.id}
						onClick={() => changeExpire(notify.id)}
					>
						{notify.expire ? null : (
							<div className={style.reading}>Непрочитано</div>
						)}
						<div className={style.item}>
							<span>Дата:</span>
							<strong>{formatDateString(notify.createdAt)}</strong>
						</div>
						<div className={style.item}>
							<span>Описание:</span>
							<strong>{notify.text}</strong>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
