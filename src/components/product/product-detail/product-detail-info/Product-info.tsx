"use client"

import {
	ButtonComponent,
	DeliverComponent,
	ProductPriceComponent,
} from "@/components"
import { useDeliver } from "@/hooks/deliver/useDeliver"
import { useScreen } from "@/hooks/screen/useScreen"
import { useStoreActions } from "@/hooks/store/useStoreActions"
import { IProduct } from "@/interfaces/product.interface"
import cn from "classnames"
import { useRouter } from "next/navigation"
import { FC } from "react"
import { FiEdit2 } from "react-icons/fi"
import { MdOutlineBorderColor } from "react-icons/md"
import style from "./product-info.module.scss"

interface IProductInfoComponentProps {
	data: IProduct
	type?: "sticky" | "default"
}
export const ProductInfoComponent: FC<IProductInfoComponentProps> = ({
	data,
	type = "default",
}) => {
	const { setContentHandler } = useScreen()
	const { push } = useRouter()
	const { addToCart } = useStoreActions()
	const { address } = useDeliver()

	return (
		<div
			className={cn(style.info, {
				[style.sticky]: type === "sticky",
			})}
		>
			<h3 className={style.total}>Общие детали</h3>
			<div className={style.wrap}>
				<div className={style.box}>
					<small>Доставка</small>
					<div className={style.box_item}>
						<span>
							{address.city ||
								address.town ||
								address.state ||
								"Иссык - Кульская область. г. Каракол"}{" "}
						</span>
						<ButtonComponent
							title="Выбрать координаты доставки"
							onClick={() => setContentHandler(<DeliverComponent />)}
						>
							<FiEdit2 />
						</ButtonComponent>
					</div>
				</div>

				<div className={style.box}>
					{data.discount ? (
						<>
							<small>
								Цена
								<>с учетом скидки</>
							</small>
							<div className={style.box_item}>
								<ProductPriceComponent
									price={data.price}
									discount={data.discount}
									orientation="column"
								/>
							</div>
						</>
					) : (
						<>
							<small>Цена</small>
							<div className={style.box_item}>
								<ProductPriceComponent
									price={data.price}
									discount={data.discount}
									orientation="column"
								/>
							</div>
						</>
					)}
				</div>

				<div className={style.box}>
					<small>Цвет</small>
					<div className={style.box_item}>
						<span>White&Black</span>
					</div>
				</div>

				<div className={style.box}>
					<small>Размеры</small>
					<div className={style.box_item}>
						<span>32X</span>
					</div>
				</div>

				{/* <CartRangeComponent product={pro}/> */}

				<ButtonComponent
					className={style.button}
					onClick={() => {
						addToCart({ product: { ...data, quantity: 1 } })
						push("/cart")
					}}
				>
					<MdOutlineBorderColor />
					<span>Заказать</span>
				</ButtonComponent>
			</div>
		</div>
	)
}
