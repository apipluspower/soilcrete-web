import adapter from '@sveltejs/adapter-static';
 import preprocess from 'svelte-preprocess';

 const dev = "production" === "development";
 /** @type {import('@sveltejs/kit').Config} */
 const config = {
 	// Consult https://github.com/sveltejs/svelte-preprocess
 	// for more information about preprocessors
   preprocess: [
    preprocess({
      defaults: {
        style: 'postcss'
      },
      postcss: true
    })
  ],
 	kit: {
 		adapter: adapter({
      pages: "docs",
      assets: "docs"
    }),
    paths: {
      base: dev ? "" : "/soilcrete-web",
    },
 		// hydrate the <div id="svelte"> element in src/app.html
 	}
 };

 export default config;