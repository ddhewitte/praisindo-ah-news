import { useEffect, useState } from "react";
import { callArticles } from "../services/call";
import ArticleSection from "../components/ArticleSection";

export default function Home() {
  return (
    <>
      <header>
        <div>
          <h1>Halaman Articles dan Berita </h1>
        </div>
      </header>

      <nav className="flex flex-wrap items-center justify-between p-5 bg-blue-200">
        Logo Here
        <div className="flex md:hidden">
          <button id="hamburger">
            <img className="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" />
            <img className="toggle hidden" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="40" height="40" />
          </button>
        </div>
        <div className="toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none">
          <a href="#" className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Home</a>
          <a href="#" className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Products</a>
          <a href="#" className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Pricing</a>
          <a href="#" className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Contact</a>
        </div>
        <a href="#" className="toggle hidden md:flex w-full md:w-auto px-4 py-2 text-right bg-blue-900 hover:bg-blue-500 text-white md:rounded">Create Account</a>
      </nav>  

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