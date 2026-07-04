import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { render } from "../dist-ssr/entry-server.js";

const distDir = resolve("dist");
const templatePath = resolve(distDir, "index.html");
const template = await readFile(templatePath, "utf8");

const routes = [
  {
    path: "/privacy-policy.html",
    file: "privacy-policy.html",
    lang: "en",
    title: "Privacy Policy | IOT_MobileApp",
    description: "Privacy Policy for IOT_MobileApp / OpenLinkIoT Mobile App.",
  },
  {
    path: "/privacy-policy-th.html",
    file: "privacy-policy-th.html",
    lang: "th",
    title: "นโยบายความเป็นส่วนตัว | IOT_MobileApp",
    description: "นโยบายความเป็นส่วนตัวสำหรับ IOT_MobileApp / OpenLinkIoT Mobile App",
  },
];

for (const route of routes) {
  const markup = render(route.path);
  const html = template
    .replace('<html lang="en">', `<html lang="${route.lang}">`)
    .replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`)
    .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${route.description}" />`)
    .replace('<div id="root"></div>', `<div id="root">${markup}</div>`);

  const outputPath = resolve(distDir, route.file);
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html);
}

await writeFile(
  templatePath,
  `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="refresh" content="0; url=privacy-policy.html" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>IOT_MobileApp Privacy Policy</title>
    <link rel="canonical" href="privacy-policy.html" />
  </head>
  <body>
    <p>
      Redirecting to
      <a href="privacy-policy.html">IOT_MobileApp Privacy Policy</a>.
    </p>
  </body>
</html>
`,
);
