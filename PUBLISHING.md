# Publishing

The local project is complete on `main` and the remote is configured as:

```sh
git remote -v
```

Expected remote:

```text
origin  https://github.com/alirezahaqi/phd-website.git
```

## Repository

The site is uploaded to the private GitHub repository:

```text
https://github.com/alirezahaqi/phd-website
```

## Push from this checkout

If this shell later has GitHub credentials:

```sh
git push -u origin main
```

## GitHub Pages

The repository includes `.github/workflows/deploy.yml`, which can be run manually from GitHub Actions to build with npm and deploy `dist` to GitHub Pages after Pages is enabled for the repository.
