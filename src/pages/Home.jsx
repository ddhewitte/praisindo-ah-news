import { useEffect, useState } from "react";
import { callArticles } from "../services/call";
import ArticleSection from "../components/ArticleSection";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";

export default function Home() {

  const [articles, setArticles] = useState([]);
  const [querySearch, setQuerySearch] = useState("");
  const API_SECTION = 'home';

  useEffect(() => {
    callArticles(API_SECTION).then(setArticles);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Oke')
  };

  return (
    <>
      <Header />
      <Navbar />
      <div>
        <form onSubmit={handleSubmit} className="mt-6">
              <input
                  type="text"
                  value={querySearch}
                  onChange={(e) => setQuerySearch(e.target.value)}
                  className="border p-2 rounded w-64 mr-2 bg-gray-200"
                  placeholder="Title ..."
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded">
                  Search Article
              </button>
        </form>
      </div>

      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:py-8 md:px-16 relative">
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