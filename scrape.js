const request = require("request");
const cheerio = require("cheerio");

request("https://write.as/matt", (error, response, html) => {
  if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);
      // const siteHeading = $(".post-title");
      // console.log(siteHeading.text())
      $(".post-title").each((i, el) => {
          const item = $(el).text();
          console.log(item);
      })
  }
});
