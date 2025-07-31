export default function ArticleSection({ article }){
    const thumbnail = article.multimedia?.[0]?.url;

    return(
            <div className="flex flex-col justify-between border-b pb-5">
              <a href="#" className="text-gray-900 font-medium hover:text-indigo-600 text-left">
                { article.title }
              </a>
              <div className="flex items-start justify-between mt-3">
                <div className="text-sm w-2/3 text-left">
                  <p className="text-gray-700 text-left">
                    {article.abstract}
                  </p>
                  <p className="text-gray-600 text-xs">Aug 18</p>
                </div>
                 {thumbnail && (
          <a href={article.url} target="_blank" rel="noopener noreferrer" className="inline-block ml-2">
            <div
              className="w-20 h-20 bg-cover bg-center rounded"
              style={{
                backgroundImage: `url(${thumbnail})`,
              }}
            />
          </a>
        )}
              </div>
            </div>
    )
}