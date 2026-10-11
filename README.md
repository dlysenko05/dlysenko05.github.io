# Daniil Lysenko — Academic website

Six-page static academic website for `dlysenko05.github.io`.

## Pages
- `index.html` — Home (includes Fe II covering-fraction illustration, based on 2026 working estimates)
- `research.html` — Research and current caveats
- `projects.html` — Numerical and computational projects
- `about.html` — About, featuring the provided cropped photograph
- `cv.html` — Both downloadable CV PDFs
- `contact.html` — Public email and GitHub

The site uses ordinary HTML, CSS and a short accessible mobile-navigation script. No packages or compilation needed.

## Deployment
Copy the **contents** of this folder to the root of the `dlysenko05.github.io` repository. Confirm the GitHub Pages branch and publishing directory in repository settings. From your local clone:

```bash
git status
git add .
git commit -m "Update academic site and CV"
git push
```

## Before publishing
- The uploaded full/short PDFs include a **personal phone number**. Remove it from those CVs first if you do not want it published on the open web. The website's Contact page lists only email, not phone.
- Check that unpublished scientific descriptions and preliminary results are suitable for public display and consistent with collaborators' expectations. Fe II figure: j0–j5 effective covering fractions from the October 2026 project handoff; observational and modeling caveats are explicit on Research.
- The direct GitHub repository links for individual research projects have not been independently verified; the site links to the public GitHub profile instead.
- Any collaborator names and contributions can be revised when the research record changes.

## Local preview
Run `python3 -m http.server 8000` in this folder and visit `http://localhost:8000/`.
