export default function Head() {
  const title = "WhiteAsh BKK | Premium Cannabis Flower in Nonthaburi & Ekkamai";
  const description =
    "WhiteAsh BKK delivers top-shelf cannabis flower, wholesale and retail, with delivery throughout Bangkok. Visit our Nonthaburi flagship or the new Ekkamai store.";
  const url = "https://whiteashbkk.com";
  const image = "https://whiteashbkk.com/og-image.jpg";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="WhiteAsh BKK, cannabis flower, weed Thailand, Ekkamai dispensary, Nonthaburi cannabis" />
      <meta name="robots" content="index,follow" />

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

      <link rel="canonical" href={url} />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}

