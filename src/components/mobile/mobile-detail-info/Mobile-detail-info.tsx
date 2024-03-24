"use client"

import {
	ButtonComponent,
	ProducAttributeComponent,
	ProductPriceComponent,
} from "@/components"
import { useExistInCart } from "@/hooks/cart/useExistInCart"
import { useSelectedAttributes } from "@/hooks/cart/useSelectedAttributes"
import { useStoreActions } from "@/hooks/store/useStoreActions"
import { IProduct } from "@/interfaces/product.interface"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { FC, useEffect } from "react"
import style from "./mobile-detail-info.module.scss"

interface IMobileDetailInfoComponentProps {
	data: IProduct
}
export const MobileDetailInfoComponent: FC<IMobileDetailInfoComponentProps> = ({
	data,
}) => {
	const { isExist } = useExistInCart(data)
	const { push } = useRouter()

	const { setColorHandler, setSizeHandler, color, size } =
		useSelectedAttributes()
	const { updateProductAttributeInCart, addToCart, openNotifyHandler } =
		useStoreActions()

	useEffect(() => {
		updateProductAttributeInCart({ productId: data.id, color, size })
	}, [color, size])

	return (
		<div className={style.mobile}>
			<div className={style.wrap}>
				<div className={style.product}>
					<div className={style.image}>
						<Image src={data.poster} alt={data.title} width={90} height={150} />
					</div>
					<div className={style.content}>
						<div className={style.item}>
							<h3 className={style.name}>{data.title}</h3>
							<ProductPriceComponent
								price={data.price}
								className={style.price}
								discount={data.discount}
								orientation="column"
								size="1xxl"
							/>
						</div>

						<div className={style.item}>
							<ProducAttributeComponent
								selectedValueHandler={(value) => setColorHandler(value)}
								className={style.attribute}
								data={["Черный", "Белый", "Зеленый", "Черно&Белый"]}
								title="Цвета"
								size="1xl"
							/>
						</div>
						<div className={style.item}>
							<ProducAttributeComponent
								selectedValueHandler={(value) => setSizeHandler(value)}
								className={style.attribute}
								data={["32xl", "34xl", "38xl", "48XXL"]}
								title="Размеры"
								size="1xl"
							/>
						</div>
					</div>
				</div>
				<div className={style.button}>
					{isExist ? (
						<ButtonComponent
							aria-label="Перейти к корзине"
							btnType="cart"
							onClick={() => push("/cart")}
						>
							Перейти к корзине
						</ButtonComponent>
					) : (
						<ButtonComponent
							disabled={!color || !size}
							aria-label="Просмотр"
							btnType="cart"
							onClick={() => {
								addToCart({ product: { ...data, quantity: 1, size, color } })
								openNotifyHandler("Товар добавлен в корзину")
							}}
						/>
					)}
				</div>
			</div>
		</div>
	)
}
