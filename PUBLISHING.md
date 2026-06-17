# Publishing

The local project is complete on `main` and the remote is configured as:

```sh
git remote -v
```

Expected remote:

```text
origin  https://github.com/alirezahaqi/personal-website.git
```

## Push from this checkout

After `alirezahaqi/personal-website` exists and this shell has GitHub credentials:

```sh
git push -u origin main
```

## Restore from the bundle

A verified bundle is available at:

```text
/private/tmp/personal-website-main.bundle
```

To clone it elsewhere:

```sh
git clone /private/tmp/personal-website-main.bundle personal-website
cd personal-website
git remote add origin https://github.com/alirezahaqi/personal-website.git
git push -u origin main
```

## GitHub Pages

The repository includes `.github/workflows/deploy.yml`, which builds with npm and deploys `dist` to GitHub Pages on pushes to `main`.
