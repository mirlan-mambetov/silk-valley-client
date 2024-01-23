"use client"

import { ButtonComponent, FieldComponent } from "@/components"
import { FC } from "react"
import { IoIosArrowBack } from "react-icons/io"

import Image from "next/image"
import style from "./mobile-header.module.scss"

export const MobileHeaderComponent: FC = () => {
	return (
		<div className={style.header}>
			<div className="container">
				<div className={style.wrap}>
					<ButtonComponent>
						<IoIosArrowBack />
					</ButtonComponent>
					<div className={style.search}>
						<ButtonComponent className={style.button}>
							<Image
								src={"/icons/Search.svg"}
								alt="search"
								width={16}
								height={16}
							/>
							{/* <span>Поиск</span> */}
						</ButtonComponent>
						<FieldComponent />
					</div>
				</div>
			</div>
		</div>
	)
}
