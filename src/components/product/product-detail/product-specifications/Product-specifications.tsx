"use client"

import { FC } from "react"
import style from "./specifications.module.scss"

interface IProductSpecificationsComponentProps {}

export const ProductSpecificationsComponent: FC<
	IProductSpecificationsComponentProps
> = () => {
	return (
		<div className={style.specifications}>
			<h3 className={style.title}>
				<span>Дополнительная информация</span>
			</h3>
			<div className={style.wrap}>
				<div className={style.column}>
					<div className={style.row}>
						<span>Страна производства</span>
					</div>
					<span>Китай</span>
				</div>
				<div className={style.column}>
					<div className={style.row}>
						<span>Компания производитель</span>
					</div>
					<span>Apple</span>
				</div>
				<div className={style.column}>
					<div className={style.row}>
						<span>Старт продаж</span>
					</div>
					<span>2024</span>
				</div>
				<div className={style.column}>
					<div className={style.row}>
						<span>Камера</span>
					</div>
					<span>HDQUAD 4.34M</span>
				</div>
				<div className={style.column}>
					<div className={style.row}>
						<span>Размеры</span>
					</div>
					<span>21.3 x 16.4</span>
				</div>
				<div className={style.column}>
					<div className={style.row}>
						<span>Батарея</span>
					</div>
					<span>6-7 часов</span>
				</div>
				<div className={style.column}>
					<div className={style.row}>
						<span>SSD</span>
					</div>
					<span>500GB</span>
				</div>
				<div className={style.column}>
					<div className={style.row}>
						<span>HDD</span>
					</div>
					<span>4TB</span>
				</div>
				<div className={style.column}>
					<div className={style.row}>
						<span>Раскладной</span>
					</div>
					<span>Да</span>
				</div>
				<div className={style.column}>
					<div className={style.row}>
						<span>Пошив</span>
					</div>
					<span>Китай</span>
				</div>
				<div className={style.column}>
					<div className={style.row}>
						<span>Вес</span>
					</div>
					<span>3.4KG</span>
				</div>
				<div className={style.column}>
					<div className={style.row}>
						<span>Год производства</span>
					</div>
					<span>2024</span>
				</div>
				<div className={style.column}>
					<div className={style.row}>
						<span>Процессор</span>
					</div>
					<span>4х ядерный</span>
				</div>
				<div className={style.column}>
					<div className={style.row}>
						<span>Обьем оперативной памяти</span>
					</div>
					<span>16GB</span>
				</div>
			</div>
		</div>
	)
}
