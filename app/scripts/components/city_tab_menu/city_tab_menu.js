var TabMenu = require('../../ui/tab_menu/tab_menu.js');

var data = [
  {
    name: '四川',
    values: [
      {  name: '成都', code: 'cd' },
      {  name: '达州', code: 'dz' },
      {  name: '南充', code: 'nc' },
      {  name: '遂宁', code: 'sn' },
      {  name: '自贡', code: 'zg' },
      {  name: '雅安', code: 'ya' },
   ]
  },
  {
    name: '湖南',
    values: [
      {  name: '长沙', code: 'cs' },
      {  name: '衡阳', code: 'hy' },
      {  name: '南充', code: 'zz' },
      {  name: '遂宁', code: 'ds' },
      {  name: '自贡', code: 'fd' },
      {  name: '雅安', code: 'hg' },
   ]
  }

]

var tabMenu = new TabMenu(data);

module.exports = tabMenu;
