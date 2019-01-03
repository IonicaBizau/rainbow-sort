<!-- Please do not edit this file. Edit the `blah` field in the `package.json` instead. If in doubt, open an issue. -->


# rainbow-sort

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Ask me anything](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/rainbow-sort.svg)](https://www.npmjs.com/package/rainbow-sort) [![Downloads](https://img.shields.io/npm/dt/rainbow-sort.svg)](https://www.npmjs.com/package/rainbow-sort) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

<a href="https://www.buymeacoffee.com/H96WwChMy" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png" alt="Buy Me A Coffee"></a>

> Sort a list of given colors in the rainbow order.

## First rainbow :rainbow:

> *Whenever I bring clouds over the earth and the rainbow appears in the clouds, I will remember my covenant between me and you and all living creatures of every kind. Never again will the waters become a flood to destroy all life.*—Genesis 9:14-15


[![rainbow-sort](http://i.imgur.com/n3r6w5m.png)](#)

## :cloud: Installation

```sh
# Using npm
npm install --save rainbow-sort

# Using yarn
yarn add rainbow-sort
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



## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:

 3. For direct and quick help, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:



## :memo: Documentation


### `rainbowSort(list)`
Sort a list of given colors in the rainbow order.

#### Params

- **String** `list`: An array of colors which are parsable by [`color`](https://github.com/Qix-/color).

#### Return
- **String** The input colors, but ordered in the rainbow.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply to everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:


 - Starring and sharing the projects you like :rocket:
 - [![Buy me a book][badge_amazon]][amazon]—I love books! I will remember you after years if you buy me one. :grin: :book:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)


Thanks! :heart:



## :scroll: License

[MIT][license] © [Ionică Bizău][website]


[badge_patreon]: https://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: https://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: https://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: https://ionicabizau.github.io/badges/paypal_donate.svg

[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
