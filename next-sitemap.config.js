// next-sitemap.js

module.exports = {
    siteUrl: process.env.SITE_URL || "https://your-site.com", // URL của website của bạn
    generateRobotsTxt: true, // Tạo robots.txt tự động
    sitemapSize: 7000, // Giới hạn số lượng URL tối đa trong một sitemap (mặc định 50000)
    changefreq: "daily", // Tần suất thay đổi của các trang (options: 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never')
    priority: 0.7, // Độ ưu tiên của các trang (0.0 - 1.0)

    // Tùy chọn tạo sitemap cho các loại trang khác nhau
    additionalPaths: async (config) => [
        await config.transform(
            // Tạo thêm các URL động nếu cần
            "/custom-page",
            {
                changefreq: "weekly",
                priority: 0.8,
            }
        ),
        await config.transform(
            // Thêm các đường dẫn tùy chỉnh khác
            "/about-us",
            {
                changefreq: "monthly",
                priority: 0.5,
            }
        ),
    ],

    // Tùy chọn để bao gồm các trang API vào sitemap (nếu có)
    exclude: ["/admin"], // Các URL hoặc trang không muốn bao gồm trong sitemap (ví dụ: API)

    // Chỉnh sửa sitemap cho những trang không có dấu chấm (.) trong URL
    // Dùng khi URL của bạn có dấu chấm (.) như "/about.page"
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                allow: "/",
            },
            {
                userAgent: "*",
                disallow: "/admin",
            },
        ],
        additionalSitemaps: [
            "https://your-site.com/sitemap-pages-1.xml", // Thêm nhiều sitemap nếu cần
            "https://your-site.com/sitemap-pages-2.xml",
        ],
    },
};
