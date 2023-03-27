# gutenberg-format-convert

Read a html file on gutenberg and convert it to markdown. 

The files on gutenberg are not well formatted, so this will not work on all books. 

## Install

```bash
git clone https://github.com/diversen/gutenberg-format-convert
cd gutenberg-format-convert
npm install
```

## Usage

```bash
# fetching The Divine Comedy by Dante Alighieri
node ./gutenberg-to-markdown.js https://www.gutenberg.org/files/1001/1001-h/1001-h.htm#CantoI.I > devine_comedy.md
more devine_comedy.md
```

The code is just a single script [gutenberg-to-markdown.js](gutenberg-to-markdown.js). 

`Puppeteer` is used instead of e.g. jsdom and cheerio because puppeteer is faster and have a wider support for 
css selectors and html. 

## License

MIT © [Dennis Iversen](https://github.com/diversen)