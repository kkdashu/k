require('./search_bar.css');
var DateTimeAutoParse = require('../../auto_parse/date_time.js');
var content = require('../content/content.js');
var template = require('./search_bar.hbs');
var cityTabMenu = require('../city_tab_menu/city_tab_menu.js');

var html = template({name: 'kkdashu', age: 10});

var $element = $(".search-bar-wrap");

$(".search-bar-wrap").html(html);

new DateTimeAutoParse("search_bar").autoParse();

cityTabMenu('city');

$element.on('click', '.search', function() {
  var pars = { name: $element.find('.name').val() };
  content.filter(pars);
});
