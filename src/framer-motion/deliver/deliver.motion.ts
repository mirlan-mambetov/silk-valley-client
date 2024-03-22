import { Variants } from "framer-motion"

export const deliverInformationMotion: Variants = {
	open: {
		transform: "translateY(0%)",
		transition: {
			ease: "linear",
			minHeight: {
				duration: 0.5,
			},
		},
	},
	closed: {
		transform: "translateY(100%)",
		transition: {
			ease: "linear",
			minHeight: {
				duration: 0.5,
			},
		},
	},
}
