# Daniil Lysenko — Academic Website (v4)

Multi-page static site. The main quasar 4C 04.81 project has a detailed page with selected figures from `Balashev_QSO_Website_Visuals_2026-10-11.zip`. The original scientific cautions are preserved and AI-generated conceptual illustrations are not used.

## Pages

- `index.html` — homepage with quasar research and data visualization
- `quasar.html` — primary quasar project, observational results, and numerical model figures
- `research.html` — research record including GRB timing, neutron stars, metasurfaces
- `projects.html` — numerical projects
- `about.html` — biography and supplied photo
- `cv.html` — both supplied PDF CVs
- `contact.html` — public email and GitHub

## Features

- Site-wide light/dark toggle in navigation. Default follows system; explicit choice is saved in localStorage when available. All pages load with the choice before painting.
- Mobile menu and accessible keyboard focus styles.
- Old bookmarks such as `/#about` redirect to `/about.html` when JavaScript is enabled.
- Responsive scientific figures, clickable to view at larger size. Interactive model is optional and opens separately.

## Publish on GitHub Pages

**Critical:** copy the contents of this folder (including the hidden `.nojekyll` file) directly into the **root of the GitHub Pages publishing branch**; don't upload this folder as a subfolder. Ensure `index.html`, `styles.css`, `site.js`, and `assets/` are all in that root.

1. Open `https://github.com/dlysenko05/dlysenko05.github.io/settings/pages`.
2. Under Build and deployment, select `Deploy from a branch`, your publishing branch (usually `main`) and `/ (root)`; save.
3. Commit and push the files. Check Actions/Pages deployment status and reload `https://dlysenko05.github.io/` once published.
4. Use `/about.html` for the About page, not `/#about`. The latter has a backward-compatible JS redirect.

For local testing (from the folder): `python3 -m http.server 8000`; visit `http://localhost:8000`.

## Disclosure and scientific accuracy

- Both supplied CV PDFs contain a **personal phone number**. They are included unchanged. Remove/redact it from the PDFs before publishing if you want it private.
- Figures from the ZIP: observational BF plots and calculated numerical model figures. The quasar and absorber are **unresolved**; projected screens and the 3D illustration are model-dependent, not a reconstruction. No AI-generated figures were incorporated into the pages.
- The Fe II analysis supports **excitation-dependent effective covering**. A separate common chromatic covering slope and absorption-derived disk-temperature exponent are not established.
- The included interactive model is about 5 MB and loads only after explicitly opening the link.
- Review the public presentation of unpublished research and collaborator acknowledgments before publication.
