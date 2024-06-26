import { Variants } from "framer-motion"

export const stickyHeaderMotion: Variants = {
	open: {
		y: 0,
		opacity: 1,
		pointerEvents: "all",
		transition: {
			y: { stiffness: 1000, velocity: -100 },
			opacity: { stiffness: 400, velocity: -50 },
		},
	},
	closed: {
		y: "-100%",
		opacity: 0,
		pointerEvents: "none",
		transition: {
			y: { stiffness: 1000 },
			opacity: { stiffness: 800 },
		},
	},
}

export const headerOverlayVariantMotion: Variants = {
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
