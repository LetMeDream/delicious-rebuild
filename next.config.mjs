/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_KEY: 'c0d3ffc9951343fa8514a12ca98f2904',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.spoonacular.com',
        port: '',
        pathname: '/**/**'
      }
    ]
  }
};


export default nextConfig;
