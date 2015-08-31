var TabMenu = require('../../ui/tab_menu/tab_menu.js');
var AutoComplete = require('../../ui/auto_complete/auto_complete.js');
var autoCompleteData = [
  {  name: '成都市', code: 'cd' },
  {  name: '达州市', code: 'dz' },
  {  name: '南充市', code: 'nc' },
  {  name: '遂宁市', code: 'sn' },
  {  name: '自贡市', code: 'zg' },
  {  name: '雅安市', code: 'ya' },
  {  name: '长沙市', code: 'cs' },
  {  name: '衡阳市', code: 'hy' },
  {  name: '岳阳市', code: 'zz' },
  {  name: '张家界市', code: 'ds' },
  {  name: '湘潭市', code: 'fd' },
  {  name: '邵阳市', code: 'hg' },
]

var data = [
  {
    name: '四川',
    values: [
      {  name: '成都市', code: 'cd' },
      {  name: '达州市', code: 'dz' },
      {  name: '南充市', code: 'nc' },
      {  name: '遂宁市', code: 'sn' },
      {  name: '自贡市', code: 'zg' },
      {  name: '雅安市', code: 'ya' },
   ]
  },
  {
    name: '湖南',
    values: [
      {  name: '长沙市', code: 'cs' },
      {  name: '衡阳市', code: 'hy' },
      {  name: '岳阳市', code: 'zz' },
      {  name: '张家界市', code: 'ds' },
      {  name: '湘潭市', code: 'fd' },
      {  name: '邵阳市', code: 'hg' },
   ]
  }

]



function cityTabView(target) {
  if(typeof target == 'string') {
    target = document.getElementById(target);
  }
  //tab
  var tabMenu = TabMenu.create({
    model: data,
    position: {x: '13px', y: '25px'},
    target: target
  });

  //autoComplete
  var autoComplete = AutoComplete.create({
    target: target,
    model: autoCompleteData,
    select: function() {
      //alert('select');
    },
    open: function() {
      tabMenu.hide();
    }
  });
  $('body').on('click', function(e) {
    if(e.target != tabMenu.target) {
      tabMenu.hide();
    }
  });
  $(target).on('click', function(e) {
    tabMenu.render();
    e.stopPropagation();
  })
}

module.exports = cityTabView;
