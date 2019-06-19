# Mandalore Icons

This package uses [svgr](https://github.com/smooth-code/svgr) to generate a set of Typescript React components from a folder of svgs.

- `.svgrrc.js` handles the conversion to Typescript.
- `build.js` creates an index file for the webpack build to export from all of the icons we created.

Add icons in folders to `./src/svgs`, saved as svgs, then run `npm build` and it should take care of all the conversion to React components and bundling.
