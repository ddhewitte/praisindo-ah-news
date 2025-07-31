import { useEffect, useState } from "react";
import { callArticles } from "../services/call";
import ArticleSection from "../components/ArticleSection";

export default function Home() {
  return (
    <>
      <div>
        <h1>Halaman Articles dan Berita </h1>
      </div>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
        <div className="border-b mb-5 flex justify-between text-sm">
          <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
            <a href="#" className="font-semibold inline-block">
              Articles From NY Times
            </a>
          </div>
          <a href="#">See All</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="flex flex-col justify-between border-b pb-5">
              <a href="#" className="text-gray-900 font-medium hover:text-indigo-600 text-left">
                {index % 2 === 0
                  ? "Lorem ipsum dolor sir amet"
                  : "Lorem ipsum dolor sir amet achtung"}
              </a>
              <div className="flex items-start justify-between mt-3">
                <div className="text-sm w-2/3 text-left">
                  <p className="text-gray-700 text-left">
                    Lorem ipsum dolor sir amet amet jabang bayi with the lorem lorem...
                  </p>
                  <p className="text-gray-600 text-xs">Aug 18</p>
                </div>
                <a href="#" className="inline-block ml-2">
                  <div
                    className="w-20 h-20 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${
                        index % 2 === 0
                          ? "https://placehold.co/400"
                          : "https://placehold.co/400"
                      })`,
                    }}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
    
  )
}