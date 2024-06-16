import { NO_INDEX_PAGE } from "@/constants/app.constants"
import { Metadata } from "next"
import User from "./User"

export const metadata: Metadata = {
	...NO_INDEX_PAGE,
}
const UserPage = () => {
	return <User />
}

export default UserPage
