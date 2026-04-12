import { type ArticleListData } from "../http/articles";
import defaultCover from "../assets/defaultCover.jpeg";
import { useNavigate } from "react-router";
import getDate from "../data/getDate";


export default function TechnicalLog({ article }: { article: ArticleListData }) {
    const navigate = useNavigate();
    const date = getDate(article.id);
    const formattedDate = date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

    return (
        <li key={article.id} className="grid grid-cols-1 gap-4 bg-neutral-500 min-h-64 md:grid-cols-[16rem_1fr]">
            <img
                fetchPriority="low"
                loading="lazy"
                src={`/media/articles/${article.id}/cover.jpeg`}
                alt="Article cover"
                className="w-full md:h-full object-cover"
                onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = defaultCover;
                }}
            />
            <div className="flex flex-col gap-8 md:gap-2 p-4 justify-between">
                <div className="flex flex-col gap-2">
                    <h3 className="text-xl md:text-2xl text-white font-headline tracking-wide">{article.title}</h3>
                    <p className="text-tertiary-100 font-extralight tracking-widest text-xs">{formattedDate}</p>
                    <p className="text-tertiary-100 font-extralight tracking-widest text-sm">{article.summary}</p>
                </div>
                <span className="flex flex-row flex-wrap gap-2 items-end">
                    <button className="text-primary-900 tracking-widest text-sm underline underline-offset-4 font-bold hover:cursor-pointer" onClick={() => navigate(`/articles/${article.id}`)}>VIEW_MANIFEST</button>
                    <ul className="flex flex-row flex-wrap md:gap-2 gap-1">
                        {article.tags.map((tag) => (
                            <li key={tag} className="text-tertiary-100 font-extralight tracking-widest text-xs">/ {tag.toUpperCase()}</li>
                        ))}
                    </ul>
                </span>
            </div>
        </li>
    )
}