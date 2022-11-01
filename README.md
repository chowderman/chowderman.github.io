# ![Paint Logo](docs/logo.png) XP Paint

[Try out XP Paint here!](https://paint-xp.com)

[![XP Paint](docs/example.png)](https://paint-xp.com)

XP Paint is a web-based version of MS Paint for Windows XP. It is a fork of JS Paint, with the following differences:

- It is self contained in a single .html file (~1 MB in size).
- It is fully usable offline.
- It removes many excess features from JS Paint that are not in the actual Windows XP MS Paint (besides a few features, such as rendering GIFs and increased history).
- It is much lighter than JS Paint (since it only includes the essential features).
- It is Windows XP styled instead of Windows 95 styled.

## Usage

To use XP Paint, click [this link](https://paint-xp.com). You can also download a copy by clicking the link and saving the page, or by using a program like `curl`:

```bash
curl https://raw.githubusercontent.com/assemblylanguage/xp-paint/master/dist/xp-paint.html > xp-paint.html
```

## Building

Instructions for building from source:

```
git clone https://github.com/assemblylanguage/xp-paint.git
cd xp-paint
npm install
node index.js
```

If the build was successful:

* The HTML file will be built at `./dist/xp-paint.html`
* The HTML file will be built at `./dist/xp-paint.min.html`

## Credits

- Credits to [Isaiah Odhner](https://isaiahodhner.io) and contributors for creating the original [JS Paint](https://github.com/1j01/jspaint) from which this is forked.
- Credits to [Adam Hammad](https://adamham.dev) and contributors for creating the [XP.css](https://github.com/botoxparty/XP.css/) library which was used heavily in the restyling the fork.

### License

Code licensed under the GNU AGPLv3. This project is not affiliated with Microsoft.
