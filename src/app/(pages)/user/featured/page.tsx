import { NO_INDEX_PAGE } from "@/constants/app.constants"
import { Metadata } from "next"

export const metadata: Metadata = {
	title: "Избранное",
	...NO_INDEX_PAGE,
}

const FeaturedPage = () => {
	return <div>FeaturedPage</div>
}

export default FeaturedPage
