import Markdown, { type Components } from 'react-markdown'
import { useLoaderData, useParams } from 'react-router';
import Section from '../ui/Section';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import SetMeta from '../components/SetMeta';
import { lazy, Suspense } from 'react';
const SyntaxHighlighter = lazy(() => import('react-syntax-highlighter').then(module => ({ default: module.Prism })));
import { articleLoader } from '../http/articles';
import getDate from '../data/getDate';
import { LightBulbIcon } from '@heroicons/react/24/outline';
import defaultCover from '../assets/defaultCover.jpeg';

const components: Components = {
  h1: ({ children }) => {
    return <h1 className="text-3xl md:text-4xl xl:text-5xl font-headline text-white tracking-wider leading-none md:my-8 my-4">{children}</h1>;
  },
  h2: ({ children }) => {
    return <h2 className="text-2xl md:text-3xl xl:text-4xl font-headline text-white tracking-wider leading-none md:my-8 my-4">{children}</h2>;
  },
  h3: ({ children }) => {
    return <h3 className="text-xl md:text-2xl xl:text-3xl font-headline text-white tracking-wider leading-none md:my-8 my-4">{children}</h3>;
  },
  h4: ({ children }) => {
    return <h4 className="text-lg md:text-xl xl:text-2xl font-headline text-white tracking-wider leading-none md:my-8 my-4">{children}</h4>;
  },
  p: ({ children }) => {
    return <p className="text-white font-extralight tracking-widest leading-7 my-4">{children}</p>;
  },
  ul: ({ children }) => {
    return <ul className="list-disc list-inside text-white font-extralight tracking-widest text-sm my-4">{children}</ul>;
  },
  ol: ({ children }) => {
    return <ol className="list-decimal list-inside text-white font-extralight tracking-widest text-sm my-4">{children}</ol>;
  },
  strong: ({ children }) => {
    return <strong className="font-extrabold">{children}</strong>;
  },
  pre: ({ children }) => {
    return <pre className="grid grid-cols-[1fr] text-xs md:text-sm">{children}</pre>;
  },
  img: ({ src, alt }) => {
    return <img fetchPriority="low" loading="lazy" src={src} alt={alt} className="w-full h-auto md:my-8 my-4" />;
  },
  a: ({ children, href }) => {
    return <a href={href} className="text-primary-100 font-bold">{children}</a>;
  },
  blockquote: ({ children }) => {
    return <blockquote className="text-white font-extralight text-sm my-4 bg-primary-100/10 p-4 my-8 rounded-md flex flex-col items-start">
      <span className="flex gap-2 text-primary-100 animate-pulse items-center"><LightBulbIcon className="md:w-6 md:h-6 w-6 h-6" /> <p className="font-extrabold text-base tracking-widest font-label">NOTE</p></span>
      <span className="md:pl-4 pl-2">{children}</span>
    </blockquote>;
  },
  code: ({ children, className }) => {
    const language = className?.replace('language-', '');

    if (!language) {
      return <code className="bg-neutral-700 px-1 py-0.5 rounded text-white font-mono">{children}</code>;
    }

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          wrapLongLines={false}
          customStyle={{
            overflowX: 'scroll',
            whiteSpace: 'pre',
            borderRadius: '0.5rem',
          }}
        >
          {children as string}
        </SyntaxHighlighter>
      </Suspense>
    );
  },
}

export default function Article() {
  const { id } = useParams();
  const { content, headers } = useLoaderData<typeof articleLoader>();
  const date = getDate(headers.id);
  const formattedDate = date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });


  return <main>
    <SetMeta title={headers.title} description={headers.summary} keywords={headers.tags.join(',')} image={`/media/articles/${id}/cover.jpeg`} type="article" />
    <Section>
      <div className="flex flex-col justify-center items-center gap-4">
        <img 
          fetchPriority="high"
          src={`/media/articles/${id}/cover.jpeg`}
          alt="Article Cover"
          className="h-auto max-h-64 2xl:max-h-96 object-cover w-full"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = defaultCover;
        }}
        />
        <h1 className="text-white tracking-wider text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-headline font-bold text-center">{headers.title}</h1>
        <p className="text-white font-extralight tracking-widest text-center text-sm">{headers.summary}</p>
        <p className="text-tertiary-100 font-extralight tracking-widest text-sm text-center">{formattedDate}</p>
        <ul className="flex flex-row flex-wrap gap-2 items-center justify-center">
          {headers.tags.map((tag) => (
            <li key={tag} className="text-tertiary-100 font-extralight tracking-widest text-xs">/ {tag.toUpperCase()}</li>
          ))}
        </ul>
      </div>
    </Section>
    <Section>
      <article className="max-w-[680px] mx-auto border-t-[0.35px] border-tertiary-100/35 md:pt-8 pt-4">
        <Markdown components={components}>{content}</Markdown>
      </article>
    </Section>
  </main>;
}