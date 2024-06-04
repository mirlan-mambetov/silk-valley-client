import { Metadata } from "next"
import User from "./User"

export const metadata: Metadata = {
	robots: {
		index: false,
		follow: false,
	},
}
const UserPage = () => {
	return <User />
}

export default UserPage
