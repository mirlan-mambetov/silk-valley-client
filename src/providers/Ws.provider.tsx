import { WebSocketContext, WebSocketContextType } from "@/context/ws.context"
import { useUser } from "@/hooks/user/useUser"
import { usePathname } from "next/navigation"
import { ReactNode, useEffect, useState } from "react"
import io, { Socket } from "socket.io-client"

export const WebSocketProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [socket, setSocket] = useState<Socket | null>(null)
	const { user } = useUser()
	const pathName = usePathname()

	useEffect(() => {
		const newSocket = io("http://localhost:5000")

		newSocket.on("connect", () => {
			console.log("Successfully connected to the WebSocket server")
		})

		if (user) {
			newSocket.auth = { email: user?.email }
		}
		setSocket(newSocket)

		window.addEventListener("beforeunload", () => {
			newSocket.emit("logOut", { email: user?.email })
		})

		return () => {
			newSocket.disconnect()
		}
	}, [])

	useEffect(() => {
		if (socket) {
			socket.emit("logIn", { email: user?.email })
		}
	}, [user, socket])

	const contextValue: WebSocketContextType = { socket }

	return (
		<WebSocketContext.Provider value={contextValue}>
			{children}
		</WebSocketContext.Provider>
	)
}
