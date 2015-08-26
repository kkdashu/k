require('./header.css');
var template = require('./header.hbs');

var html = template();

$(".header-wrap").html(html);
