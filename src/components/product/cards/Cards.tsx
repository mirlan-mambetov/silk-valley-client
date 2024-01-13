"use client"

import { IProduct } from "@/interfaces/product.interface"
import { FC } from "react"
import { DefaultCardsComponent } from "./default/Default-Cards"
import { WomanCardsComponent } from "./woman/Woman-Cards"

interface ICardsComponentProps {
	type?: "default" | "woman"
	grid?: "6" | "5"
	products: IProduct[]
	limit?: number
	title?: string
}

export const CardsComponent: FC<ICardsComponentProps> = ({
	type = "default",
	products,
	limit,
	title,
	grid,
}) => {
	switch (type) {
		case "default":
			return (
				<DefaultCardsComponent
					grid={grid}
					data={products}
					limit={limit}
					title={title}
				/>
			)

		case "woman":
			return <WomanCardsComponent data={products} />

		default:
			return (
				<DefaultCardsComponent data={products} limit={limit} title={title} />
			)
	}
}
