import { Variants } from "framer-motion"

export const screenMotionVariant: Variants = {
	open: {
		opacity: 1,
		zIndex: 290,
		pointerEvents: "all",
		transition: {
			opacity: { duration: 0.4 },
		},
	},
	closed: {
		opacity: 0,
		// zIndex: "-10",
		pointerEvents: "none",
		transition: {
			opacity: { duration: 0.4 },
		},
	},
}
