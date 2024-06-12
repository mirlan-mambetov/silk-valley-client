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
