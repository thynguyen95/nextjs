// "use client";
import Image from "next/image";
import { getAllProductAction } from "./actions/services/productAPI";
// import { useEffect, useState } from "react";

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

            {data.map((prod) => {
                return <div key={prod.id}>{prod.name}</div>;
            })}
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
