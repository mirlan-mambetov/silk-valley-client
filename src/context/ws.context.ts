import { createContext } from "react"
import { Socket } from "socket.io-client"

export interface WebSocketContextType {
	socket: Socket | null
}

export const WebSocketContext = createContext<WebSocketContextType | null>(null)
