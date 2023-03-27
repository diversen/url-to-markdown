#!/usr/bin/env node

import puppeteer from "puppeteer";


if (process.argv.length < 3) {
    console.log("Please provide a url as first argument");  
    process.exit(1); 
}

const url = process.argv[2];

const getMarkdown = async (url) => {

    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
    });

    const page = await browser.newPage();

    await page.goto(url, {
        waitUntil: "domcontentloaded",
    });

    const book = await page.evaluate(() => {

        let finalText = '';
        let title = "# " + document.querySelector('h1').textContent + "\n\n";
        finalText += title;

        let chapters = document.querySelectorAll('.chapter')
        for (let chapter of chapters) {

            finalText += "## " + chapter.innerText + "\n\n"
            if (chapter.id) {
                let paragraphsSelector = `#${chapter.id} ~ p`;
                let paragraphs = document.querySelectorAll(paragraphsSelector);

                // Iterate all paragraphs and extract text
                for (let paragraph of paragraphs) {
                    if (paragraph.innerText == "") continue;
                    finalText += paragraph.innerText + "\n\n"
                }
            }
        }

        return finalText;
    });

    console.log(book);

    await browser.close();

};

getMarkdown(url)