const request = require('request-promise-native');
const cheerio = require('cheerio');
const fs = require('fs');

const { anime, downloadDirectory } = require('./config');

const { getHtml, download } = require('./request');
const { getImage, getTotalPages, makePageURL, makePagesCountURL } = require('./scraper');
const { createDownloadDirectory } = require('./util');

const startScraping = async (animeTitle, chapterNumber) => {
  const url = makePagesCountURL(animeTitle, chapterNumber);
  const html = await getHtml(url);

  const totalPagesCount = getTotalPages(html);

  for (let i = 1; i <= totalPagesCount; i++) {
    const url = makePageURL(animeTitle, chapterNumber, i);
    const html = await getHtml(url);
    const imgSrc = getImage(html);

    createDownloadDirectory(downloadDirectory, animeTitle, chapterNumber);

    const dir = `${downloadDirectory}/${animeTitle}/${animeTitle}-${chapterNumber}`;

    const fileExtension = imgSrc
      .split(/\#|\?/)[0]
      .split('.')
      .pop()
      .trim();

    download(imgSrc, `${dir}/${animeTitle}-${chapterNumber}-${i}.${fileExtension}`, function() {});
  }
};

// Start here
(async () => {
  //   await startScraping(anime.onePiece, 904);

  console.log('done');
})();
