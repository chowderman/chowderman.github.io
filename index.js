/**
 * File for building XP-Paint
 */

const fs = require('fs-extra');
const path = require('path');
const { Humble } = require('@assemblylanguage/humble');

(async () => {
  // Setting up the build paths.
  const srcDir = path.join(__dirname, 'src');
  const outDir = path.join(__dirname, 'out');
  const distDir = path.join(__dirname, 'dist');
  const entryPoint = path.join(srcDir, 'index.html');
  const outFile = path.join(distDir, 'xp-paint.html');
  const outFileMin = path.join(distDir, 'xp-paint.min.html');

  // Deleting the build directory if it already exists.
  console.log('Deleting the existing build directory...');
  
  if (fs.existsSync(outDir)) {
    fs.removeSync(outDir);
  }

  if (fs.existsSync(distDir)) {
    fs.removeSync(distDir);
  }

  // Making an out and dist directory.
  console.log('Creating a new build directory...');

  fs.mkdirSync(outDir);
  fs.mkdirSync(distDir);

  // Copying all of the source files to the out directory.
  console.log('Copying the source to the build directory...');

  fs.copySync(srcDir, outDir);

  // Creating the standard beautified version of XP-Paint.
  console.log('Building XP-Paint...');

  const humble = new Humble({
    url: entryPoint,
    out: outFile,
    silent: true,
    beautifyHtml: true,
    beautifyCss: true,
    beautifyJs: true,
  });

  await humble.archive();

  // Creating a minified version of XP-Paint.
  console.log('Building minified XP-Paint...');

  const humbleMin = new Humble({
    url: entryPoint,
    out: outFileMin,
    silent: true,
    beautifyHtml: false,
    beautifyCss: false,
    beautifyJs: false,
    minifyHtml: true,
    minifyCss: true,
    minifyJs: true,
    minifyJsOptions: {},
  });

  await humbleMin.archive();

  // Cleaning up the build directories.
  console.log('Deleting excess build directories...');

  if (fs.existsSync(outDir)) {
    fs.removeSync(outDir);
  }

  console.log('XP-Paint build complete!');
})();
