"use client"

import { useAuth } from "@/hooks/auth/useAuth"
import useOutsiteClick from "@/hooks/useOutsideClick"
import { IUser } from "@/interfaces/user.interface"
import { hostSourceImages } from "@/utils/hostSource"
import cn from "classnames"
import Link from "next/link"
import { DetailsHTMLAttributes, FC } from "react"
import { GoHeart, GoStar } from "react-icons/go"
import { IoLogOutOutline } from "react-icons/io5"
import { ButtonComponent } from "../button/Button"
import { UserIconComponent } from "../icon/user/User-icon"
import { UserNotifyComponent } from "./Notify"
import style from "./user.module.scss"

interface IUserComponentProps extends DetailsHTMLAttributes<HTMLDivElement> {
	user: IUser
}
export const UserComponent: FC<IUserComponentProps> = ({ user, ...props }) => {
	const { logoutHandle } = useAuth()
	const { elRef, isShow, setIsShow } = useOutsiteClick(false)

	return (
		<div className={style.user} {...props} title={user.name}>
			<div className={style.avatar} onClick={() => setIsShow(!isShow)}>
				<UserNotifyComponent type="head" title="Одно важное уведомление" />
				<img
					width={30}
					height={30}
					src={
						user.avatar.startsWith("https")
							? user.avatar
							: hostSourceImages(user.avatar)
					}
					alt={user.name}
				/>
			</div>
			<div
				className={cn(style.dropDown, { [style.show]: isShow })}
				{...props}
				ref={elRef}
			>
				<ul className={style.list}>
					{[
						{
							name: "Профиль",
							href: "/user",
							notify: true,
							NodeIcon: <UserIconComponent fontSize={20} />,
						},
						{
							name: "Мои заказы",
							href: "/user/orders",
							Icon: GoStar,
							notify: true,
						},
						{
							name: "Избранные",
							href: "/user/featured",
							Icon: GoHeart,
							notify: false,
						},
					].map((item, i) => (
						<li key={i} className={style.item}>
							<Link href={`${item.href}`}>
								{item.Icon && <item.Icon size={20} />}
								{item.NodeIcon && item.NodeIcon}
								{item.name}
							</Link>
							{item.notify && <UserNotifyComponent type="item" />}
						</li>
					))}
					<li className={style.item}>
						<ButtonComponent onClick={logoutHandle}>
							<IoLogOutOutline size={20} />
							Выйти
						</ButtonComponent>
					</li>
				</ul>
			</div>
		</div>
	)
}
