// Following methods work for mangareader.net

const cheerio = require('cheerio');
const fs = require('fs');

const { hostPath } = require('./config');

const makePageURL = (animeTitle, chapterNumber, pageNumber) => {
  const url = `${hostPath}/${animeTitle}/${chapterNumber}/${pageNumber}`;
  return url;
};

const makePagesCountURL = (animeTitle, chapterNumber) => {
  const url = `${hostPath}/${animeTitle}/${chapterNumber}`;
  return url;
};

const getImage = (html) => {
  const $ = cheerio.load(html);

  const imgSrc = $('table.episode-table img#img').attr('src');

  return imgSrc;
};

const getTotalPages = (html) => {
  const $ = cheerio.load(html);

  const textValue = $('div#selectpage').contents()[1].nodeValue;

  const splittedTextValue = textValue.split(' ');

  const totalPagesCount = splittedTextValue[splittedTextValue.length - 1];

  return totalPagesCount;
};

module.exports = { getImage, getTotalPages, makePageURL, makePagesCountURL };
