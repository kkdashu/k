'use stricr';

class Router {
  constructor(path) {
    this.path = path;
    this.stack = [];
    this.methods = {};
  }
}

module.exports = Router;
