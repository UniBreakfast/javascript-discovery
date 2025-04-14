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

const JSD = { __proto__: null }
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
  __proto__: null
}

const text2 = `Now you are ready for the next step!
There's a new function declared for you just now.
It has a fitting name 'run', and you should call it.
Type "run()" below (without quotes but with parentheses) and press Enter.`

JSD.thenExpandMe.nextStep = {
  recommendation: "Try JSD.thenExpandMe.nextStep.abraCadabra to read a magic property!",
  __proto__: {
    get abraCadabra() {
      window.run = run
      console.log(text2)
    },
    __proto__: null
  }
}

const text3 = `Hooray! You've called the function 'run'.
Was it your first function call?

There will be a lot more functions to call, variables to use, objects to expand/collapse and properties to access.
But let's summarize a few things up to this point:

We're in a JavaScript console of your browser. It's like a chat with a JavaScript interpreter. You write commands here and it tries to execute them for you. If you adhere to the syntax, it will do as you ask.

The text you write here is called the "code". It is viewed as your "input" as soon as you press Enter. And the interpreter's response is called "output". It is shown in the console below your input. Notice the ❯ marker in front of your input and the ❮• marker in front of the console's output. And then there are messages like this one without any markers on the left but with a link on the right leading to the JavaScript Discovery source code. If you click on the link, you will be redirected to the Source tab with this script code shown there and to get back here, you will need to click on the Console tab above. There's a lot of code there, so I'm not sure reading it now would be a good idea. You can always do that later when you're ready.

Call the "run()" function again to continue.`

welcome()

function welcome() {
  console.log(text)
}

function run() {
  console.log(text3)
}
