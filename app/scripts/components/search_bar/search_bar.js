require('./search_bar.css');
var template = require('./search_bar.hbs');

var html = template({name: 'kkdashu', age: 10});

$(".search-bar-wrap").html(html);
