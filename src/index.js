// sayHello = () => {
//     console.log("Hello")
// };
// sayHello();

// const $ = require('jquery');
//
// $('body').append("<h2>JQUERY has successfully installed</h2>");


// IMPORT ANSWER
// import { nice } from './say-hello';
// console.log(nice());

// REQUIRE ANSWER
// const message = require('./say-hello');
// message();

const { niceMessage } = require('./say-hello');
console.log(niceMessage());