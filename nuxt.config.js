require('dotenv').config();
import headerTags from "./constants/meta-tags";
import path from 'path';

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
  ssr: false,
  router: {
    base: "/",
    trailingSlash: true,
  },
  runtimeConfig: {
    public: {},
  },
  head: {
    ...headerTags,
    script: [
      // {
      //   defer: true,
      //   src: "https://static.cloudflareinsights.com/beacon.min.js",
      //   "data-cf-beacon": '{"token": "42f5b12408294321acab228aa6dc4b12"}'
      // }
    ]
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
  extend(config) { },
  server: {
    ...serverConfig,
  },
};
