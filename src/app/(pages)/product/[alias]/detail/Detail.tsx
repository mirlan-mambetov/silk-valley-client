"use client"

import {
	ButtonComponent,
	ProductAttributesComponent,
	ProductInfoComponent,
	ProductSpecificationsComponent,
	RoutesHistoryComponent,
} from "@/components"
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
			<div className={style.top}>
				{/* ROUTES HISTORY */}
				<RoutesHistoryComponent productName={data.title} />
			</div>
			<div className={style.wrap}>
				{/* PRODUCT */}
				<div className={style.product}>
					{/* IMAGE */}
					<div className={style.product_image}>
						{/* IMAGES */}
						<div className={style.product_images}>
							{data.images.map((image) => (
								<div className={style.image}>
									<Image
										src={image}
										alt={data.title}
										width={900}
										height={100}
									/>
								</div>
							))}
						</div>
						{/* POSTER */}
						<div className={style.product_poster}>
							<Image
								width={900}
								height={1000}
								src={data?.poster}
								alt={data?.title}
							/>
						</div>
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
						<ProductAttributesComponent data={data} />
					</div>
				</div>
				{/* ORDER INFO */}
				<ProductInfoComponent data={data} />
				<ProductSpecificationsComponent />
			</div>
		</div>
	)
}
