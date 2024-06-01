export const APP_URI =
	process.env.NEXT_PUBLIC_API_BASE_HOST || "https://api.slkvalley.com/api/v1"

export const errorCatch = (err: any) => {
	const message = err?.response?.data?.message

	return message
		? typeof err.response.data.message === "object"
			? message[0]
			: message
		: err.message
}
