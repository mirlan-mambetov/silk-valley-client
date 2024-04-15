export const APP_URI =
	process.env.NEXT_PUBLIC_API_BASE_HOST ||
	"https://8669-193-34-225-151.ngrok-free.app/api/v1"

export const errorCatch = (err: any) => {
	const message = err?.response?.data?.message

	return message
		? typeof err.response.data.message === "object"
			? message[0]
			: message
		: err.message
}
