require('./tab_menu.css');
var template = require("./tab_menu.hbs");

function TabMenu(trigger, data) {
  this.data = data;
  this.$el = $("<div class='tab_menu'></div>");
  this.tmp = template;
}

TabMenu.prototype.init = function() {

}

TabMenu.prototype.render = function(parentEl) {
  parentEl = parentEl || $('body');
  var html = this.tmp({model: this.data});
  this.$el.html(html);
  parentEl.append(this.$el);
}

TabMenu.prototype.hide = function() {
  this.$el.hide();
}

TabMenu.prototype.show = function() {
  this.$el.show();
}

module.exports = TabMenu;
