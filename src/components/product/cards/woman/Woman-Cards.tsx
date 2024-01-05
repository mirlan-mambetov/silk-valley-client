import { ButtonComponent, PriceComponent, RatingComponent } from "@/components"
import { IProduct } from "@/interfaces/product.interface"
import Image from "next/image"
import { FC } from "react"
import { BsHandbag } from "react-icons/bs"
import style from "./woman.module.scss"

interface IWomanCardsComponentProps {
	data: IProduct[]
}
export const WomanCardsComponent: FC<IWomanCardsComponentProps> = ({
	data,
}) => {
	const limeted = data.slice(0, 8)
	return (
		<div className={style.woman}>
			<div className={style.wrap}>
				<div className={style.card_promotional}></div>
				<div className={style.cards}>
					{limeted.map((product) => (
						<div className={style.card} key={product.id}>
							<div className={style.image}>
								<Image
									width={800}
									height={1000}
									src={product.poster}
									alt={product.title}
								/>
							</div>
							<div className={style.content}>
								<div className={style.name}>
									<h2 className={style.title}>{product.title}</h2>
								</div>
								<div className={style.middle}>
									<RatingComponent rating={product.rating} />
									<PriceComponent price={product.price} />
								</div>
								<div className={style.action}>
									<ButtonComponent>
										<BsHandbag />
									</ButtonComponent>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
