"use client"

import { useStoreActions } from "@/hooks/store/useStoreActions"
import useOutsiteClick from "@/hooks/useOutsideClick"
import { IUser } from "@/interfaces/user.interface"
import { hostSourceImages } from "@/utils/hostSource"
import cn from "classnames"
import Image from "next/image"
import Link from "next/link"
import { DetailsHTMLAttributes, FC } from "react"
import { GoHeart, GoStar } from "react-icons/go"
import { IoLogOutOutline } from "react-icons/io5"
import { ButtonComponent } from "../button/Button"
import { UserIconComponent } from "../icon/user/User-icon"
import style from "./user.module.scss"

interface IUserComponentProps extends DetailsHTMLAttributes<HTMLDivElement> {
	user: IUser
}
export const UserComponent: FC<IUserComponentProps> = ({ user, ...props }) => {
	const { elRef, isShow, setIsShow } = useOutsiteClick(false)
	const { logOutUser } = useStoreActions()

	return (
		<div className={style.user} {...props} title={user.name}>
			<div className={style.avatar} onClick={() => setIsShow(!isShow)}>
				<Image
					priority
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
			<div className={cn(style.drop, { [style.show]: isShow })} ref={elRef}>
				<ul className={style.list}>
					<li className={style.item}>
						<Link href={"/user"}>
							<UserIconComponent fontSize={20} />
							Профиль
						</Link>
					</li>
					<li className={style.item}>
						<Link href={"/user/orders"}>
							<GoStar size={20} />
							Мои заказы
						</Link>
					</li>
					<li className={style.item}>
						<Link href={"/user/featured"}>
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
