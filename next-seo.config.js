/** @type {import('next-seo').DefaultSeoProps} */

const defaultSEOConfig = {
  title: "Denver Tech Social Club",
  titleTemplate: "%s | Denver Tech Social Club",
  defaultTitle: "Denver Tech Social Club",
  description:
    "Denver Tech Social Club is a digital & physical third place that encourages connections & friendships among the Denver tech community. Talk shop, talk hobbies, make sub-clubs (board games, anyone?), and more!",
  canonical: "https://denvertechsocial.club",
  openGraph: {
    url: "https://denvertechsocial.club",
    title: "Denver Tech Social Club",
    description:
      "Denver Tech Social Club is a digital & physical third place that encourages connections & friendships among the Denver tech community. Talk shop, talk hobbies, make sub-clubs (board games, anyone?), and more!",
    images: [
      {
        url: "DTSC-OGimg.png",
        alt: "Denver Tech Social Club",
      },
    ],
    site_name: "Denver Tech Social Club",
  },
  twitter: {
    handle: "@DenverTechSC",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
