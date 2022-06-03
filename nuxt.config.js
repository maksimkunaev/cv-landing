import path from "path";
import fs from "fs";

const serverConfig =
  process.env.NODE_ENV !== "production"
    ? {
        // https: {
        //   key: fs.readFileSync(path.resolve(__dirname,  "./ssl/example.com+5-key.pem")),
        //   cert: fs.readFileSync(path.resolve(__dirname, "./ssl/example.com+5.pem"))
        // }
      }
    : {};

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  target: "static",
  env: {
    baseUrl: process.env.BASE_URL,
    firebase: process.env.firebase,
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Frontend Sandbox",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: [
    "@/assets/css/fonts.styl",
    "@/assets/css/page.styl",
    "@/assets/css/reset.css",
    "@/assets/css/main.styl",
    "@/assets/css/variables.styl",
  ],

  components: true,
  buildModules: [],
  modules: [],
  extend(cofig) {},
  server: {
    ...serverConfig,
  },
};
