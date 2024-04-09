"use client"

import { useStoreActions } from "@/hooks/store/useStoreActions"
import useOutsiteClick from "@/hooks/useOutsideClick"
import { IUser } from "@/interfaces/user.interface"
import cn from "classnames"
import Link from "next/link"
import { FC } from "react"
import { GoHeart, GoStar } from "react-icons/go"
import { IoLogOutOutline } from "react-icons/io5"
import { ButtonComponent } from "../button/Button"
import { UserIconComponent } from "../icon/user/User-icon"
import style from "./user.module.scss"

export const UserComponent: FC<{ user: IUser }> = ({ user }) => {
	const { elRef, isShow, setIsShow } = useOutsiteClick(false)
	const { logOutUser } = useStoreActions()

	return (
		<div className={style.user}>
			<div className={style.avatar} onClick={() => setIsShow(!isShow)}>
				<img
					src={
						user.avatar.startsWith("http")
							? user.avatar
							: `${process.env.NEXT_PUBLIC_API_STATIC}/${user.avatar}`
					}
					alt={user.name}
				/>
			</div>
			<div className={cn(style.drop, { [style.show]: isShow })} ref={elRef}>
				<ul className={style.list}>
					<li className={style.item}>
						<Link href={"#"}>
							<UserIconComponent fontSize={20} />
							Личный кабинет
						</Link>
					</li>
					<li className={style.item}>
						<Link href={"#"}>
							<GoStar size={20} />
							Мои заказы
						</Link>
					</li>
					<li className={style.item}>
						<Link href={"#"}>
							<GoHeart size={18} />
							Избранные
						</Link>
					</li>
					<li className={style.item}>
						<ButtonComponent onClick={() => logOutUser()}>
							<IoLogOutOutline size={18} />
							Выйти
						</ButtonComponent>
					</li>
				</ul>
			</div>
		</div>
	)
}