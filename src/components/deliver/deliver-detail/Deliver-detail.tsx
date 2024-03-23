"use client"

import { useDeliver } from "@/hooks/deliver/useDeliver"
import cn from "classnames"
import { FC, TouchEventHandler, useState } from "react"
import style from "./deliver.detail.module.scss"
// import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { ButtonComponent } from "@/components/button/Button"
import { deliverInformationMotion } from "@/framer-motion/deliver/deliver.motion"
import { useScreen } from "@/hooks/screen/useScreen"
import { motion } from "framer-motion"
import { HiBarsArrowDown, HiBarsArrowUp } from "react-icons/hi2"
import { DeliverDetailForm } from "./form/Deliver-detail-form"

interface IDeliverDetailComponentProps {
	position?: "default" | "fixed"
}
export const DeliverDetailComponent: FC<IDeliverDetailComponentProps> = ({
	position,
}) => {
	const [fullView, setFullView] = useState(false)
	const [refine, setRefine] = useState(false)
	const { address } = useDeliver()
	console.log(fullView)
	const [touchStartY, setTouchStartY] = useState(0)
	const { clearContentHandler } = useScreen()

	const handleTouchStart: TouchEventHandler<HTMLDivElement> = (event) => {
		setTouchStartY(event.touches[0].clientY)
	}

	const handleTouchMove: TouchEventHandler<HTMLDivElement> = (event) => {
		const touchEndY = event.touches[0].clientY
		const deltaY = touchEndY - touchStartY
		const sensitivity = 50 // Чувствительность для определения направления

		if (deltaY > sensitivity) {
			// Перемещение пальца вниз
			setFullView(false)
		} else if (deltaY < -sensitivity) {
			// Перемещение пальца вверх
			setFullView(true)
		}
	}

	return (
		<motion.div
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
			animate={fullView ? "open" : "closed"}
			variants={deliverInformationMotion}
			className={cn(style.information, style.default, {
				[style.fixed]: position === "fixed",
			})}
		>
			<div className={style.top}>
				<ButtonComponent onClick={() => setFullView(!fullView)}>
					{!fullView ? <HiBarsArrowUp /> : <HiBarsArrowDown />}
				</ButtonComponent>
			</div>
			<motion.div
				animate={
					!fullView
						? { opacity: 0, transition: { opacity: { duration: 0.2 } } }
						: { opacity: 1, transition: { opacity: { duration: 0.3 } } }
				}
				className={style.columns}
			>
				<div className={style.column}>
					<h5 className={style.title}>
						<span>Координаты доставки</span>
					</h5>
					<div className={style.rows}>
						{address.country && (
							<div className={style.row}>
								<div className={style.content}>
									<small>Страна:</small>
									<span>{address.country}</span>
								</div>
							</div>
						)}
						{address.state && (
							<div className={style.row}>
								<div className={style.content}>
									<small>Область:</small>
									<span>{address.state.replace("область", "")}</span>
								</div>
							</div>
						)}
						{address.city && (
							<div className={style.row}>
								<div className={style.content}>
									<small>Город:</small>
									<span>{address.city.replace("город", "")}</span>
								</div>
							</div>
						)}
						{address.village && (
							<div className={style.row}>
								<div className={style.content}>
									<small>Село:</small>
									<span>{address.village}</span>
								</div>
							</div>
						)}
						{address.town && (
							<div className={style.row}>
								<div className={style.content}>
									<small>Районный центр:</small>
									<span>{address.town}</span>
								</div>
							</div>
						)}
						{address.city_district && (
							<div className={style.row}>
								<div className={style.content}>
									<small>Район:</small>
									<span>{address.city_district}</span>
								</div>
							</div>
						)}
						{address.country_code && (
							<div className={style.row}>
								<div className={style.content}>
									<small>Код страны:</small>
									<span>{address.country_code.toUpperCase()}</span>
								</div>
							</div>
						)}
						{address.road && (
							<div className={style.row}>
								<div className={style.content}>
									<small>Улица:</small>
									<span>{address.road.replace("улица", "")}</span>
								</div>
							</div>
						)}
						{address.house_number && (
							<div className={style.row}>
								<div className={style.content}>
									<small>Дом №:</small>
									<span>{address.house_number}</span>
								</div>
							</div>
						)}
						{address.postCode && (
							<div className={style.row}>
								<div className={style.content}>
									<small>Почтовый индекс:</small>
									<span>{address.postCode}</span>
								</div>
							</div>
						)}
					</div>
					<ButtonComponent
						className={style.button}
						onClick={() => clearContentHandler()}
					>
						Потдвердить адрес
					</ButtonComponent>
				</div>
				<div className={style.column}>
					<DeliverDetailForm />
				</div>
			</motion.div>
			{/* {Object.keys(address).length ? (
				<div className={style.wrap}>
				
					
				</div>
			) : null} */}
			{/* <div className={style.wrap}>
				<h5 className={style.title}>
					<span>Пункты выдачи</span>
				</h5>
				<div className={style.rows}>
					<div className={style.row}>
						<div className={style.content}>
							<small>г. Каракол:</small>
							<span>Тыныстанова 130</span>
						</div>
					</div>
					<div className={style.row}>
						<div className={style.content}>
							<small>г. Бишкек:</small>
							<span>Ахунбаева 140</span>
						</div>
					</div>
				</div>
			</div> */}
			{/*  */}
		</motion.div>
	)
}
