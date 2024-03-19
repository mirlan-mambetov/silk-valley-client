"use client"

import { ButtonComponent, FieldComponent } from "@/components"
import { animateLoginRegister } from "@/framer-motion/auth/auth.animate"
import { motion } from "framer-motion"
import { FC } from "react"
import { IoLogInOutline } from "react-icons/io5"
import style from "../auth-form.module.scss"
import { IAuthProps } from "../auth.props"

export const LoginComponent: FC<IAuthProps> = ({ animate, setChoice }) => {
	return (
		<div className={style.auth}>
			<motion.div
				initial={false}
				variants={animateLoginRegister}
				animate={animate ? "open" : "closed"}
				className={style.wrap}
			>
				<h5 className={style.title} title="Выполните вход в свой профиль">
					<span>Авторизация</span>
				</h5>
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
						<ButtonComponent aria-label="Войти" btnType="submit">
							Вход
						</ButtonComponent>
					</div>
				</form>
				<div className={style.bottom}>
					<ButtonComponent onClick={() => setChoice("register")}>
						Регистрация
						<span>
							<IoLogInOutline />
						</span>
					</ButtonComponent>
				</div>
			</motion.div>
		</div>
	)
}
