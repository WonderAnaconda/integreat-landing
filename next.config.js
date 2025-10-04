/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // 👇 Optional: ensures images and paths work properly on GitHub Pages
    images: {unoptimized: true},
    trailingSlash: true,
};

module.exports = nextConfig;
