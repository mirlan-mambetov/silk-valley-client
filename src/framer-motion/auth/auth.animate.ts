import { Variants } from "framer-motion"

export const animateLoginRegister: Variants = {
	open: {
		x: 0,
		opacity: 1,
		zIndex: 2,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
			opacity: { stiffness: 400, velocity: -50 },
		},
	},
	closed: {
		x: "100%",
		zIndex: "-2",
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
			opacity: { stiffness: 800 },
		},
	},
}
