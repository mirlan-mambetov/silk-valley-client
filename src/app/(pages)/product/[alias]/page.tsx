import { CardsComponent } from "@/components"
import { CARDS_PRODUCT } from "@/components/product/product.data"
import { IPageParams } from "@/interfaces/page.interface"
import { Suspense } from "react"
import { Detail } from "./detail/Detail"

async function findData({ params }: IPageParams) {
	const { alias } = params
	if (!alias) return null
	const product = CARDS_PRODUCT.find((product) => product.alias === alias)
	return product
}
const ProductPage = async ({ params }: IPageParams) => {
	const product = await findData({ params })

	return (
		<>
			<section>
				{/* DETAIL */}
				<div className="container">
					<Suspense fallback={<>Загрузка...</>}>
						{product ? <Detail data={product} /> : null}
					</Suspense>
				</div>
			</section>
			<section>
				<div className="container">
					<CardsComponent products={CARDS_PRODUCT} title="Смотрите также" />
				</div>
			</section>
		</>
	)
}

export default ProductPage
