import { Variants } from "framer-motion"

export const notifyMotionVariant: Variants = {
	open: {
		opacity: 1,
		transition: {
			opacity: { duration: 0.4 },
		},
	},
	closed: {
		opacity: 0,
		transition: {
			opacity: { duration: 0.4 },
		},
	},
}
