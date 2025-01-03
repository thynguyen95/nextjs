// file backend
import { NextResponse } from "next/server";

export async function GET(req) {
    // console.log("req: ", req);

    // const url = req.url;
    // console.log("url: ", url);

    // có được url, sử dụng URLSearchParams để lấy param
    const url = new URL(req.url);
    const params = new URLSearchParams(url.search);
    const keyword = params.get("keyword");
    console.log("keyword: ", keyword);

    // chạy demo tĩnh trước
    // kết nối db - connectionstring ...
    // const res = [
    //     { id: 1, name: "Nam" },
    //     { id: 2, name: "Thịnh" },
    // ];
    // return NextResponse.json(res, { status: 200 });

    // từ backend nextjs => kết nối đến backend của apistore.cybersoft
    let uri = "https://apistore.cybersoft.edu.vn/api/Product";
    if (keyword) {
        uri = `https://apistore.cybersoft.edu.vn/api/Product?keyword=${keyword}`;
    }
    const res = await fetch(uri);

    // khi call api kiểm tra log này ở terminal do đang call api ở server
    // console.log("res: ", res);

    if (!res.ok) {
        return new Error("fail to fetch data");
    }

    const data = await res.json();
    return NextResponse.json(data, { status: 200 });
}

export async function POST() {}

export async function PUT() {}

export async function DELETE() {}
