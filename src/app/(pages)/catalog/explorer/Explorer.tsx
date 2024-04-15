"use client"

import { FiltersComponent, ProductCardsComponent } from "@/components"
import { ICategories } from "@/interfaces/categories.interface"
import { FC } from "react"
import style from "./explorer.module.scss"

interface IExplorerProps {
	data: ICategories
}
export const Explorer: FC<IExplorerProps> = ({ data }) => {
	// const {} = useQuery({
	// 	queryKey: ['filteredProduct'],
	// 	queryFn: () => {

	// 	}
	// })
	return (
		<div className={style.explorer}>
			<div className="container">
				<div className={style.wrap}>
					{/* FILTERS */}
					{data && <FiltersComponent data={data} />}
					{/* CATALOG CARDS */}
					{data.products && <ProductCardsComponent products={data.products} />}
				</div>
			</div>
		</div>
	)
}
