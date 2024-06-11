"use client"

import { useUser } from "@/hooks/user/useUser"
import style from "./steps.module.scss"

export const StepOne = () => {
	const { user } = useUser()
	return (
		<>
			<div className={style.title}>Информация о получателе</div>
			<div className={style.items}>
				<div className={style.item}>
					<span>Имя</span>
					<strong>{user?.name}</strong>
				</div>
				<div className={style.item}>
					<span>E-mail</span>
					<strong>{user?.email}</strong>
				</div>
				<div className={style.item}>
					<span>Телефон</span>
					<strong>{user?.phoneNumber}</strong>
				</div>
			</div>
		</>
	)
}
