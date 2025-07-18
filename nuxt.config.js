require('dotenv').config();
import headerTags from "./constants/meta-tags";
import path from 'path'

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
  // target: "static",
  router: {
     base: "/",
    trailingSlash: true,
  },
  runtimeConfig: {
    public: {
      // baseUrl: process.env.BASE_URL,
      // firebase: process.env.firebase,
      // apiKey: process.env.apiKey,
      // authDomain: process.env.authDomain,
      // projectId: process.env.projectId,
      // storageBucket: process.env.storageBucket,
      // messagingSenderId: process.env.messagingSenderId,
      // appId: process.env.appId,
      // measurementId: process.env.measurementId,
    }
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    ...headerTags,
  },
  vite: {
    css: {
      preprocessorOptions: {
        stylus: {
          imports: [path.resolve(__dirname, 'assets/css/stylus-variables.styl')]
        }
      }
    }
  },
  css: [
    "@/assets/css/fonts.styl",
    "@/assets/css/reset.css",
    "@/assets/css/main.styl",
    "@/assets/css/css-variables.styl",
  ],

  components: true,
  modules: [],
  extend(cofig) {},
  server: {
    ...serverConfig,
  },
};
