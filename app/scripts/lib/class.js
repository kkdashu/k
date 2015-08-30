var _ = require('./underscore.js');

function Class(o) {
  if(!this instanceof Class && _.isFunction(o)) {
    return classify(o);
  }
}

Class.create = function(parent, properties) {
  if(!_.isFunction(parent)) {
    properties = parent;
    parent = null;
  }

  properties || (properties = {});
  parent || (parent = properties.Extends || Class);
  properties.Extends = parent;

  function SubClass() {
    parent.apply(this, arguments);

    if(this.constructor === SubClass && this.initialize) {
      this.initialize.apply(this, arguments);
    }
  }

  if(parent !== Class) {
    mix(SubClass, parent, parent.StaticsWhiteList);
  }

  implement.call(SubClass, properties);

  return classify(SubClass);
}

function implement(properties) {
  var key, value;
  for(key in properties) {
    value = properties[key];
    if(Class.Mutators.hasOwnProperty(key)) {
      Class.Mutators[key].call(this, value);
    } else {
      this.prototype[key] = value;
    }
  }
}

Class.extend = function(properties) {
  properties = (properties || {});
  properties.Extends = this;
  return Class.create(properties);
}

function classify(cls) {
  cls.extend = Class.extend;
  cls.implement = implement;
  return cls;
}

Class.Mutators = {
  'Extends': function(parent) {
    var existed = this.prototype;
    var proto = createProto(parent.prototype);

    mix(proto, existed);
    proto.constructor = this;
    this.prototype = proto;
    this.superclass = parent.prototype;
  },
  'Implements': function(items) {
    _.isArray(items) || (items = [items]);
    var proto = this.prototype,
        item;
    while(item = item.shift()) {
      mix(proto, item.prototype || item);
    }
  },
  'Statics': function(staticProperties) {
    mix(this, staticProperties);
  }
}


function Ctor() {};

var createProto = Object.__proto__ ?
  function(proto) {
    return {
      __proto__: proto
    }
  } :
  function(proto) {
    Ctor.prototype = proto;
    return new Ctor();
  }

function mix(r, s, wl) {
  for(var p in s) {
    if(s.hasOwnProperty(p)) {
      if(wl && _.indexOf(wl, p) === -1) continue;

      if(p !== 'prototype') {
        r[p] = s[p];
      }
    }
  }
}

module.exports = Class;
