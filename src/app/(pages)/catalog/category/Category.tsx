"use client"

import { FiltersComponent, ProductCards } from "@/components"
import { useFetchFilterProducts } from "@/hooks/filter/useFetchFilterProducts"
import { useGetAttributes } from "@/hooks/filter/useGetAttributes"
import { IChildsCategories } from "@/interfaces/categories.interface"
import { FC } from "react"
import style from "./category.module.scss"

interface ICategoryProps {
	data: IChildsCategories
}
export const CategoryPage: FC<ICategoryProps> = ({ data }) => {
	const { data: products, isFetching } = useFetchFilterProducts(data.products)

	// GET ALL ATTRIBUTES FOR FILTER
	const { data: productAttributes, isFetching: loadingAttributes } =
		useGetAttributes({
			slug: data.slug,
		})

	return (
		<>
			<section>
				<div className="container">
					<div className={style.hero}>
						<FiltersComponent
							attributesData={productAttributes}
							data={data}
							isLoadingAttributes={loadingAttributes}
						/>
					</div>
				</div>
			</section>
			<section>
				<div className="container">
					<ProductCards products={data.products} />
				</div>
			</section>
		</>
	)
}
