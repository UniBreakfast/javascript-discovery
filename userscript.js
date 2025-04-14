// ==UserScript==
// @name         JS Discovery
// @namespace    http://tampermonkey.net/
// @version      2025-04-14
// @description  Learn JS naturally in your console just as you would learn Minecraft by playing.
// @author       Mykhailo "Ninin" Velykoselskyi aka UniBreakfast
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

const JSD = {__proto__:null}
const text = `===================
Welcome to JavaScript console of your browser!

This message is brought to you by JavaScript Discovery (JSD).
It's an interactive dive-in guide script designed to help you learn as much as possible "on your own".

There can be other messages here in your console above and below this one, but I have nothing to do with those, I swear.
Hopefully there are none but still, if there are, I suggest you to ignore them for now.

I also suggest placing DeveloperTools on the right side of your browser window if it is not already there (look here if you don't know how: https://www.google.com/search?q=developer+tools+dock+side&udm=2).
Also you can adjust the readability by pressing Ctrl +/- (Cmd +/- on Mac) and moving the page/devtools splitter to 40%/60% position.

Type in "JSD" below (three capital letters without quotes) and press Enter to find out more.
Then click on the object output in the console below to see its properties.
You can click on any object in the console more than once to expand/collapse its properties.
===================`

window['JavaScript Discovery'] = JSD
window['JS Discovery'] = JSD
window.jsDiscovery = JSD
window.JSD = JSD

JSD.readMe1 = "You're looking at an object shown in the console."
JSD.readMe2 = "This object is globally available via variable named JSD."
JSD.readMe3 = "It has 4 properties: readMe1, readMe2, readMe3 and thenExpandMe."
JSD.thenExpandMe = {
  hint1: "You can also access all these properties directly.",
  hint2: "Simply type 'variableName.propertyName'.",
  hint3: "For example try JSD.readMe3 or JSD.thenExpandMe",
  hint4: "or even JSD.thenExpandMe.hint4 or the same with .hint5",
  hint5: "to directly access deeply nested properties at any depth.",
}

const text2 = `Now you are ready for the next step!
There's a new function declared for you just now.
It has a fitting name 'run', and you should call it.
Type "run()" below (without quotes but with parentheses) and press Enter.`

JSD.thenExpandMe.nextStep = {
  recommendation: "Try JSD.thenExpandMe.nextStep.abraCadabra to read a magic property!",
  get abraCadabra() {
    window.run = run
    console.log(text2)
  }
}

const text3 = `Hooray! You've called the function 'run'.
Was it your first function call?

<further instructions to be added here>`

welcome()

function welcome() {
  console.log(text)
}

function run() {
  console.log(text3)
}
