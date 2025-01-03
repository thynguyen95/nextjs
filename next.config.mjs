/** @type {import('next').NextConfig} */
const nextConfig = {
    // assetPrefix: "https://cdnjs.cloudflare.com",
    images: {
        remotePatterns: [
            {
                protocol: "https",
                port: "",
                hostname: "apistore.cybersoft.edu.vn",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "i.pravatar.cc",
                pathname: "/**", // Cho phép tất cả các đường dẫn
            },
        ],
        formats: ["image/avif", "image/webp"],
    },
};

export default nextConfig;
