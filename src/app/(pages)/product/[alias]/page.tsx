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
	// try {
	const { alias } = params
	console.log(alias)
	const response = await fetch(`${APP_URI}/product/by-alias/${alias}`)
	console.log(response.status)
	if (response.status === 404) redirect("/not-found", RedirectType.replace)
	return response.json()
	// } catch (err) {
	// 	throw new Error(`Произошла ошибка при запросе товаров ${err}`)
	// }
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
