"use client"

import { EnumNotifyType } from "@/enums/notify.enum"
import { useAuth } from "@/hooks/auth/useAuth"
import { useNotification } from "@/hooks/useNotification"
import useOutsiteClick from "@/hooks/useOutsideClick"
import { IUser } from "@/interfaces/user.interface"
import { hostSourceImages } from "@/utils/hostSource"
import cn from "classnames"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { DetailsHTMLAttributes, FC, useEffect, useMemo } from "react"
import { GoHeart, GoStar } from "react-icons/go"
import { IoLogOutOutline } from "react-icons/io5"
import { ButtonComponent } from "../button/Button"
import { UserIconComponent } from "../icon/user/User-icon"
import { UserNotifyComponent } from "./Notify"
import style from "./user.module.scss"

interface IUserComponentProps extends DetailsHTMLAttributes<HTMLDivElement> {
	user: IUser
}

export const UserComponent: FC<IUserComponentProps> = ({ user }) => {
	const { addNotification } = useNotification()
	const hasUnexpiredNotification = useMemo(() => {
		return user.notifications?.some((notify) => notify.expire === false)
	}, [user.notifications])
	const { push } = useRouter()
	const { logoutHandle } = useAuth()
	const { elRef, isShow, setIsShow } = useOutsiteClick(false)

	useEffect(() => {
		if (
			user.notifications &&
			user.notifications.some((notify) => !!notify.expire) &&
			user.notifications?.length > 2
		) {
			addNotification({
				message: `${user.name} у вас есть непрочитанные уведомления. Хотите посмотреть ?`,
				options: { background: "Black", notifyType: "Dialog" },
				onConfirm() {
					push("/user/notifications")
				},
			})
		}
	}, [])

	return (
		<div className={style.user} title={user.name}>
			<div className={style.avatar} onClick={() => setIsShow(!isShow)}>
				{hasUnexpiredNotification ? (
					<UserNotifyComponent type="head" title="Одно важное уведомление" />
				) : null}
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
			<div className={cn(style.dropDown, { [style.show]: isShow })} ref={elRef}>
				<ul className={style.list}>
					{[
						{
							name: "Профиль",
							href: "/user",
							notify: false,
							NodeIcon: <UserIconComponent fontSize={20} />,
						},
						{
							name: "Мои заказы",
							href: "/user/orders",
							Icon: GoStar,
							notify: user.notifications?.some(
								(notify) =>
									notify.typeOfNotify === EnumNotifyType.ORDER && !notify.expire
							),
						},
						{
							name: "Избранные",
							href: "/user/featured",
							Icon: GoHeart,
							notify: false,
						},
						// {
						// 	name: "Уведомления",
						// 	href: "/user/notifications",
						// 	Icon: IoMdNotificationsOutline,
						// 	notify: false,
						// },
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
