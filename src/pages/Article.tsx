import Markdown, { type Components } from 'react-markdown'
import { useParams } from 'react-router';
import { getArticle, type ArticleHeaders } from '../http/articles';
import { useEffect, useState } from 'react';
import Section from '../ui/Section';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import SetMeta from '../components/SetMeta';

const components: Components = {
  h1: ({ children }) => {
    return <h1 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-headline text-white tracking-wider leading-none md:my-8 my-4">{children}</h1>;
  },
  h2: ({ children }) => {
    return <h2 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-headline text-white tracking-wider leading-none md:my-8 my-4">{children}</h2>;
  },
  h3: ({ children }) => {
    return <h3 className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-headline text-white tracking-wider leading-none md:my-8 my-4">{children}</h3>;
  },
  p: ({ children }) => {
    return <p className="text-white font-extralight tracking-widest text-sm my-4">{children}</p>;
  },
  ul: ({ children }) => {
    return <ul className="list-disc list-inside text-white font-extralight tracking-widest text-sm my-4">{children}</ul>;
  },
  ol: ({ children }) => {
    return <ol className="list-decimal list-inside text-white font-extralight tracking-widest text-sm my-4">{children}</ol>;
  },
  strong: ({ children }) => {
    return <strong className="text-primary-100">{children}</strong>;
  },
  pre: ({ children }) => {
    return <pre className="grid grid-cols-[1fr]">{children}</pre>;
  },
  code: ({ children, className }) => {
    const language = className?.replace('language-', '');

    if (!language) {
      return <code className="bg-neutral-700 px-1 py-0.5 rounded text-white font-mono text-sm">{children}</code>;
    }

    return (
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        wrapLongLines={false}
        customStyle={{
          overflowX: 'scroll',
          whiteSpace: 'pre',
          borderRadius: '0.5rem',
          fontSize: '1rem',
          // maxWidth: '100px',
        }}
      >
        {children as string}
      </SyntaxHighlighter>
    );
  },
}

export default function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState<string>('');
  const [headers, setHeaders] = useState<ArticleHeaders>({
    id: '',
    title: '',
    summary: '',
    tags: [],
  });
  const date = new Date(parseInt(headers.id + "000"));
  const formattedDate = date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });


  useEffect(() => {
    const fetchArticle = async () => {
      const { content, headers } = await getArticle(id as string);
      setArticle(content);
      setHeaders(headers);
      console.log(headers);
    };
    fetchArticle();
  }, [id]);

  return <>
    <SetMeta title={headers.title} description={headers.summary} keywords={headers.tags.join(',')} image={`/media/articles/${id}/cover.png`} type="article" />
    <Section>
      <div className="flex flex-col justify-center items-center gap-4">
        <img src={`/media/articles/${id}/cover.png`} alt="Article Cover" className="h-auto max-h-64 2xl:max-h-96 object-cover w-full" />
        <h1 className="text-white tracking-wider text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-headline font-bold text-center">{headers.title}</h1>
        <p className="text-white font-extralight tracking-widest text-center">{headers.summary}</p>
        <p className="text-tertiary-100 font-extralight tracking-widest text-xs text-center">{formattedDate}</p>
        <ul className="flex flex-row flex-wrap gap-2 items-center justify-center">
          {headers.tags.map((tag) => (
            <li key={tag} className="text-tertiary-100 font-extralight tracking-widest text-xs">/ {tag.toUpperCase()}</li>
          ))}
        </ul>
      </div>
    </Section>
    <Section>
      <div className="max-w-[1200px] mx-auto">
        <Markdown components={components}>{article}</Markdown>
      </div>
    </Section>
  </>;
}