import { useEffect, useState } from "react";
import { callArticles } from "../services/call";
import ArticleSection from "../components/ArticleSection";

export default function Home(){
    return(
        <div>
            <h1>Halaman Utama</h1>
            <ArticleSection></ArticleSection>
        </div>
        
    )
}