import { ButtonComponent, PriceComponent, RatingComponent } from "@/components"
import { IProduct } from "@/interfaces/product.interface"
import { FC } from "react"
import style from "./attributes.module.scss"

interface IAttributesComponentProps {
	data: IProduct
}
export const AttributesComponent: FC<IAttributesComponentProps> = ({
	data,
}) => {
	return (
		<div className={style.attributes}>
			<RatingComponent rating={data?.rating || 0} className={style.rating} />
			<div className={style.price}>
				<PriceComponent
					price={data.price}
					discount={data.discount}
					orientation="column"
					size="2xl"
				/>
				{data.discount ? <span>- {data.discount}%</span> : null}
			</div>
			<div className={style.colors}>
				<h5 className={style.attribute_title}>Цвета</h5>
				<div className={style.color}>
					<ButtonComponent className={style.active_btn}>
						White&Black
					</ButtonComponent>
					<ButtonComponent>White</ButtonComponent>
					<ButtonComponent>Black</ButtonComponent>
					<ButtonComponent>Blue</ButtonComponent>
				</div>
			</div>
			<div className={style.sizes}>
				<h5 className={style.attribute_title}>Цвета</h5>
				<div className={style.size}>
					<ButtonComponent className={style.active_btn}>32</ButtonComponent>
					<ButtonComponent>36</ButtonComponent>
					<ButtonComponent>38</ButtonComponent>
					<ButtonComponent>40</ButtonComponent>
				</div>
			</div>
			<p className={style.description}>
				<h5 className={style.attribute_title}>Описание</h5>
				{data?.description}
			</p>
		</div>
	)
}
