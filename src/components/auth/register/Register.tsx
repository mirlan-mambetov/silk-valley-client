"use client"

import { ButtonComponent, FieldComponent } from "@/components"
import { animateLoginRegister } from "@/framer-motion/auth/auth.animate"
import { motion } from "framer-motion"
import { FC } from "react"
import { IoLogInOutline } from "react-icons/io5"
import style from "../auth-form.module.scss"
import { IAuthProps } from "../auth.props"

export const RegisterComponent: FC<IAuthProps> = ({ animate, setChoice }) => {
	return (
		<div className={style.auth}>
			<motion.div
				variants={animateLoginRegister}
				animate={animate ? "open" : "closed"}
				className={style.wrap}
			>
				<h5 className={style.title} title="Пройдите регистрацию">
					<span>Регистрация</span>
				</h5>
				<form className={style.form}>
					<div className={style.field}>
						<label htmlFor="email">E-mail</label>
						<FieldComponent id="email" />
					</div>
					<div className={style.field}>
						<label htmlFor="name">Имя</label>
						<FieldComponent id="name" />
					</div>
					<div className={style.field}>
						<label htmlFor="phone-number">Номер телефона</label>
						<FieldComponent id="phone-number" />
					</div>
					<div className={style.field}>
						<label htmlFor="password">Пароль</label>
						<FieldComponent id="password" type="text" />
					</div>
					<div className={style.button}>
						<ButtonComponent aria-label="Войти">Вход</ButtonComponent>
					</div>
				</form>
				<div className={style.bottom}>
					<ButtonComponent onClick={() => setChoice("login")}>
						Авторизация
						<span>
							<IoLogInOutline />
						</span>
					</ButtonComponent>
					<ButtonComponent>Условия пользования</ButtonComponent>
				</div>
			</motion.div>
		</div>
	)
}
