const convertor = require("./convertor.js");

//with this optoin i can requier a spesific function from the module
// const { klToPn } = require("./convertor.js");

function greet(name) {
  return "Hello " + name + "!";
}

// console.log(
//   greet("Yuval") +
//     " your hiet is " +
//     convertor.cmToInch(164) +
//     " inch and your weith is " +
//     convertor.klToPn(54) +
//     " pound"
// );

const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

// node api axample
// rl.question("What is your name? ", (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Hello ${answer}`);

//   rl.close();
// });

rl.question("Hey there, what is your name? ", (name) => {
  rl.question("What is yout height in CM?  ", (heightCm) => {
    rl.question("What is yout weight in kilos?  ", (weightKl) => {
      let heightInch = convertor.cmToInch(heightCm);
      let weightPn = convertor.klToPn(weightKl);
      console.log(
        `Hello ${name}, your height is ${heightInch} inches and yout weight is ${weightPn} in pounds`
      );
      rl.close();
    });
  });
});

const fs = require("fs");
const content = "Hello World";

fs.writeFile(
  "/Users/yuvalpi/vscode-projects/myFirstNodeProject/file.text",
  content,
  (err) => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  }
);
