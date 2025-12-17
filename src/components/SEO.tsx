import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = "N88E Build Pvt. Ltd. | Premium Galvalume Roofing Sheets Assam",
  description = "Superior ASA uPVC roofing sheets for extreme climates. 30+ year lifespan, 5-7°C cooler, zero maintenance. Best alternative to GI sheets.",
  keywords = "roofing sheets, ASA uPVC roofing, roofing sheets Assam, GI sheet alternative, Northeast India roofing, N88E Build, GUTDACH",
  image = "https://n88ebuild.com/og-image.jpg",
  url = "https://n88ebuild.com",
  type = "website"
}) => {
  const fullTitle = title.includes('N88E Build') ? title : `${title} | N88E Build`;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content="N88E Build Pvt. Ltd." />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
