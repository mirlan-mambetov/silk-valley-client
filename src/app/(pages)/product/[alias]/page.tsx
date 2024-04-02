import { productFetchByAlias } from "@/api/api-product/api-product"
import { IPageParams } from "@/interfaces/page.interface"
import { notFound } from "next/navigation"
import { Suspense } from "react"
import { Detail } from "./detail/Detail"

async function fetchProduct({ params }: IPageParams) {
	try {
		const { alias } = params
		const response = await productFetchByAlias({ slug: alias })
		if (!response?.data) notFound()
		return response.data
	} catch (error) {
		console.log(error)
	}
}

const ProductPage = async ({ params }: IPageParams) => {
	const product = await fetchProduct({ params })
	return (
		<>
			<section>
				{/* DETAIL */}
				<div className="container">
					{/* <Suspense fallback={<>Загрузка...</>}> */}
					<Suspense>{product && <Detail data={product} />}</Suspense>
					{/* </Suspense> */}
				</div>
			</section>
			{/* <section>
				<div className="container">
					<CardsComponent products={CARDS_PRODUCT} title="Смотрите также" />
				</div>
			</section> */}
		</>
	)
}

export default ProductPage
