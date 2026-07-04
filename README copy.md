# IOT_MobileApp Web Pages

This folder contains static web pages for app store publishing.

- `privacy-policy.html` is the bilingual Privacy Policy.
- `index.html` redirects to `privacy-policy.html` for simple static hosting.

For Google Play, host this folder on a public HTTPS URL, then use the public
Privacy Policy URL in Play Console.

This repository includes `.github/workflows/deploy-web-pages.yml`, which
publishes the `web` folder to GitHub Pages after a push to `master`, `main`, or
`dev`.

Expected GitHub Pages URL after Pages is enabled and the workflow succeeds:

```text
https://nuttadev.github.io/IOT_MobileApp/privacy-policy.html
```

If GitHub Pages is not enabled yet, enable it in the repository settings with
source set to "GitHub Actions", then run the "Deploy web pages" workflow.

Note: the repository is currently private. Public access to GitHub Pages for a
private repository depends on the repository/account plan and Pages settings. If
the Pages URL is not publicly accessible, use another static host such as
Netlify or Vercel, or make the Pages source repository public.
