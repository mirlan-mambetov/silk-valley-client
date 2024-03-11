"use client"

import { useCurrentLocation } from "@/hooks/map/useCurrentLocation"
import { useStoreReducer } from "@/hooks/store/useStoreReducer"
import dynamic from "next/dynamic"
import { FC } from "react"
import style from "./deliver.module.scss"

const MapContainerComponent = dynamic(
	async () => await import("./map/Map-container"),
	{
		ssr: false,
	}
)

export const DeliverComponent: FC = () => {
	const { address } = useStoreReducer((state) => state.deliver)
	const { currentLocation } = useCurrentLocation()
	return (
		<div className={style.deliver}>
			<div className={style.information}>
				{address && (
					<div className={style.wrap}>
						<h5 className={style.title}>
							<span>Координаты доставки</span>
						</h5>
						<div className={style.rows}>
							{address.state && (
								<div className={style.row}>
									<small>Область:</small>
									<span>{address.state}</span>
								</div>
							)}
							{address.city && (
								<div className={style.row}>
									<small>Город:</small>
									<span>{address.city}</span>
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
									<small>Код странцы:</small>
									<span>{address.country_code}</span>
								</div>
							)}
							{address.road && (
								<div className={style.row}>
									<small>Улица:</small>
									<span>{address.road}</span>
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
				)}
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
			{currentLocation ? (
				<MapContainerComponent currentLocation={currentLocation} />
			) : null}
		</div>
	)
}
