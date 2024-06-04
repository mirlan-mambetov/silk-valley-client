import { Variants } from "framer-motion"

export const notifyMotionVariant: Variants = {
	open: {
		opacity: 1,
		y: 0,
		x: "-50%",
		transition: {
			opacity: { duration: 0.4 },
			y: { duration: 0.4 },
		},
	},
	closed: {
		opacity: 0,
		y: "100%",
		x: "-50%",
		transition: {
			opacity: { duration: 0.4 },
			y: { duration: 0.4 },
		},
	},
}
