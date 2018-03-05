const paths = require('./paths');

const path = require('path');
const fs = require('fs');

const terms = path.resolve(paths.appSrc, 'terms.json');
const sampleTerms = path.resolve(paths.appSrc, 'sampleTerms.json');

const termsFile = fs.existsSync(terms) ? terms : sampleTerms;

module.exports = {
  terms: fs.readFileSync(termsFile).toString(),
};
