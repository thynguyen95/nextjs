import React from "react";
import Link from "next/link";
import {
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
} from "flowbite-react";

const HearderHome = () => {
    return (
        <>
            <Navbar fluid rounded>
                <NavbarBrand as={Link} href="https://flowbite-react.com">
                    <img
                        src="/favicon.svg"
                        className="mr-3 h-6 sm:h-9"
                        alt="Flowbite React Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Flowbite React
                    </span>
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
        </>
    );
};

export default HearderHome;
