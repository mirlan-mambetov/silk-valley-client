import { Metadata } from "next"
import Orders from "./Orders"

export const metadata: Metadata = {
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
					<Orders />
				</div>
			</section>
		</>
	)
}

export default OrdersPage
