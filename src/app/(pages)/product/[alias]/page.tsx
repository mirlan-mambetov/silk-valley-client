import { APP_URI } from "@/api/config/api-config"
import { IPageParams } from "@/interfaces/page.interface"
import { redirect, RedirectType } from "next/navigation"
import { Detail } from "./detail/Detail"
// import { Detail } from "./detail/Detail"

// async function findData({ params }: IPageParams) {
// 	const { alias } = params
// 	if (!alias) return null
// 	const product = CARDS_PRODUCT.find((product) => product.alias === alias)
// 	return product
// }

async function fetchProduct({ params }: IPageParams) {
	const { alias } = params
	const response = await fetch(`${APP_URI}/product/by-alias/${alias}`)
	if (response.status === 404) redirect("/not-found", RedirectType.replace)
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
					<Detail data={product} />
					{/* </Suspense> */}
				</div>
			</section>
			<section>
				<div className="container">
					{/* <CardsComponent products={CARDS_PRODUCT} title="Смотрите также" /> */}
				</div>
			</section>
		</>
	)
}

export default ProductPage
