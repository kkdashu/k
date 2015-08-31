var DatePicker = require('../ui/date_picker/date_picker.js');
function AutoParse(id) {
  this.id = id;
}

AutoParse.prototype.$ = function(selector) {
  return $("#" + this.id).find(selector);
}

AutoParse.prototype.autoParse = function() {
  var inputs = this.$("[data-type]");
  inputs.each(function(index, ele) {
    var type = $(this).data('type');
    switch (type) {
      case 'date':
        DatePicker.create({
          target: $(this).get(0)
        });
        break;
      default:
    }
    $(this).datepicker();
  });
}

module.exports = AutoParse;
