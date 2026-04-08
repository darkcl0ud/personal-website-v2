import Header from "../ui/Header";
import Section from "../ui/Section";
import { listArticles } from "../http/articles";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Button from "../ui/Button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import TechnicalLog from "./TechnicalLog";
import { useSelector, useDispatch } from "react-redux";
import { articlesActions } from "../store/articles";
import { type RootState } from "../store/index";

export default function TechnicalLogsHomePreview() {
    const navigate = useNavigate();
    const homeArticles = useSelector((state: RootState) => state.articles.home_articles);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchArticles = async () => {
            const response = await listArticles(null, 2);
            dispatch(articlesActions.setHomeArticles({ home_articles: response.articles }));
        };
        if (homeArticles.length === 0) {
            fetchArticles();
        }
    }, []);

    return <Section>
        <Header number="02" title="Technical Logs" />
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,32rem),1fr))] justify-center gap-4">
            {homeArticles.map((article) => (
                <TechnicalLog key={article.id} article={article} />
            ))}
        </ul>
        <span className="flex justify-center mt-8">
        <Button onClick={() => navigate("/articles")} variant="outline"><span className="flex items-center gap-2">VIEW_MORE <ArrowRightIcon className="w-4 h-4" /></span></Button>
        </span>
    </Section>
}