# Publishing

The local project is complete on `main` and the remote is configured as:

```sh
git remote -v
```

Expected personal-site remote:

```text
origin  git@github.com:alirezahaqi/alirezahaqi.github.io.git
```

## Repository

The live personal GitHub Pages site is uploaded to:

```text
https://github.com/alirezahaqi/alirezahaqi.github.io
```

It publishes at:

```text
https://alirezahaqi.github.io/
```

## Push from this checkout

If this shell later has GitHub credentials:

```sh
git push -u origin main
```

## GitHub Pages

The repository includes `.github/workflows/deploy.yml`, which builds the Vite app with npm and deploys `dist` to GitHub Pages on every push to `main`. It can also be run manually from GitHub Actions.
