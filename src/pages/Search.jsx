import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchArticles } from "../services/call";
import Navbar from "./Navbar";
import Header from "./Header";

export default function Search() {

    const [searchParams] = useSearchParams();
    const [queryResult, setQueryResults] = useState([]);

    const query = searchParams.get("q");

    console.log(query);

    useEffect(() => {
        if (query) {
        searchArticles(query).then(setQueryResults)
        }

    console.log(queryResult)
        
    }, [query]);

    return (
        <>
        <Header />
        <Navbar />

        <div className="mt-6"><h3>Hasil pencarian : </h3></div>

        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:py-8 md:px-16 relative">
            <div className="flex flex-col justify-between border-b pb-5">
                <a href="https://www.nytimes.com/..." className="text-gray-900 font-medium hover:text-indigo-600 text-left">
                    Title Dolor sir Amter
                </a>
                <div className="flex items-start justify-between mt-3">
                    <div className="text-sm w-2/3 text-left">
                        <p className="text-gray-600 text-xs mt-2 font-bold">2025-07-31</p>
                        <p className="text-gray-700 text-left">
                            DEsc lorem ipsum dolor sir amet amet jabang bayi
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
