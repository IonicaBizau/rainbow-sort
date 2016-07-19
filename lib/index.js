"use strict";

const color = require("color");

/**
 * rainbowSort
 * Sort a list of given colors in the rainbow order.
 *
 * @name rainbowSort
 * @function
 * @param {String} list An array of colors which are parsable by [`color`](https://github.com/Qix-/color).
 * @returns {String} The input colors, but ordered in the rainbow.
 */
module.exports = function rainbowSort (list) {
    let parsed = list.map(color)
      , rainbow = [
            [color("red"), []]
          , [color("orange"), []]
          , [color("yellow"), []]
          , [color("green"), []]
          , [color("blue"), []]
          , [color("indigo"), []]
          , [color("violet"), []]
        ]
       ;

    parsed.forEach((c, i) => c._original = list[i]);

    parsed.forEach(c => {
        let r = rainbow.map(_ => ({
            rColor: _
          , contrast: _[0].contrast(c)
          , color: c
        })).sort((a, b) => a.contrast < b.contrast ? -1 : 1);
        debugger

        r[0].rColor[1].push(r[0].color);
    });

    rainbow.forEach(c =>
        c[1].sort((a, b) => a.hue() > b.hue() ? 1 : -1)
    );

    let finalArr = [];
    rainbow.forEach(c => finalArr = finalArr.concat(c[1]));
    debugger

    return finalArr.map(c => c._original);
};
