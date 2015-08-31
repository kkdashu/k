require('./auto_complete.css');

var autoComplete = {
  create: function(opt) {
    $(opt.target).autocomplete({
      html: true,
      autoFocus: true,
      delay: opt.delay || 200,
      source: opt.source || function(request, response) {
        var inputData = request.term;
        var matcher = new RegExp($.ui.autocomplete.escapeRegex(inputData), "i");
        var filterData = jQuery.grep(opt.model, function(data) {
            return matcher.test(data.name);
        });

        var responseData = [];
        for (var i = 0, length = filterData.length; i < length; i++) {
            responseData.push({
                label: filterData[i].name,
                value: filterData[i].name
            });
        }
        if(responseData.length == 0) {
          responseData = ['无数据，请更换关键字搜索！'];
        }
        response(responseData);
      },
      search: opt.search,
      open: opt.open,
      select: opt.select
    })
  }
}

module.exports = autoComplete;
