require('../../../../bower_components/jquery/dist/jquery.js');
require('./header.css');
var template = require('./header.hbs');

var html = template();
document.body.appendChild($(html).get(0));
