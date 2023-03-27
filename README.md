# url-to-markdown

Read an online html file and convert it to markdown. 

## Install

```bash
git clone https://github.com/diversen/url-to-markdown.git
cd url-to-markdown
npm install
```

## Usage

```bash
# fetching The Divine Comedy by Dante Alighieri
./url-to-markdown.js https://www.gutenberg.org/files/1001/1001-h/1001-h.htm#CantoI.I > devine_comedy.md
more devine_comedy.md
```

The code is just a single script [url-to-markdown.js](url-to-markdown.js). 

`Puppeteer` is used for the scraping. `Turndown` is used for converting html to markdown.

## License

MIT © [Dennis Iversen](https://github.com/diversen)