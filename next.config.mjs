/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static HTML export for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig; 