import Image from "next/image";

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
