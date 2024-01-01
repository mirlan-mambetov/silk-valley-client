import { Variants } from "framer-motion"

export const variants: Variants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		y: 30,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
}
export const variants4: Variants = {
	active: {
		width: "100%",
		transition: {
			delay: 0.5,
		},
	},
	closed: {
		width: "0",
		transition: {
			delay: 0.5,
		},
	},
}
export const variants2 = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
}
export const variants3: Variants = {
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
export const variants5: Variants = {
	open: {
		opacity: 1,
		pointerEvents: "all",
		transition: {
			opacity: { stiffness: 300, velocity: -40 },
			staggerChildren: 0.04,
			delayChildren: 0.2,
		},
	},
	closed: {
		opacity: 0,
		pointerEvents: "none",
		transition: {
			opacity: { stiffness: 300 },
			staggerChildren: 0.02,
			staggerDirection: -1,
		},
	},
}
