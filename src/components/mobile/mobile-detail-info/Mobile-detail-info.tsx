"use client"

import { Featured, Price, ProductActions } from "@/components"
import { useStoreActions } from "@/hooks/store/useStoreActions"
import { IProduct } from "@/interfaces/product.interface"
import Image from "next/image"
import { Dispatch, FC, SetStateAction, useEffect } from "react"
import style from "./mobile-detail-info.module.scss"

interface IMobileDetailInfoComponentProps {
	data: IProduct
	selectedColor: string | undefined
	selectedSize: string | undefined
	setSelectedColor: Dispatch<SetStateAction<string | undefined>>
	setSelectedSize: Dispatch<SetStateAction<string | undefined>>
}
export const MobileDetailInfoComponent: FC<IMobileDetailInfoComponentProps> = ({
	data,
	selectedColor,
	selectedSize,
	setSelectedColor,
	setSelectedSize,
}) => {
	const { updateProductAttributeInCart } = useStoreActions()

	useEffect(() => {
		updateProductAttributeInCart({
			productId: data.id,
			color: selectedColor,
			size: selectedSize,
		})
	}, [selectedColor, selectedSize])

	return (
		<div className={style.mobile}>
			<div className={style.wrap}>
				<div className={style.product}>
					<div className={style.image}>
						<Image
							src={`${process.env.NEXT_PUBLIC_API_STATIC}/${data.poster}`}
							alt={data.title}
							width={90}
							height={150}
						/>
					</div>
					<div className={style.content}>
						<div className={style.item}>
							<h3 className={style.name}>{data.title}</h3>
							<Price
								price={data.price}
								className={style.price}
								discount={data.discount}
								orientation="column"
								size="1xxl"
							/>
						</div>

						{/* <div className={style.item}>
							<ProducAttributeComponent
								selectedValueHandler={(value) => setSelectedColor(value)}
								className={style.attribute}
								data={data.images.map((color) => color.color)}
								title="Цвета"
								size="1xl"
							/>
						</div>
						{data.sizes && data.sizes?.length > 10 ? (
							<div className={style.item}>
								<ProducAttributeComponent
									selectedValueHandler={(value) => setSelectedSize(value)}
									className={style.attribute}
									data={data.sizes}
									title="Размеры"
									size="1xl"
								/>
							</div>
						) : null} */}
					</div>
				</div>
				<div className={style.actions}>
					<Featured size={20} />
					<ProductActions
						actionType="toCart"
						alias={data.alias}
						product={data}
					/>
				</div>
			</div>
		</div>
	)
}
