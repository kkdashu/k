/**
 * 模拟javascript的oo实现
 * var Person = Class.extend({
 *   say: function() {
 *    console.log('My name is ' + this.name);
 *   }
 * });
 *
 * var kkdashu = new Person.create({name: 'kkdashu'});
 *
 *
 **/

var _ = require('./underscore.js');

function Class(){

}

Class.extend = function() {
  var Constructor = this;

  //返回的构造函数
  function SubClass() {
    var properties = _.toArray(arguments);
    while(property = properties.shift()) {
      _.extend(this, property);
    }
    if(this.constructor === SubClass && this.initialize){
      this.initialize.apply(this);
    }
  }
  //继承当前类
  SubClass.prototype = new this();

  //把所有传过来的属性与方法赋值给原型
  var properties = _.toArray(arguments);
  while(property = properties.shift()) {
    _.extend(SubClass.prototype, property);
  }
  //修正constructor属性
  SubClass.prototype.constructor = SubClass;
  SubClass.extend = Class.extend;
  SubClass.create = Class.create;
  return SubClass;
}

Class.create = function() {
  var arg = {}, par, p;
  for(var i = 0, length = arguments.length;i < length; i++) {
    par = arguments[i];
    for(p in par) {
      if(par.hasOwnProperty(p)) {
        arg[p] = par[p]
      }
    }
  }
  if(this == Class){
    return new _Class(arg);
  }
  return new this(arg);
}

var _Class = Class.extend({});

module.exports = Class;
