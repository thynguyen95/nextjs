import next from "next";

// server action là các hàm xử lý trên server (nơi chứa source nextjs)
export const getAllProductAction = async () => {
    const res = await fetch("https://apistore.cybersoft.edu.vn/api/Product", {
        next: {
            revalidate: 10,
        },
    });

    const data = await res.json();
    console.log("data: ", data);

    return data.content;
};

export const getProductByIdAction = async (id) => {
    const res = await fetch(
        `https://apistore.cybersoft.edu.vn/api/Product/getid?id=${id}`,
        {
            next: {
                revalidate: 10,
            },
        }
    );

    const data = await res.json();
    return data.content;
};

export const getProductByKeywordAction = async (keyword) => {
    const res = await fetch(
        `https://apistore.cybersoft.edu.vn/api/Product?keyword=${keyword}`,
        {
            next: {
                revalidate: 10,
            },
        }
    );

    const data = await res.json();
    return data.content;
};
