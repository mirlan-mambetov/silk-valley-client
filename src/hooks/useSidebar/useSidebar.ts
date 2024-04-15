import { SidebarContext } from "@/context/sidebar.context"
import { useContext } from "react"

export const useSideBar = () => {
	const { isOpen, sidebarHandler } = useContext(SidebarContext)

	return { isOpen, sidebarHandler }
}
