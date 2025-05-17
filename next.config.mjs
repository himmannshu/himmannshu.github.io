/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static HTML export for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/himmannshu.github.io' : '',
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig; 