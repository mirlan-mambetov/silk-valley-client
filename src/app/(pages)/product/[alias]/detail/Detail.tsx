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
import { FC, useEffect, useState } from "react"
import { MdContentCopy } from "react-icons/md"
import ReactImageMagnify from "react-image-magnify"
import style from "./detail.module.scss"

interface IDetailProps {
	data: IProduct
}
export const Detail: FC<IDetailProps> = ({ data }) => {
	const [imgSrc, setImgSrc] = useState<string | null>(null)
	const [newSrc, setNewSrc] = useState<string | null>(null)

	useEffect(() => {
		if (imgSrc) {
			const urlWithoutPrefix = imgSrc.replace(/^.*\?url=/, "")
			const finalUrl = urlWithoutPrefix.replace(/\&.*$/, "")
			setNewSrc(decodeURIComponent(finalUrl))
		}
	}, [imgSrc])

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
										onMouseEnter={(e) => setImgSrc(e.currentTarget.src)}
										onMouseLeave={() => setImgSrc(null)}
									/>
								</div>
							))}
						</div>
						{/* POSTER */}
						<div className={style.product_poster}>
							<div className={style.poster}>
								<ReactImageMagnify
									{...{
										smallImage: {
											width: 900,
											height: 1000,
											src: newSrc ? newSrc : data?.poster,
											alt: data?.title,
											isFluidWidth: true,
										},
										largeImage: {
											width: 900,
											height: 1000,
											src: newSrc ? newSrc : data?.poster,
											alt: data?.title,
										},
									}}
								/>
							</div>
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
