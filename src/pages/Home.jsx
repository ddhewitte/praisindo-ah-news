import { useEffect, useState } from "react";
import { callArticles } from "../services/call";
import ArticleSection from "../components/ArticleSection";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Home() {

  const [articles, setArticles] = useState([]);
  const API_SECTION = 'home';

  useEffect(() => {
    callArticles(API_SECTION).then(setArticles);
  }, []);

  return (
    <>
      <header className="px-4 py-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            The best | <small className="text-base md:text-xl font-normal text-gray-600">news for you</small>
          </h1>
        </div>
      </header>
  

      <Navbar />

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

      <Footer />
    </>
    
  )
}