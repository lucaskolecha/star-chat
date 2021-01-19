import React from 'react';
import Head from 'next/head';

interface Props {
  title?: string;
  description?: string;
  image?: string;
  siteName?: string;
  children?: any;
}

const Page: React.FC<Props> = ({ title, description, image, siteName, children }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="315" />
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={siteName} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:title" content={title} />
        <link
          href="https://fonts.googleapis.com/css2?family=Catamaran:wght@200;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="page-container flex min-h-screen flex-col bg-page">{children}</div>
    </>
  );
};

export default Page;
