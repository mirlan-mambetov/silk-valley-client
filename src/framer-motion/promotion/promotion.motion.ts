import { Variants } from "framer-motion"

export const promotionMotionVariant: Variants = {
	open: {
		// scale: [1, .9, 2, 1, 1],
		y: 0,
		// rotate: [0, 0, 180, 180, 0],
		// borderRadius: ["0%", "0%", "0", "50%", "0%"],
		borderTopRightRadius: "12%",
		borderBottomLeftRadius: "12%",
	},
	closed: {
		y: "-100%",
		borderTopRightRadius: "0",
		borderBottomLeftRadius: "0",
	},
}

export const promotionImageMotionVariant: Variants = {
	open: {
		y: 0,
	},
	closed: {
		y: "100%",
	},
}
