const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

const writeStrean = fs.createWriteStream("post.csv");

// Headers
writeStrean.write(`Title of blog post \n`)

request("https://write.as/matt", (error, response, html) => {
  if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);
      // const siteHeading = $(".post-title");
      // console.log(siteHeading.text())
      $(".post-title").each((i, el) => {
          const item = $(el).text().replace(/\s\s+/g, "");
          // Write to CSV file
          writeStrean.write(`${item}\n`);
      });
      console.log("Scraped into file")
  }
});
