/**
 * kyo application
 */
'use strict';
var http = require('http');
var Router = require('./router');

class Application {
  constructor() {
    this.http = http;
    this.cache = {};
    this.engines = {};
    this.settings = {};
    this.defaultConfiguration();
  }
  defaultConfiguration() {
    var env = process.env.NODE_ENV || 'development';
    this.set('env', env);
    // this.on('mount', (parent) => {
    //   this.request.__proto__ = parent.request;
    //   this.response.__proto__ = parent.response;
    //   this.engines.__proto__ = parent.engines;
    //   this.settings.__proto__ = parent.settings;
    // });

    //setup locals
    this.locals = Object.create(null);
    this.mountpath = '/';
    this.locals.settings = this.settings;

    if(env === 'production') {
      this.enable('view cache');
    }
    this.lazyrouter();
  }
  route(path) {
    this.lazyrouter();
    return this._router.route(path);
  }
  lazyrouter() {
    if(!this._router) {
      this._router = new Router();
    }
  }
  set(setting, val) {
    if(arguments.length === 1) {
      return this.settings[setting];
    }
    this.settings[setting] = val;
  }

  /**
   * 获取app的setting是否为真
   *
   * app.setting('isApp', true);
   * app.enabled('isApp') --> true
   */
  enabled(setting) {
    return Boolean(this.settings[setting]);
  }
  disabled(setting) {
    return !this.enabled(setting);
  }

  /**
   * 设置setting 为true
   */
  enable(setting) {
    return this.set(setting, true);
  }

  /**
   * 设置setting 为false
   */
  disable(setting) {
    return this.set(setting, false);
  }
}

module.exports = Application;
//export default Application;
