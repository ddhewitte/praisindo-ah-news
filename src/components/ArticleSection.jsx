export default function ArticleSection({ article }) {
    const thumbnail = article.multimedia?.[0]?.url;

    return (
        <div className="flex flex-col justify-between border-b pb-5">
            <a href={article.url} className="text-gray-900 font-medium hover:text-indigo-600 text-left">
                {article.title}
            </a>
            <div className="flex items-start justify-between mt-3">
                <div className="text-sm w-2/3 text-left">
                    <p className="text-gray-600 text-xs mt-2">Aug 18</p>
                    <p className="text-gray-700 text-left">
                        {article.abstract}
                    </p>

                </div>
                {thumbnail && (
                    <a href="#" className="inline-block ml-2">
                        <img
                            src={thumbnail}
                            alt={article.title}
                            className="w-20 h-20 object-cover rounded"
                        />
                    </a>

                )}
            </div>
        </div>
    )
}