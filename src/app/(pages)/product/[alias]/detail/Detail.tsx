"use client"

import { AttributesComponent, ButtonComponent } from "@/components"
import { IProduct } from "@/interfaces/product.interface"
import Image from "next/image"
import { FC } from "react"
import { MdContentCopy } from "react-icons/md"
import style from "./detail.module.scss"

interface IDetailProps {
	data: IProduct
}
export const Detail: FC<IDetailProps> = ({ data }) => {
	return (
		<div className={style.detail}>
			<div className={style.wrap}>
				{/* PRODUCT */}
				<div className={style.product}>
					{/* IMAGE */}
					<div className={style.product_image}>
						{/* POSTER */}
						<div className={style.product_poster}>
							<Image
								width={900}
								height={1000}
								src={data?.poster}
								alt={data?.title}
							/>
						</div>
						{/* IMAGES */}
						<div className={style.poster_images}></div>
					</div>
					{/* PRODUCT CONTENT */}
					<div className={style.product_content}>
						<h2 className={style.product_name}>{data?.title}</h2>
						<div className={style.product_id}>
							<span>ID: {data?.article}</span>
							<ButtonComponent title="Нажмите скопировать">
								<MdContentCopy />
							</ButtonComponent>
						</div>
						{/* ATTRIBUTES */}
						<AttributesComponent data={data} />
					</div>
				</div>
				{/* ORDER INFO */}
				<div className={style.info}>
					<h3 className={style.total}>Общие детали</h3>
				</div>
				<div className={style.characters}></div>
			</div>
		</div>
	)
}
