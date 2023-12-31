/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "static.tvmaze.com",
            },
            {
                protocol: "https",
                hostname: "api.multiavatar.com",
            },
        ],
    },
};

module.exports = nextConfig;
