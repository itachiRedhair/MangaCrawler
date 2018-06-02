const request = require('request-promise-native');
const fs = require('fs');

const download = (url, filename, callback) => {
  request(url)
    .pipe(fs.createWriteStream(filename))
    .on('close', callback);
};

const getHtml = async (url) => {
  const html = await request(url);

  return html;
};

module.exports = { download, getHtml };
