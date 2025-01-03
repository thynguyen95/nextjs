import { getProductByIdAction } from "@/app/actions/services/productAPI";
import Image from "next/image";
import React from "react";

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
