"use client"

import { AuthApi } from "@/api/api-auth/auth-api"
import { IAuthLoginDTO } from "@/api/api-auth/data-transfer"
import { IUserLoginDTO } from "@/api/api-user/data.transfer"
import { ButtonComponent, FieldComponent } from "@/components"
import { AuthEnum } from "@/enums/Auth.enum"
import { animateLoginRegister } from "@/framer-motion/auth/auth.animate"
import { saveItemToCookie } from "@/helpers/cookie.helpers"
import { saveTokensToStorage } from "@/helpers/local.storage.helper"
import { useAuth } from "@/hooks/auth/useAuth"
import { useScreen } from "@/hooks/screen/useScreen"
import { useMutation } from "@tanstack/react-query"
import { motion } from "framer-motion"
import { FC } from "react"
import { useForm } from "react-hook-form"
import { IoLogInOutline } from "react-icons/io5"
import style from "../auth-form.module.scss"
import { IAuthProps } from "../auth.props"

export const LoginComponent: FC<IAuthProps> = ({ animate, setChoice }) => {
	const { loginPending, loginSuccess, loginRejected } = useAuth()
	// const [loginUser, result] = useLoginUserMutation()
	const { clearContentHandler } = useScreen()

	const { mutateAsync, isPending } = useMutation({
		mutationKey: ["loginUser"],
		mutationFn: (dto: IAuthLoginDTO) => AuthApi.loginUser(dto),
	})

	const {
		register,
		handleSubmit,
		// formState: { errors, isValid },
	} = useForm<IUserLoginDTO>({ mode: "onChange" })

	const loginHandler = async (data: IUserLoginDTO) => {
		// DISPATCH LOGIN PENDING
		loginPending()
		try {
			await mutateAsync(data, {
				onSuccess(data, variables, context) {
					// DISPATCH LOGIN SUCCESS
					loginSuccess()
					saveItemToCookie(AuthEnum.IS_AUTH, "__SV__V1", 7 * 24 * 60 * 60)
					saveTokensToStorage(data)

					clearContentHandler()
				},
			})
		} catch (error) {
			// DISPATCH LOGIN WITH REJECTED
			loginRejected()
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
					<ButtonComponent
						aria-label="Войти"
						btnType="submit"
						isLoading={isPending}
						disabled={isPending}
					>
						Вход
					</ButtonComponent>
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
