import { Variants } from "framer-motion"

export const cartVariantMotion: Variants = {
	open: {
		x: 0,
		transition: {
			x: { stiffness: 600, velocity: -100 },
		},
	},
	closed: {
		x: "100%",
		transition: {
			x: { stiffness: 600 },
		},
	},
}
export const cartOverlayVariantMotion: Variants = {
	open: {
		x: 0,
		transition: {
			x: { duration: 0.3 },
		},
	},
	closed: {
		x: "100%",
		transition: {
			x: { duration: 0.3 },
		},
	},
}
