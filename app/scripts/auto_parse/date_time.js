function DateTimeAutoParse(id) {
  this.id = id;
}

DateTimeAutoParse.prototype.$ = function(selector) {
  return $("#" + this.id).find(selector);
}

DateTimeAutoParse.prototype.autoParse = function() {
  var inputs = this.$("[data-type=datetime]");
  inputs.each(function(index, ele) {
    $(this).datepicker();
  });
}

module.exports = DateTimeAutoParse;
