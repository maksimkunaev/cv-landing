const title = "Maksim Kunaev, Front End Engineer";
const image = "https://maksimkunaev.github.io/cv-landing/media/photo.png";
const url = "https://maksimkunaev.github.io/cv-landing/";
import { technologies, bioDescription } from "./cv";
const description = `${bioDescription.replace(
  /{technologies}/,
  technologies.join(", ")
)}`;

const meta = {
  title: title,
  htmlAttrs: {
    lang: "en",
  },
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { hid: "description", name: "description", content: description },
    { name: "format-detection", content: "telephone=no" },
    { name: "title", content: title },
    { property: "og:type", content: "website" },
    {
      property: "og:url",
      content: url,
    },
    { property: "og:title", content: title },
    {
      property: "og:description",
      content: description,
    },
    {
      property: "og:image",
      content: image,
    },

    { property: "twitter:card", content: "summary_large_image" },
    {
      property: "twitter:url",
      content: url,
    },
    {
      property: "twitter:title",
      content: title,
    },
    {
      property: "twitter:description",
      content: description,
    },
    {
      property: "twitter:image",
      content: image,
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "/cv-landing/favicon.svg",
    },
  ],
};

export default meta;
