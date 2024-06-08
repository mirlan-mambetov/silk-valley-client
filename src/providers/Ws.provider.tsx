import { WebSocketContext, WebSocketContextType } from "@/context/ws.context"
import { useAuth } from "@/hooks/auth/useAuth"
import { useUser } from "@/hooks/user/useUser"
import { ReactNode, useEffect, useState } from "react"
import io, { Socket } from "socket.io-client"

export const WebSocketProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [socket, setSocket] = useState<Socket | null>(null)
	const { user } = useUser()
	const { isAuthentificated } = useAuth()

	useEffect(() => {
		if (!isAuthentificated || !user) {
			if (socket) {
				socket.disconnect()
				socket.on("disconnect", () => {
					console.log("Disconnected from the WebSocket server")
				})
				setSocket(null)
			}
			return
		}

		const newSocket = io("http://localhost:5000", {
			auth: {
				userId: user.id,
			},
		})
		newSocket.on("connect", () => {
			console.log("Successfully connected to the WebSocket server")
		})

		setSocket(newSocket)

		return () => {
			if (newSocket) {
				newSocket.disconnect()
			}
		}
	}, [isAuthentificated, user])

	const contextValue: WebSocketContextType = { socket }

	return (
		<WebSocketContext.Provider value={contextValue}>
			{children}
		</WebSocketContext.Provider>
	)
}
