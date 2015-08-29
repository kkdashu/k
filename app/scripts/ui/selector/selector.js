/**
 * 结合autocomplete和dropdowntap控件
 *
 */
function Selector(id, data) {
  this.id = id;
  this.$el = $("#" + id);
}

Selector.prototype.$ = function(selector) {
  return $("#" + this.id).find(selector);
}

Selector.prototype.initAutocomplete = function() {
  var data = this.data;
  this.$el.autocomplete({
    html: true,
    autoFocus: true,
    delay: 0,
    max: 10,
    source: function(request, response) {
      var inputData = request.term;
      var matcher = new RegExp($.ui.autocomplete.escapeRegexp(inputData), "i");
      var filterData = $.grep(data, function(d) {
        return true;
      });
      var responseData = [];
      for(var i=0, length=filterData.length; i<length; i++) {
        responseData.push({
          label: '<div>' + filterData[i].name + '<div>',
          value: filterData[i].code
        });
      }
      response(responseData);
    },
    open: function(event, ui) {

    },
    select: function(event, ui) {

    }
  })
}

Selector.prototype.initDropDownMenu = function() {

}
