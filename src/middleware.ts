import { NextResponse, type NextRequest } from "next/server"
import { AuthEnum } from "./enums/Auth.enum"

export default function middleware(request: NextRequest) {
	const isAuth = request.cookies.has(AuthEnum.IS_AUTH)

	if (!isAuth) {
		return NextResponse.redirect(new URL("/", request.url))
	}
}

// Supports both a single string value or an array of matchers
export const config = {
	matcher: ["/user", "/user/:path*"],
}
