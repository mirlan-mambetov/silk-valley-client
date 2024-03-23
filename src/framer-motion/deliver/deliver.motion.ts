import { Variants } from "framer-motion"

export const deliverInformationMotion: Variants = {
	open: {
		transform: "translateY(0%)",
		height: "100%",
		transition: {
			ease: "linear",
			transform: {
				duration: 0.5,
			},
		},
	},
	closed: {
		transform: "translateY(80%)",
		height: "unset",
		transition: {
			ease: "linear",
			transform: {
				duration: 0.5,
			},
		},
	},
}
