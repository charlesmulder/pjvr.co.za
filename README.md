# pjvr.co.za

Personal website for Pieter Jansen Van Rensburg

TODO:
trigger masonry and recalculate string positions as each image is loaded
https://masonry.desandro.com/layout.html

```bash
npm install
```

Watch and build `src/index.js` to `dist/main.js`

```bash
./node_modules/.bin/webpack -w --mode=development --output-path=$(pwd)/_site/
```

Watch and build `src/*.scss` to `_site/*.css`

```bash
./node_modules/.bin/sass --watch src/scss:_site/css
```

Development servers

```
npx @11ty/eleventy --input=src --serve
```

## Deploy

```sh
./node_modules/.bin/webpack --mode=production --output-path=$(pwd)/_site/
./node_modules/.bin/sass src/scss:_site/css --style compressed
npx @11ty/eleventy --input=src
# first deploy
git subtree push --prefix _site origin gh-pages
# subsequent deploys
git push origin `git subtree split --prefix _site master`:gh-pages --force
```

