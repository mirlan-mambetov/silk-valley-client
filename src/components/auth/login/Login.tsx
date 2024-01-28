"use client"

import { ButtonComponent, FieldComponent } from "@/components"
import { FC } from "react"
import style from "./login.module.scss"

export const LoginComponent: FC = () => {
	return (
		<div className={style.login}>
			<form className={style.form}>
				<div className={style.field}>
					<label htmlFor="email">E-mail</label>
					<FieldComponent id="email" />
				</div>
				<div className={style.field}>
					<label htmlFor="password">Пароль</label>
					<FieldComponent id="password" type="text" />
				</div>
				<div className={style.button}>
					<ButtonComponent>Вход</ButtonComponent>
				</div>
			</form>
		</div>
	)
}
