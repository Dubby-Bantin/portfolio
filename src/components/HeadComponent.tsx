import seoConfig from "@/app/lib/seoConfig";

const HeadComponent: React.FC = () => (
  <>
    <title>{seoConfig.title}</title>
    <meta name="description" content={seoConfig.description} />
    <meta name="keywords" content={seoConfig.keywords} />
    <meta property="og:type" content={seoConfig.openGraph.type} />
    <meta property="og:locale" content={seoConfig.openGraph.locale} />
    <meta property="og:url" content={seoConfig.openGraph.url} />
    <meta property="og:title" content={seoConfig.openGraph.title} />
    <meta property="og:description" content={seoConfig.openGraph.description} />
    <meta property="og:image" content={seoConfig.openGraph.images[0].url} />
    <meta
      property="og:image:width"
      content={String(seoConfig.openGraph.images[0].width)}
    />
    <meta
      property="og:image:height"
      content={String(seoConfig.openGraph.images[0].height)}
    />
    <meta property="og:image:alt" content={seoConfig.openGraph.images[0].alt} />
  </>
);

export default HeadComponent;
