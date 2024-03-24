"use client"

import { useDeliver } from "@/hooks/deliver/useDeliver"
import cn from "classnames"
import { FC, TouchEventHandler, useState } from "react"
import style from "./deliver.detail.module.scss"
// import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { ButtonComponent } from "@/components/button/Button"
import { deliverInformationMotion } from "@/framer-motion/deliver/deliver.motion"
import { useScreen } from "@/hooks/screen/useScreen"
import { useStoreActions } from "@/hooks/store/useStoreActions"
import { motion } from "framer-motion"
import { BsQuestionCircle } from "react-icons/bs"
import { MdOutlineCheck } from "react-icons/md"
import { TbCurrentLocation } from "react-icons/tb"
import { TfiMore, TfiMoreAlt } from "react-icons/tfi"
import { DeliverDetailForm } from "./form/Deliver-detail-form"

interface IDeliverDetailComponentProps {
	position?: "default" | "fixed"
}
export const DeliverDetailComponent: FC<IDeliverDetailComponentProps> = ({
	position,
}) => {
	const [fullView, setFullView] = useState(false)
	const { address } = useDeliver()
	const [touchStartY, setTouchStartY] = useState(0)
	const { clearContentHandler } = useScreen()
	const { openModalHandler } = useStoreActions()

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
			animate={fullView && position === "fixed" ? "open" : "closed"}
			variants={deliverInformationMotion}
			className={cn(style.information, {
				[style.fixed]: position === "fixed",
				[style.default]: position === "default",
			})}
		>
			{position === "fixed" ? (
				<div className={style.top}>
					<ButtonComponent title="Помощь">
						<BsQuestionCircle />
					</ButtonComponent>
					<ButtonComponent
						onClick={() => setFullView(!fullView)}
						title={fullView ? "Скрыть" : "Показать больше"}
					>
						{!fullView ? <TfiMore /> : <TfiMoreAlt />}
					</ButtonComponent>
					<ButtonComponent title="Текущее местоположение" disabled>
						<TbCurrentLocation />
					</ButtonComponent>
				</div>
			) : null}
			<motion.div
				className={style.columns}
				animate={!fullView ? { y: "100%" } : { y: "0" }}
			>
				<div className={style.column}>
					<span className="section-title">Уточнить адрес</span>
					<div className={style.questions}>
						<span
							onClick={() =>
								openModalHandler({
									children: <DeliverDetailForm fields="road" />,
								})
							}
						>
							Улица
						</span>
						<span
							onClick={() =>
								openModalHandler({
									children: <DeliverDetailForm fields="city" />,
								})
							}
						>
							Город.(село)
						</span>
						<span
							onClick={() =>
								openModalHandler({
									children: <DeliverDetailForm fields="house_number" />,
								})
							}
						>
							Номер дома
						</span>
						<span
							onClick={() =>
								openModalHandler({
									children: <DeliverDetailForm fields="postCode" />,
								})
							}
						>
							Почтовый индекс
						</span>
					</div>
				</div>
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
					<div className={style.button}>
						<ButtonComponent onClick={() => clearContentHandler()}>
							<span>
								<MdOutlineCheck />
							</span>
							Потдвердить адрес
						</ButtonComponent>
					</div>
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
