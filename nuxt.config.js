import headerTags from "./constants/meta-tags";

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
  router: {
    base: "/cv-landing/",
  },
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
    ...headerTags,
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
