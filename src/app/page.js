// "use client";
import Image from "next/image";
import { getAllProductAction } from "./actions/services/productAPI";
import Link from "next/link";
// import { useEffect, useState } from "react";

export const metadata = {
    title: "Shoes Shop - Buy the Best Shoes Online",
    description:
        "Shop the latest shoes and accessories with unbeatable prices.",
    openGraph: {
        title: "Shoes Shop",
        description: "Explore our wide range of shoes and accessories.",
        url: "https://nextjs-nine-khaki-61.vercel.app/",
        images: [
            {
                url: "https://apistore.cybersoft.edu.vn/images/vans-black-black.png",
                width: 800,
                height: 600,
                alt: "Shoes Shop",
            },
        ],
    },
    jsonLD: {
        "@context": "https://schema.org",
        "@type": "Store",
        name: "Shoes Shop",
        url: "https://your-site.com",
        description:
            "Shop the latest shoes and accessories with unbeatable prices.",
        logo: "https://your-site.com/logo.png",
        sameAs: [
            "https://www.facebook.com/shoesshop",
            "https://www.instagram.com/shoesshop",
        ],
        address: {
            "@type": "PostalAddress",
            streetAddress: "123 Shoe Street",
            addressLocality: "Shoe City",
            addressRegion: "SC",
            postalCode: "12345",
            addressCountry: "US",
        },
        offers: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Product",
                    name: "Product 1",
                    image: "https://apistore.cybersoft.edu.vn/images/product1.png",
                    description: "No description available.",
                },
                price: 100,
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                url: "https://your-site.com/detail/1",
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Product",
                    name: "Product 2",
                    image: "https://apistore.cybersoft.edu.vn/images/product2.png",
                    description: "No description available.",
                },
                price: 150,
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                url: "https://your-site.com/detail/2",
            },
        ],
    },
};

const getAllProduct = async () => {
    // const res = await fetch("http://localhost:3000/api/product");
    const res = await fetch("https://apistore.cybersoft.edu.vn/api/Product");

    const data = await res.json();
    console.log("data: ", data);

    return data.content;
};
// server cpn
const Home = async () => {
    // const data = await getAllProduct();
    const data = await getAllProductAction();
    console.log("data: ", data);

    return (
        <div>
            <h1 className="text-center text-4xl text-red-500">Shoes shop</h1>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {data.map((item) => {
                    return (
                        <Link href={`/detail/${item.id}`} className="group">
                            <Image
                                width={300}
                                height={300}
                                crossOrigin="anonymous"
                                src={encodeURIComponent(item.image.trimEnd())}
                                alt=""
                            />
                            <h3 className="mt-4 text-sm text-gray-700">
                                {item.name}
                            </h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">
                                ${item.price}
                            </p>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Home;

// cách làm sai: vì script gọi api lấy data thực hiện tại client, ko hỗ trợ seo được
/*
export default function Home() {
    // call api dùng hook như react phải có use client
    const [arrProduct, setArrProduct] = useState([]);

    const getAllProduct = async () => {
        const res = await fetch("/api/product");
        const data = await res.json();
        console.log("data: ", data);
        setArrProduct(data.content);
    };

    useEffect(() => {
        getAllProduct();
    }, []);

    return (
        <div>
            <h1 className="text-center text-4xl text-red-500">Shoes shop</h1>

            {arrProduct.map((prod) => {
                return <div key={prod.id}>{prod.name}</div>;
            })}
        </div>
    );
}
*/

// demo show image phải setting domain cho phép truy cập
/*
export default function Home() {
    return (
        
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
            <i className="fab fa-500px"></i>

            <Image
                src="https://apistore.cybersoft.edu.vn/images/vans-black-black.png"
                width={300}
                height={300}
                style={{ width: "auto" }}
                quality={75}
                crossOrigin="anonymous"
                alt=""
            />

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                tempore repellat, corporis sed laborum eaque laudantium dolores
                explicabo ipsam cum iusto accusamus doloremque non
                necessitatibus magnam. Temporibus vitae porro quae.
            </p>
        </div>
    );
}
*/
