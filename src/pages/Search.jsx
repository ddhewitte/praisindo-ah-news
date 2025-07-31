import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchArticles } from "../services/call";
import Navbar from "./Navbar";
import Header from "./Header";

export default function Search() {


    return (
        <>
        <Header />
        <Navbar />

        <div className="mt-6"><h3>Hasil pencarian : </h3></div>

        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:py-8 md:px-16 relative">
            <div class="flex flex-col justify-between border-b pb-5">
                <a href="https://www.nytimes.com/..." class="text-gray-900 font-medium hover:text-indigo-600 text-left">
                    Title Dolor sir Amter
                </a>
                <div class="flex items-start justify-between mt-3">
                    <div class="text-sm w-2/3 text-left">
                        <p class="text-gray-600 text-xs mt-2 font-bold">2025-07-31</p>
                        <p class="text-gray-700 text-left">
                            DEsc lorem ipsum dolor sir amet amet jabang bayi
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
