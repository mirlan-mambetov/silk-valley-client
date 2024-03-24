import { Variants } from "framer-motion"

export const modalMotionVariant: Variants = {
	open: {
		opacity: 1,
		pointerEvents: "all",
		transition: {
			opacity: { duration: 0.5 },
		},
	},
	closed: {
		opacity: 0,
		pointerEvents: "none",
		transition: {
			opacity: { duration: 0.4 },
		},
	},
}
