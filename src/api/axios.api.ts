import axios from "axios"
export const getContentType = () => ({
	"Content-Type": "application/json",
})

export const axiosApi = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_BASE_HOST,
	headers: getContentType(),
})
