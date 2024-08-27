"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { TrendingUpDown } from "lucide-react";

const Header = () => {

    const pathname = usePathname();
    const router = useRouter();

    return(
        <nav className="bg-blue-800 py-3 px-5 shadow-lg fixed w-full top-0 left-0 z-10">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-3">
                    <TrendingUpDown color="white" size={48} />;
                    <span className="text-white text-lg font-semibold">
                        MyStockSite
                    </span>
                    <div className="hidden md:flex space-x-4">
                        <Link
                            href="/"
                            className={`${
                            pathname === "/"
                                ? "text-white hover:bg-blue-800 background-white font-bold"
                                : "text-white hover:bg-blue-800 background-white"
                            }`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/"
                            className={`${
                            pathname === "/"
                                ? "text-white hover:text-black background-white font-bold"
                                : "text-white hover:text-black background-white"
                            }`}
                        >
                            Stock
                        </Link>
                        <Link
                            href="/"
                            className={`${
                            pathname === "/"
                                ? "text-white hover:bg-blue-800 background-white font-bold"
                                : "text-white hover:bg-blue-800 background-white"
                            }`}
                        >
                            News
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;