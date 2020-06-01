const request = require("request");
const cheerio = require("cheerio");

request("https://write.as/matt", (error, response, html) => {
  if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);
      const siteHeading = $(".post-title");
      console.log(siteHeading.text())
  }
});
