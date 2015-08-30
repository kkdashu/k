require('./tab_menu.css');
var template = require('./tab_menu.hbs');
var Base = require('../../lib/base.js');

var TabMenu = Base.extend({
  $el: $("<div class='tab_menu'></div>"),
  tmp: template,
  render: function(parentEl) {
    parentEl = parentEl || $('body');
    var html = this.tmp({model: this.model});
    this.$el.html(html);
    parentEl.append(this.$el);
  },
  hide: function() {
    this.$el.hide();
  },
  show: function() {
    this.$el.show();
  }
})

module.exports = TabMenu;
