import { useEffect, useState } from "react";
import { callArticles } from "../services/call";
import ArticleSection from "../components/ArticleSection";

export default function Home() {

  const [articles, setArticles] = useState([]);
  const API_SECTION = 'home';

  useEffect(() => {
    callArticles(API_SECTION).then(setArticles);
  }, []);

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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
         {articles.map((a) => (
            <ArticleSection key={a.url} article={a} />
          ))}
          </div>
      </div>
    </>
    
  )
}