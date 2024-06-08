import { Loader } from "@/components"
import { Metadata } from "next"
import { Suspense } from "react"
import Orders from "./Orders"

export const metadata: Metadata = {
	title: "Мои заказы",
	robots: {
		index: false,
		follow: false,
	},
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
