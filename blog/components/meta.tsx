import Head from 'next/head'
import { siteMeta } from 'lib/constants'
const { siteTitle, siteDesc, siteUrl, siteLang, siteLocale, siteType, siteIcon } = siteMeta;
import { useRouter } from 'next/router'
import siteImg from 'images/ogp.jpeg'

type MetaProps = {
  pageTitle: string,
  pageDesc: string,
  pageImg: string,
  pageImgW: number,
  pageImgH: number,
}

export default function Meta(props: MetaProps) {
  const { pageTitle, pageDesc, pageImg, pageImgW, pageImgH } = props;

  const title: string = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;
  const description: string = pageDesc ? `${pageDesc} | ${siteDesc}` : siteDesc;

  const router = useRouter();
  const url: string = `${siteUrl}${router.asPath}`;

  const img: string = pageImg || siteImg.src;
  const imgW: number = pageImgW || siteImg.width;
  const imgH: number | number = pageImgH || siteImg.height;
  const imgUrl: string = img.startsWith('https') ? img : `${siteUrl}${img}`;

  return (
    <Head>
      <title>{title}</title>
      <meta property='og:title' content={title} />
      <meta name='description' content={description} />
      <meta property='og:description' content={description} />
      <link rel="canonical" href={url} />
      <meta property='og:url' content={url} />
      <meta property='og:site_name' content={siteTitle} />
      <meta property='og:type' content={siteType} />
      <meta property='og:locale' content={siteLocale} />
      <link rel="icon" href={siteIcon} />
      <link rel="apple-touch-icon" href={siteIcon} />
      <meta property='og:image' content={imgUrl} />
      <meta property='og:image:width' content={imgW} />
      <meta property='og:image:height' content={imgH} />
      <meta name='twitter:card' content='summary_large_image' />
    </Head>
  )
}