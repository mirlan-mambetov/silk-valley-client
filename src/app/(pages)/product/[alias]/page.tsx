import { APP_URI } from "@/api/config/api-config"
import { IPageParams } from "@/interfaces/page.interface"
import { notFound } from "next/navigation"
import { Suspense } from "react"
import { Detail } from "./detail/Detail"

async function fetchProduct({ params }: IPageParams) {
	const { alias } = params
	const response = await fetch(`${APP_URI}/product/by-alias/${alias}`)
	if (response.status === 404) notFound()
	return response.json()
}

const ProductPage = async ({ params }: IPageParams) => {
	const product = await fetchProduct({ params })
	return (
		<>
			<section>
				{/* DETAIL */}
				<div className="container">
					{/* <Suspense fallback={<>Загрузка...</>}> */}
					<Suspense>
						<Detail data={product} />
					</Suspense>
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
