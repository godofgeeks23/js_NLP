// const request = require('request');
// const cheerio = require('cheerio');
const WordPOS = require('wordpos'),

wordpos = new WordPOS();
var content = 'The angry bear chased the frightened little squirrel.';

wordpos.getPOS(content, function(result){
    console.log(result);
});
