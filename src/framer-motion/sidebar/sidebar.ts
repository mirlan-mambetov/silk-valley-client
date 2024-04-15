import { Variants } from "framer-motion"

export const sidebarVariantMotion: Variants = {
	open: {
		x: 0,
		transition: {
			x: { stiffness: 600, velocity: -100 },
		},
	},
	closed: {
		x: "-100%",
		transition: {
			x: { stiffness: 600 },
		},
	},
}
export const sidebarOverlayVariantMotion: Variants = {
	open: {
		x: 0,
		transition: {
			x: { duration: 0.3 },
		},
	},
	closed: {
		x: "-100%",
		transition: {
			x: { duration: 0.3 },
		},
	},
}
