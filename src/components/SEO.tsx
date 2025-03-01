import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Pat Portfolio - minimalist portfolio",
  description = "Sleek and lightweight minimalist portfolio template built with React. Perfect for developers and designers who want a clean, modern, and minimalistic way to showcase their work",
  keywords = "React, portfolio, minimalist portfolio, Pat, Tailwind portfolio, Shadcn portfolio",
  url = "https://pat-portfolio.netlify.app",
  image = "https://pat-portfolio.netlify.app/pbg1.png",
  author = "Patrick Manalabe",
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Schema.org Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: url,
          name: title,
          author: {
            "@type": "Person",
            name: author,
          },
          description: description,
          image: image,
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
