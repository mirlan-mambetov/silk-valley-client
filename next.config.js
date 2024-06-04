const { webpack } = require("next/dist/compiled/webpack/webpack")

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "*",
			},
		],
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	pageExtensions: ["ts", "tsx"],
}

module.exports = nextConfig
