import type { LoaderFunctionArgs } from "react-router";

export type ArticleListData = {
    id: string;
    title: string;
    summary: string;
    tags: string[];
}

export type ListArticlesResponse = {
    articles: ArticleListData[];
    cursor: string;
}

export async function listArticles(cursor: string | null, max: number | null): Promise<ListArticlesResponse> {

    if (max && max > 100) {
        throw new Error('Max must be less than 100');
    }

    const queryParams = new URLSearchParams();
    if (cursor) {
        queryParams.set('cursor', cursor);
    }
    if (max) {
        queryParams.set('max', max.toString());
    }

    const response = await fetch(`/media/articles?${queryParams.toString()}`);
    if (!response.ok) throw new Error('Network response was not ok');
    const data: ListArticlesResponse = await response.json();
    return data;
}

export type ArticleHeaders = {
    id: string,
    title: string,
    summary: string,
    tags: string[],
}

type GetArticleResponse = {
    content: string,
    headers: ArticleHeaders,
}

export async function getArticle(id: string): Promise<GetArticleResponse> {
    const response = await fetch(`/media/articles/${id}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const content: string = await response.text();
    const headers: ArticleHeaders = {
        id: id,
        title: response.headers.get('ldh-article-title') ?? '',
        summary: response.headers.get('ldh-article-summary') ?? '',
        tags: (response.headers.get('ldh-article-tags') ?? '').split(','),
    };
    return { content, headers };
}

export async function articleLoader({ params }: LoaderFunctionArgs) {
    const id = params.id;
    if (!id) {
        throw new Response("Article not found", { status: 404 });
    }
    try {
        const { content, headers } = await getArticle(id);
        return { content: convertObsidianImages(content, `/media/articles/${id}/`), headers };
    } catch (error) {
        throw new Response("Article not found", { status: 404 });
    }
}

function convertObsidianImages(markdown: string, basePath: string = 'media/articles/'): string {
    const obsidianImageRegex = /!\[\[(.+?\.(?:png|jpg|jpeg|gif|svg|webp))\]\]/g;
    
    return markdown.replace(obsidianImageRegex, (_, filename) => {
      return `![${filename}](${basePath}${filename})`;
    });
  }