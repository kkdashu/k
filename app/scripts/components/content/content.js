var template = require('./content.hbs');

var model = [
  { name: 'kk' },
  { name: 'rr' }
]

var contentView = {
  render: function(_model){
    var html = template(_model);
    $(".content-wrap").html(html);
  },
  filter: function(filter) {
    if(filter.name){
      _model = model.filter(function(m){
        return m.name == filter.name;
      });
    }
    this.render(_model);
  }
}

contentView.render(model);

module.exports = contentView;
