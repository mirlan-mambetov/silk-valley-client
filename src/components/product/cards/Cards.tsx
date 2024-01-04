"use client"

import { IProduct } from "@/interfaces/product.interface"
import { FC } from "react"
import { DefaultCardsComponent } from "./default/Default-Cards"
import { WomanCardsComponent } from "./woman/Woman-Cards"

interface ICardsComponentProps {
	type?: "default" | "woman"
	products: IProduct[]
}

export const CardsComponent: FC<ICardsComponentProps> = ({
	type = "default",
	products,
}) => {
	switch (type) {
		case "default":
			return <DefaultCardsComponent data={products} />

		case "woman":
			return <WomanCardsComponent />

		default:
			return <DefaultCardsComponent data={products} />
	}
}
