var autoComplete = {
  create: function(opt) {
    $(opt.target).autocomplete({
      html: true,
      autoFocus: true,
      delay: opt.delay || 0,
      source: opt.source || function(request, response) {
        var inputData = request.term;
        var matcher = new RegExp($.ui.autocomplete.escapeRegex(inputData), "i");
        var filterData = jQuery.grep(opt.model, function(data) {
            return matcher.test(data.name);
        });

        var responseData = [];
        for (var i = 0, length = filterData.length; i < length; i++) {
            responseData.push({
                label: '<div>' + filterData[i].name + '></div>',
                value: filterData[i].name
            });
        }
        response(responseData);
      },
      open: opt.open,
      select: opt.select
    })
  }
}

module.exports = autoComplete;
