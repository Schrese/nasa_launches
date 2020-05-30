

let cheerio = require('cheerio');
let $ = cheerio.load('https://www.nasa.gov/launchschedule/');

var launchList = [];

$('.list.items .item').each(function (index, element) {

