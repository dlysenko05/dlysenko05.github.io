# Daniil Lysenko’s academic website

This site uses static HTML, one stylesheet and one shared script. Preview it from the repository root with `python3 -m http.server 8000` and open `http://localhost:8000/`. Use a server so root-relative navigation and assets resolve correctly. GitHub Pages supplies the custom 404 at missing URLs. Python’s basic server returns its own error document for those requests.

- Edit the short research listings in `research.html` and the detailed pages they link to. Keep site-wide navigation and footer changes in sync across the HTML files.
- Replace `downloads/Daniil_Lysenko_CV_full.pdf` with the approved public copy and update the date and page count in `cv.html`. Keep the filename for existing links.
- Keep the quasar captions aligned with the current analysis. The optional viewer loads a local Plotly bundle on desktop and uses the existing static model figure at smaller widths.
- The NSInduct figures and license in `assets/nsinduct/` come from the [v0.2.0 tag](https://github.com/dlysenko05/NSInduct/tree/v0.2.0). The cached badge comes from [Zenodo](https://zenodo.org/badge/1470821954.svg). The badge links to the concept record and the citation identifies the archived version.
- Keep `sitemap.xml` aligned with the public content pages. The old Projects page and historical directory URLs forward to Research, CV or the relevant detail page.

GitHub Pages publishes the root of `main`. After approval and the next push, check the Pages deployment and recheck the public CV, nested 404, and quasar viewer.
