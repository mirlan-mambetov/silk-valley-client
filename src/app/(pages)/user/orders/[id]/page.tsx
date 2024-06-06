import { LoaderComponent } from "@/components"
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

export default function OrderPage({ params }: IPageParams<{ id: string }>) {
	return (
		<Suspense fallback={<LoaderComponent color="black" position="absolute" />}>
			<Order id={params.id} />
		</Suspense>
	)
}
