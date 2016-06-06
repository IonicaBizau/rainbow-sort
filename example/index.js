"use strict";

const rainbowSort = require("../lib")
    , couleurs = require("couleurs")
    , color = require("color")
    ;

let before = ["blue", "green", "yellow", "red", "orange"]
  , after = rainbowSort(before)
    // => ["red", "orange", "yellow", "green", "blue"]

    // And let's print them in the output
  , print = (arr, msg) => {
        console.log(msg);
        arr.forEach(c => {
            process.stdout.write(
                couleurs(c).fg(color(c).values.rgb) + " "
            );
        });
        console.log("");
    }
  ;

print(before, "Before");
print(after, "After");
