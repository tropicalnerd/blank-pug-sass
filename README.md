# Blank Pug Sass

---

This is a template based my preferred [CodePen](https://codepen.io) configuration for local development of small web projects. It includes Pug, Sass, BrowserSync and a Gulp process for building and serving.

## Gulp Tasks

- Build project: `gulp build`
- Serve project: `gulp serve`
- Compile Pug files: `gulp pug`
- Compile Sass files: `gulp sass`
- Copy public assets: `gulp copy`
- Erase destination folder: `gulp clean`

Note: `gulp copy` respects directory structure, so `/public/images/img.jpg` would be copied to `/dest/images/img.jpg`

## Directory Structure

```
project
├─── dest       // Destination folder for build and serve
├─── public     // Static assets for copying
├─── src        // Dynamic assets to be processed
     ├─── sass  // Sass files
     ├─── pug   // Pug template files
```