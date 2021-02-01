var fs = require("fs");

let rawdata = fs.readFileSync(process.argv[2]);
let student = JSON.parse(rawdata);

function CleanStr(str) {
  let ret = "";
  for (const letter in str) {
    if (str[letter] !== "\n") ret += str[letter];
  }
  return ret;
}

let write = "";

student.value.forEach((el) => {
  write = write.concat(" ", el.eventData.text);
});

write = write.replace(/(\r\n|\n|\r)/gm, " ");

fs.writeFile(`${process.argv[3]}.txt`, write, function (err) {
  if (err) return;
  console.log("Trad done");
});
