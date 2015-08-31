require('./tab_menu.css');
var _ = require('../../lib/underscore.js');
var template = require('./tab_menu.hbs');
var Component = require('../../lib/component.js');

var TabMenu = Component.extend({
  $el: $("<div class='tab_menu'></div>"),
  tmp: template,
  events: {
    'click .tab_menu_head_item': 'switchTab',
    'click .tab_menu_content_select': 'select'
  },
  switchTab: function(e) {
    var $target = $(e.currentTarget);
    this.$el.find('.tab_menu_head_item').removeClass('active');
    $target.addClass('active');
    var index = $target.data('index');
    this.$el.find('.tab_menu_content_item').hide();
    this.$el.find('.tab_menu_content').find('[data-index='+index+']').show()
  },
  select: function(e) {
    var $target = $(e.currentTarget);
    $(this.target).val($target.attr('title'));
    this.hide();
  }
});

module.exports = TabMenu;
