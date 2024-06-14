import { Loader } from "@/components"
import { IPageParams } from "@/interfaces/page.interface"
import { Metadata } from "next"
import { Suspense } from "react"
import { Order } from "./Order"

export const metadata: Metadata = {
	title: "Мои заказы",
	robots: {
		index: false,
		follow: false,
	},
}

export default function OrderPage({
	params,
}: IPageParams<{ orderId: string }>) {
	return (
		<Suspense fallback={<Loader color="black" position="absolute" />}>
			<Order orderId={params.orderId} />
		</Suspense>
	)
}
