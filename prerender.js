/* eslint-disable @typescript-eslint/no-var-requires */
// Pre-render the app into static HTML.
// run `yarn generate` and then `dist/static` can be served as a static site.

const fs = require("fs");
const path = require("path");

const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute("dist/static/index.html"), "utf-8");
const { render } = require("./dist/server/entry-server.js");

// determine routes to pre-render from src/pages
const routesToPrerender = ["/", "/about"];

(async () => {
  // pre-render each route...
  for (const url of routesToPrerender) {
    const [appHtml, appStyle] = await render(url);

    const html = template
      .replace(`<!--app-html-->`, appHtml)
      .replace(`<!--app-style-->`, appStyle);

    const filePath = `dist/static${url === "/" ? "/index" : url}.html`;
    fs.writeFileSync(toAbsolute(filePath), html);
    console.log("pre-rendered:", filePath);
  }
})();
