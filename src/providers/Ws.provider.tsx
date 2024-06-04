import { WebSocketContext, WebSocketContextType } from "@/context/ws.context"
import { ReactNode, useEffect, useState } from "react"
import io, { Socket } from "socket.io-client"

export const WebSocketProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [socket, setSocket] = useState<Socket | null>(null)

	useEffect(() => {
		const newSocket = io("http://localhost:5000", {})

		newSocket.on("connect", () => {
			console.log("Successfully connected to the WebSocket server")
		})

		setSocket(newSocket)

		return () => {
			newSocket.disconnect()
		}
	}, [])

	const contextValue: WebSocketContextType = { socket }

	return (
		<WebSocketContext.Provider value={contextValue}>
			{children}
		</WebSocketContext.Provider>
	)
}
