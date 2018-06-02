const fs = require('fs');

const createDownloadDirectory = (downloadDirectory, animeTitle, chapterNumber) => {
  if (!fs.existsSync(`${downloadDirectory}`)) {
    fs.mkdirSync(`${downloadDirectory}`);
  }

  if (!fs.existsSync(`${downloadDirectory}/${animeTitle}`)) {
    fs.mkdirSync(`${downloadDirectory}/${animeTitle}`);
  }

  if (!fs.existsSync(`${downloadDirectory}/${animeTitle}/${animeTitle}-${chapterNumber}`)) {
    fs.mkdirSync(`${downloadDirectory}/${animeTitle}/${animeTitle}-${chapterNumber}`);
  }
};

module.exports = { createDownloadDirectory };
