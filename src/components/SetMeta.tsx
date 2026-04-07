export default function SetMeta({ title, description, keywords, image, type }: { title: string, description: string, keywords: string, image: string, type: string }) {
    return (
        <>
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:type" content={type} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:image" content={image} />
        </>
    )
}