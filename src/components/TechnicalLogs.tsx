import Section from "../ui/Section";
import TechnicalLog from "./TechnicalLog";
import { useState, useEffect } from "react";
import { listArticles, type ArticleListData } from "../http/articles";

export default function TechnicalLogs() {
    const [articles, setArticles] = useState<ArticleListData[]>([]);
    const [cursor, setCursor] = useState<string | null>(null);

    const fetchArticles = async () => {
        const response = await listArticles(cursor, 20);
        setArticles(response.articles);
        setCursor(response.cursor);
    };

    useEffect(() => {
        fetchArticles();
    }, []);

    return (
        <Section>
            <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,38rem),1fr))] justify-center gap-4">
                {articles.map((article) => (
                    <TechnicalLog key={article.id} article={article} />
                ))}
            </ul>
        </Section>
    )
}