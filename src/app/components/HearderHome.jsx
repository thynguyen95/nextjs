"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
} from "flowbite-react";
import { useRouter } from "next/navigation";

const HearderHome = () => {
    const [keyword, setKeyword] = useState("");
    const router = useRouter();

    return (
        <>
            <Navbar fluid rounded>
                <NavbarBrand as={Link} href="https://flowbite-react.com">
                    <img
                        src="./next.svg"
                        className="mr-3 h-6 sm:h-9"
                        alt="Flowbite React Logo"
                    />
                </NavbarBrand>
                <NavbarToggle />
                <NavbarCollapse>
                    <NavbarLink as={Link} href="/" active>
                        Home
                    </NavbarLink>
                    <NavbarLink as={Link} href="/about">
                        About
                    </NavbarLink>
                    <Link href="/login">login</Link>
                    <NavbarLink href="#">Pricing</NavbarLink>
                    <NavbarLink href="#">Contact</NavbarLink>
                </NavbarCollapse>
            </Navbar>

            <form
                className="w-full"
                onSubmit={(e) => {
                    e.preventDefault();
                    router.push(`/search?keyword=${keyword}`);
                }}
            >
                <input
                    onChange={(e) => {
                        setKeyword(e.target.value);
                    }}
                    type="text"
                    placeholder="Search..."
                    className="w-full outline-none bg-transparent text-gray-600 font-semibold text-[15px]"
                />
                <Link href={`/search?keyword=${keyword}`}>Search</Link>
            </form>
        </>
    );
};

export default HearderHome;
