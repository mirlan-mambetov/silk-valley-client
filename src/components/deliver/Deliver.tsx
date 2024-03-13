"use client"

import { useWindowWidth } from "@/hooks/app/useWindowWidth"
import { useDeliver } from "@/hooks/deliver/useDeliver"
import { useCurrentLocation } from "@/hooks/map/useCurrentLocation"
import cn from "classnames"
import dynamic from "next/dynamic"
import { FC, useState } from "react"
import { FaMapMarkerAlt } from "react-icons/fa"
import { ButtonComponent } from "../button/Button"
import style from "./deliver.module.scss"

const MapContainerComponent = dynamic(
	async () => await import("./map/Map-container"),
	{
		ssr: false,
	}
)

export const DeliverComponent: FC = () => {
	const [isAnimate, setAnimate] = useState(false)
	const { address } = useDeliver()
	const { currentLocation } = useCurrentLocation()
	const { width } = useWindowWidth()
	return (
		<div className={style.deliver}>
			<div className={cn(style.information, { [style.animate]: isAnimate })}>
				{Object.keys(address).length ? (
					<div className={style.wrap}>
						<h5 className={style.title}>
							<span>Координаты доставки</span>
						</h5>
						<div className={style.rows}>
							{address.country && (
								<div className={style.row}>
									<small>Страна:</small>
									<span>{address.country}</span>
								</div>
							)}
							{address.state && (
								<div className={style.row}>
									<small>Область:</small>
									<span>{address.state.replace("область", "")}</span>
								</div>
							)}
							{address.city && (
								<div className={style.row}>
									<small>Город:</small>
									<span>{address.city.replace("город", "")}</span>
								</div>
							)}
							{address.village && (
								<div className={style.row}>
									<small>Село:</small>
									<span>{address.village}</span>
								</div>
							)}
							{address.town && (
								<div className={style.row}>
									<small>Районный центр:</small>
									<span>{address.town}</span>
								</div>
							)}
							{address.city_district && (
								<div className={style.row}>
									<small>Район:</small>
									<span>{address.city_district}</span>
								</div>
							)}
							{address.country_code && (
								<div className={style.row}>
									<small>Код страны:</small>
									<span>{address.country_code.toUpperCase()}</span>
								</div>
							)}
							{address.road && (
								<div className={style.row}>
									<small>Улица:</small>
									<span>{address.road.replace("улица", "")}</span>
								</div>
							)}
							{address.house_number && (
								<div className={style.row}>
									<small>Дом №:</small>
									<span>{address.house_number}</span>
								</div>
							)}
							{address.postCode && (
								<div className={style.row}>
									<small>Почтовый индекс:</small>
									<span>{address.postCode}</span>
								</div>
							)}
						</div>
					</div>
				) : null}
				<div className={style.wrap}>
					<h5 className={style.title}>
						<span>Пункты выдачи</span>
					</h5>
					<div className={style.rows}>
						<div className={style.row}>
							<small>г. Каракол:</small>
							<span>Тыныстанова 130</span>
						</div>
						<div className={style.row}>
							<small>г. Бишкек:</small>
							<span>Ахунбаева 140</span>
						</div>
					</div>
				</div>
			</div>
			{width < 640 ? (
				<div className={style.mobile}>
					<ButtonComponent onClick={() => setAnimate(!isAnimate)}>
						<FaMapMarkerAlt />
					</ButtonComponent>
				</div>
			) : null}
			{currentLocation ? (
				<MapContainerComponent currentLocation={currentLocation} />
			) : null}
		</div>
	)
}
