"use client"

import { useAuth } from "@/hooks/auth/useAuth"
import { notFound } from "next/navigation"
import { useEffect } from "react"

export const withProtected = <P extends object>(
	WrappedComponent: React.ComponentType<P>
) => {
	const Auth: React.FC<P> = (props) => {
		const { isAuthentificated } = useAuth()

		useEffect(() => {
			if (!isAuthentificated) {
				return notFound()
			}
		}, [isAuthentificated])

		return <WrappedComponent {...props} />
	}

	return Auth
}
