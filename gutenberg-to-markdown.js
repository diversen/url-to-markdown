#!/usr/bin/env node

import puppeteer from "puppeteer";
import TurndownService from "turndown";
var turndownService = new TurndownService()


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


    // Export function
    await page.exposeFunction('turndown', (content) => {
        return turndownService.turndown(content);
    });    

    const markdown = await page.evaluate(() => {
        return window.turndown(document.body.innerHTML);
    });

    console.log(markdown);

    await browser.close();

};

getMarkdown(url)