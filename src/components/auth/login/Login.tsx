"use client"

import { useLoginUserMutation } from "@/api/api-user/api-user"
import { IUserLoginDTO } from "@/api/api-user/data.transfer"
import { ButtonComponent, FieldComponent } from "@/components"
import { animateLoginRegister } from "@/framer-motion/auth/auth.animate"
import { useStoreActions } from "@/hooks/store/useStoreActions"
import { motion } from "framer-motion"
import { FC } from "react"
import { useForm } from "react-hook-form"
import { IoLogInOutline } from "react-icons/io5"
import style from "../auth-form.module.scss"
import { IAuthProps } from "../auth.props"

export const LoginComponent: FC<IAuthProps> = ({ animate, setChoice }) => {
	const [loginUser, result] = useLoginUserMutation()
	const { openNotifyHandler } = useStoreActions()
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<IUserLoginDTO>({ mode: "onChange" })

	const loginHandler = async (data: IUserLoginDTO) => {
		try {
			await loginUser(data)
			if (result.isError) {
				return openNotifyHandler({
					text: result.error.data.message,
					options: {
						size: "xl2",
						timeOut: 3000,
					},
					type: "error",
				})
			}
			openNotifyHandler({
				text: "Вход выполнен успешно",
				options: {
					size: "xl2",
					timeOut: 3000,
					position: "topRight",
				},
				type: "success",
			})
		} catch (err) {
			console.log(result)
		}
	}
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
				<form className={style.form} onSubmit={handleSubmit(loginHandler)}>
					<div className={style.field}>
						<label htmlFor="email">E-mail</label>
						<FieldComponent id="email" {...register("email")} />
					</div>
					<div className={style.field}>
						<label htmlFor="password">Пароль</label>
						<FieldComponent
							id="password"
							type="text"
							{...register("password")}
						/>
					</div>
					<div className={style.button}>
						<ButtonComponent
							aria-label="Войти"
							btnType="submit"
							isLoading={result.isLoading}
						>
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
