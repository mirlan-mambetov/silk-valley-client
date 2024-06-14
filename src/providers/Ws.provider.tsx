import { WebSocketContext, WebSocketContextType } from "@/context/ws.context"
import { useUser } from "@/hooks/user/useUser"
import { ReactNode, useEffect, useState } from "react"
import io, { Socket } from "socket.io-client"

export const WebSocketProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [socket, setSocket] = useState<Socket | null>(null)
	const { user } = useUser()

	useEffect(() => {
		const newSocket = io("https://api.slkvalley.com")

		newSocket.on("connect", () => {
			console.log("Successfully connected to the WebSocket server")
		})

		newSocket.on("disconnect", () => {
			console.log("Disconnected from the WebSocket server")
		})

		if (!user) {
			newSocket.disconnect()
			setSocket(null)
			return
		}

		newSocket.auth = {
			userId: user.id,
		}

		setSocket(newSocket)

		return () => {
			if (newSocket) {
				newSocket.disconnect()
			}
		}
	}, [user])

	const contextValue: WebSocketContextType = { socket }

	return (
		<WebSocketContext.Provider value={contextValue}>
			{children}
		</WebSocketContext.Provider>
	)
}
