const fs = require("fs");
const readline = require("node:readline");

function writeGreetingToFile(name) {
  fs.writeFile("greeting.text", `Hello ${name}`, (err) => {
    if (err) {
      console.error("err");
    }
  });
}

const { stdin: input, stdout: output } = require("node:process");
const rl = readline.createInterface({ input, output });

rl.question("What is your name? ", (answer) => {
  rl.close();
  writeGreetingToFile(answer);
});
