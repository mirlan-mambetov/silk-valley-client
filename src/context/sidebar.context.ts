import { ISidebarContext } from "@/interfaces/sidebar.interface"
import { createContext } from "react"

const initialContext: ISidebarContext = {
	sidebarHandler: () => {},
	isOpen: false,
}
export const SidebarContext = createContext(initialContext)
