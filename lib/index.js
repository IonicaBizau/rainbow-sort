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

    var sorted = [];

    function rgbToHsl(c){
        var r = c[0]/255, g = c[1]/255, b = c[2]/255;
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;

        if(max == min){
            h = s = 0; // achromatic
        }else{
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch(max){
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }
        return new Array(h * 360, s * 100, l * 100);
    }

    let rgbArr = parsed.map(c => [
        c.values.rgb
      , c
    ]);

    let hslArr = rgbArr.map(c => [rgbToHsl(c[0]), c[1]]);
    var sortedHslArr=new Array();

    //Sorting `hslArr` into `sortedHslArr`
    outerloop:
    for(var i=0;i<hslArr.length;i++){
        for(var j=0;j<sortedHslArr.length;j++){
            if(sortedHslArr[j][0][0]>hslArr[i][0][0]){
                sortedHslArr.splice(j,0,hslArr[i]);
                continue outerloop;
            }
        }
        sortedHslArr.push(hslArr[i]);
    }

    return sortedHslArr.map(c => c[1]._original);
};
