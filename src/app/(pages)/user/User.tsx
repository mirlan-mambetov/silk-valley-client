"use client"

import { formatDateString } from "@/helpers/formate.data.helper"
import { useUser } from "@/hooks/user/useUser"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { FC } from "react"
import { BiLineChart } from "react-icons/bi"
import { BsBoxSeam } from "react-icons/bs"
import { GoHeart } from "react-icons/go"
import { MdOutlineViewStream } from "react-icons/md"
import style from "./user.module.scss"

export const User: FC = () => {
	const { user } = useUser()
	const { push } = useRouter()
	return (
		<>
			<section>
				<div className="container">
					<div className={style.profile}>
						<div className={style.rows}>
							<div className={style.row}>
								<div className={style.top}>
									<div className={style.img}>
										<Image
											src={
												user?.avatar.startsWith("http")
													? user.avatar
													: `${process.env.NEXT_PUBLIC_API_STATIC}/${user?.avatar}`
											}
											alt={`${user?.name}`}
											width={60}
											height={60}
										/>
									</div>
									<h5 className={style.name}>{user?.name}</h5>
								</div>
								<div className={style.middle}>
									<span>Телефон:</span>
									{user?.phoneNumber}
								</div>
							</div>
							<div className={style.row}>
								<div className={style.top}>
									<span>
										<BsBoxSeam />
									</span>
									<h5
										className={style.name}
										onClick={() => push("/user/orders")}
									>
										Мои заказы
									</h5>
								</div>
							</div>
							<div className={style.row}>
								<div className={style.top}>
									<span>
										<GoHeart />
									</span>
									<h5
										className={style.name}
										onClick={() => push("/user/featured")}
									>
										Избранное
									</h5>
								</div>
							</div>
						</div>
						<div className={style.wrap}>
							<div className={style.box}>
								<span>
									<BiLineChart />
								</span>
								<h5
									className={style.title}
									onClick={() => push("/user/purchases")}
								>
									Мои покупки
								</h5>
							</div>
							<div className={style.box}>
								<span>
									<MdOutlineViewStream />
								</span>
								<h5
									className={style.title}
									onClick={() => push("/user/remaining")}
								>
									Просмотренные
								</h5>
							</div>
						</div>
						<div className={style.data}>
							<div className={style.item}>
								<span>Дата регистрации</span>
								{formatDateString(user?.createdAt || "")}
							</div>
							<div className={style.item}>
								<span>Дата обновление профиля</span>
								{formatDateString(user?.updatedAt || "")}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
