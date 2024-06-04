import { IPageParams } from "@/interfaces/page.interface"
import { Metadata } from "next"
import { Suspense } from "react"
import { Order } from "./Order"

export const metadata: Metadata = {
	robots: {
		index: false,
		follow: false,
	},
}
export default function OrderPage({ params }: IPageParams<{ id: string }>) {
	return (
		<Suspense fallback={<>Загрузка...</>}>
			<Order id={params.id} />
		</Suspense>
	)
}
