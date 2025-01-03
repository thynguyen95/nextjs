import { getProductByKeywordAction } from "@/app/actions/services/productAPI";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Search = async ({ searchParams }) => {
    // Await searchParams and safely access 'keyword'
    const keyword = (await searchParams?.keyword) || "";
    console.log("keyword: ", keyword);

    const data = await getProductByKeywordAction(keyword);
    console.log("data: ", data);

    return (
        <div className="container mx-auto">
            <h1>Kết quả tìm kiếm: {data.length}</h1>
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {data.map((item) => {
                        return (
                            <Link href={`/detail/${item.id}`} className="group">
                                <Image
                                    width={300}
                                    height={300}
                                    crossOrigin="anonymous"
                                    src={item.image}
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
        </div>
    );
};

export default Search;
