/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sannity.io',
                port: '',
            }
        ],
    },
}

module.exports = nextConfig
