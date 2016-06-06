
# rainbow-sort

 [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/rainbow-sort.svg)](https://www.npmjs.com/package/rainbow-sort) [![Downloads](https://img.shields.io/npm/dt/rainbow-sort.svg)](https://www.npmjs.com/package/rainbow-sort) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Sort a list of given colors in the rainbow order.

## First rainbow :rainbow:
> *Whenever I bring clouds over the earth and the rainbow appears in the clouds, I will remember my covenant between me and you and all living creatures of every kind. Never again will the waters become a flood to destroy all life.*—Genesis 9:14-15


[![rainbow-sort](http://i.imgur.com/n3r6w5m.png)](#)

## :cloud: Installation

```sh
$ npm i --save rainbow-sort
```


## :clipboard: Example



```js
const rainbowSort = require("rainbow-sort")
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
```

## :memo: Documentation


### `rainbowSort(list)`
Sort a list of given colors in the rainbow order.

#### Params
- **String** `list`: An array of colors which are parsable by [`color`](https://github.com/Qix-/color).

#### Return
- **String** The input colors, but ordered in the rainbow.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md