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
    let parsed = list.map(color);
    parsed.forEach((c, i) => c._original = list[i]);
    parsed.sort((a, b) => a.hue() > b.hue() ? 1 : -1);
    return parsed.map(c => c._original);
};
