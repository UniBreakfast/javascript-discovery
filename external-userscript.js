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
  recommendation1: "Try JSD.thenExpandMe.nextStep.abraCadabra to read a magic property!",
  recommendation2: "Please restrain yourself from going down the rabbit",
  recommendation3: "hole of endless expanding beyond the prototype below.",
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

const text4 = `A bit earlier you typed in 'JSD' and pressed Enter (if you followed my instructions, which you hopefully did). That already was a tiny bit of code, a single token of code, an identifier of a global variable named JSD. And becoming your input that singlular variable identifier formed one the simplest expressions JavaScript interpreter can evaluate - an expression of reading a variable. So it accessed the object value bound to that variable in memory and output to the console its representation in a commonly expected format, with curly braces, properties separated by commas, represented by property names and values separated by colons, etc.

So you've read the values of the properties named 'readMe1', 'readMe2' and 'readMe3' and those values were strings of text. Then you've accessed the value of the property named 'thenExpandMe' by expanding it with a click and that value was another object with it's own set of properties named "hintN" 1 through 5 with another five strings of text as their values. From those hints you've found out that other than by expanding objects in the console you can also access/read their values directly with expressions like 'variableName.propertyName' or even 'variableName.propertyName.propertyName' (with any depth really).

In an expression like 'a.b' both 'a' and 'b' are again identifiers, 'a' should identify some existing variable, while 'b' is supposed to identify a property named 'b' of an object bound to the variable named 'a'. And the dot between 'a' and 'b' is called a "property access operator" or "dot notation". So 'a.b' is an expression of reading a property of an object. And the result of evaluating that expression is the value bound to the property named 'b' of the object bound to the variable named 'a'.

Call the "run()" function again to continue.`

const text5 = `After reading through those hints you've accessed the third object bound to the 'nextStep' property of the second object. And you've done that either by expanding objects further in the console or by accessing it directly with an expression like 'JSD.thenExpandMe.nextStep'. And that object yet again had its own set of properties, one of which was named 'recommendation1' and had a string value. That string was a recommendation to read the property named 'abraCadabra' of the object bound to the 'nextStep' property of the object bound to the 'thenExpandMe' property of the object bound to the variable named 'JSD'.

And as soon as you did access that property, the function named 'run' was declared and bound to the variable named 'run' in the global scope. And you calling that function a few times with parentheses resulted in the text you are reading right now being output to the console.

So while explaining all that I mentioned several terms that are important to understand: identifier, operator, token, expression, variable, property, binding, string, object, value and function. I've put an object with some definitions/explanations for those terms in a new property at the 'JSD'. You can try and read through those by accessing 'JSD' again (as you will not see it in the stale output left above) and expanding the 'terms' property or by typing 'JSD.terms' and pressing Enter. But those strings are kinda long and they are truncated by the console and reading them through the small tooltips shown on hover is not very convenient. So I present you with a function named 'log' that will log the text to the console in a more readable way. You can call it with an expression like 'log(anyExpression)'. Try an expression of reading property like 'JSD.terms.identifier' in place of 'anyExpression'.

No real need to call the "run()" function again, but if you do the last three messages will repeat.`

const runMessages = [text3, text4, text5]
const terms = {
  identifier: "A name that identifies a variable, property or function.",
  operator: "A symbol that performs an operation on one or more operands.",
  token: "A single unit of code, such as a keyword, identifier, operator, or punctuation.",
  expression: "A combination of values and operators that evaluates to a value.",
  variable: "A named storage location in memory that can hold a value.",
  property: "A named value associated with an object.",
  binding: "The association between a variable name and its value in memory.",
  string: "A sequence of characters enclosed in quotes.",
  object: "A collection of properties and methods.",
  value: "The data stored in a variable or property.",
  function: "A reusable block of code that performs a specific task."
}

welcome()

function welcome() {
  console.log(text)
}

function run() {
  const text = runMessages.shift()

  runMessages.push(text)
  console.log(text)

  if (text == text5) {
    window.log = console.log
    JSD.terms = terms
  }
}
