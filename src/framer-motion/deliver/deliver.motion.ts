import { Variants } from "framer-motion"

export const deliverInformationMotion: Variants = {
	open: {
		transform: "translateY(0%)",
		height: "100%",
		transition: {
			ease: "easeIn",
		},
	},
	closed: {
		transform: "translateY(65%)",
		height: "unset",
		transition: {
			ease: "easeIn",
		},
	},
}
