require('./search_bar.css');
var content = require('../content/content.js');
var template = require('./search_bar.hbs');

var html = template({name: 'kkdashu', age: 10});

var $element = $(".search-bar-wrap");

$(".search-bar-wrap").html(html);

$element.on('click', '.search', function() {
  var pars = { name: $element.find('.name').val() };
  content.filter(pars);
})
