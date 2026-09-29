# dlysenko05.github.io — scientific website starter

A lightweight GitHub Pages / Jekyll site for an astrophysics research profile.

## First edits

Open `_config.yml` and replace:

- `affiliation`
- `email`

Then edit the scientific text in:

- `index.md`
- `research/index.md`
- `projects/index.md`
- `cv/index.md`

Put the current CV at `assets/files/cv.pdf`.

## Publish on GitHub Pages

The GitHub repository should be named exactly:

`dlysenko05.github.io`

Copy these files into the repository root and push to the default branch. GitHub Pages can serve a user site directly from that repository. If Pages is not already enabled, open the repository's **Settings → Pages** and select deployment from the default branch/root, or use the Pages workflow offered by GitHub.

## Local preview

If Ruby/Jekyll is installed:

```bash
bundle exec jekyll serve
```

For the first deployment, local preview is optional: pushing to GitHub Pages is enough to test the real build.

## Design principles

- research first
- no JavaScript required
- no web framework
- responsive layout
- keyboard focus states
- reduced-motion support
- scientific figures can be added later without changing the layout

## Next iteration

1. Replace every placeholder with accurate research prose.
2. Add a real CV PDF.
3. Add one scientific figure to each mature research project.
4. Add ORCID / ADS / Google Scholar only when the profile exists and is worth linking.
5. Add a publications page once there is enough material to justify a separate page.
