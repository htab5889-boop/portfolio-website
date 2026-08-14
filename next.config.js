/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  images: {
    domains: ['images.unsplash.com', 'i.ytimg.com', 'img.youtube.com', 'upload.wikimedia.org', 'images.blackmagicdesign.com'],
  },
};

module.exports = nextConfig;
