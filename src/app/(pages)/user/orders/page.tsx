import { Loader } from "@/components"
import { NO_INDEX_PAGE } from "@/constants/app.constants"
import { Metadata } from "next"
import { Suspense } from "react"
import Orders from "./Orders"

export const metadata: Metadata = {
	title: "Мои заказы",
	...NO_INDEX_PAGE,
}
const OrdersPage = () => {
	return (
		<>
			<section>
				<div className="container">
					<Suspense fallback={<Loader color="black" position="absolute" />}>
						<Orders />
					</Suspense>
				</div>
			</section>
		</>
	)
}

export default OrdersPage
