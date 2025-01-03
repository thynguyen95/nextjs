import { getProductByIdAction } from "@/app/actions/services/productAPI";
import Image from "next/image";
import React from "react";

export const metadata = async ({ params }) => {
    const product = await getProductByIdAction(params.id);

    return {
        title: product.name, // Tiêu đề trang sử dụng tên sản phẩm
        description: product.description, // Mô tả sản phẩm
        openGraph: {
            title: product.name,
            description: product.description,
            images: [
                {
                    url: product.image, // Hình ảnh sản phẩm
                    width: 500,
                    height: 500,
                },
            ],
            url: `https://yourwebsite.com/detail/${params.id}`, // URL của sản phẩm
        },
    };
};

const Detail = async (props) => {
    // props param của server cpn
    const { id } = await props.params;
    console.log("param id: ", id);

    const product = await getProductByIdAction(id);
    console.log("product: ", product);

    return (
        <div className="container mx-auto">
            <div className="flex gap-4">
                <div className="w-2/5">
                    <Image
                        width={500}
                        height={500}
                        crossOrigin="anonymous"
                        src={product.image}
                        alt=""
                    />
                </div>
                <div className="w-3/5">
                    <h2>{product.name}</h2>
                </div>
            </div>
        </div>
    );
};

export default Detail;
