"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const Header = () => {

    const pathname = usePathname();
    const router = useRouter();

    return(
        <nav className="bg-black-800 py-3 px-5 shadow-lg fixed w-full top-0 left-0 z-10">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-3">
                    <Image
                        src="/growth.png"
                        alt="Eco Market Logo"
                        width={40}
                        height={40}
                        className="inline-block"
                    />
                    <span className="text-white text-lg font-semibold">
                        MyStockSite
                    </span>
                    <div className="hidden md:flex space-x-4">
                        <Link
                            href="/"
                            className={`${
                            pathname === "/"
                                ? "text-white hover:text-black background-white font-bold"
                                : "text-white hover:text-black background-white"
                            }`}
                        >
                            Home
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}