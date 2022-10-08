const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const matchArr = input.match(/<div title="(?<title>[\w\s]+)">(?<content>.*?)<\/div>/g);
matchArr.forEach((contents) => {
  const { title, content } = /<div title="(?<title>[\w\s]+)">(?<content>.*?)<\/div>/.exec(contents).groups;
  const paragraphs = content.match(/<p>(.*?)<\/p>/g);

  console.log(`title : ${title}`);
  paragraphs.forEach((p) => {
    console.log(
      p
        .replace(/(<.*?>)/g, "")
        .replace(/\s{2,}/g, " ")
        .trim()
    );
  });
});
