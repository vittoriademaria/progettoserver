const { URL } = require("url"); 

class pageLoader {
  constructor(page) {
    this.baseUrl = "https://it.wikipedia.org/wiki/Node.js";
    this.page = page;
  }

  getUrl() {
    return new URL(`${this.baseUrl}/wiki/${this.page}`);
  }
}

module.exports = pageLoader;