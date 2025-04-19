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
Welcome to the JavaScript console of your browser!

This message is brought to you by JavaScript Discovery (JSD).
It's an interactive dive-in guide script designed to help you learn as much as possible "on your own".

There might be other messages here in your console above and below this one, but I have nothing to do with those, I swear.
Hopefully, there are none, but if there are, I recommend ignoring them for now.

I also suggest placing the developer tools on the right side of your browser window if it is not already there (look here if you don't know how: https://www.google.com/search?q=developer+tools+dock+side&udm=2).
You can also improve readability by pressing Ctrl +/- (Cmd +/- on Mac) and moving the page/devtools splitter to a 40%/60% position.

Type in 'JSD' below (three capital letters without quotes) and press Enter to find out more.
Then click on the object output in the console below to see its properties.
You can click on any object in the console more than once to expand/collapse its properties.
===================`

window['JavaScript Discovery'] = JSD
window['JS Discovery'] = JSD
window.jsDiscovery = JSD
window.JSD = JSD

JSD.readMe1 = "You're looking at an object shown in the console."
JSD.readMe2 = "This object is globally available via the variable named JSD."
JSD.readMe3 = "It has 4 properties: readMe1, readMe2, readMe3, and thenExpandMe."
JSD.thenExpandMe = {
  hint1: "You can also access all these properties directly.",
  hint2: "Type something like 'variableName.propertyName' (not those exact words).",
  hint3: "For example, try JSD.readMe3 or JSD.thenExpandMe",
  hint4: "or even JSD.thenExpandMe.hint4 or the same with .hint5",
  hint5: "to directly access deeply nested properties at any depth.",
  __proto__: null
}

const text2 = `Now you are ready for the next step!
There's a new function declared for you just now.
It has an appropriate name, 'run', and you should call it.
Type 'run()' below (without quotes but with parentheses) and press Enter.`

JSD.thenExpandMe.nextStep = {
  recommendation1: "Try JSD.thenExpandMe.nextStep.abraCadabra to read a magic property!",
  recommendation2: "Please restrain yourself from going down the rabbit",
  recommendation3: "hole of endless expanding beyond the prototype below.",
  __proto__: {
    get abraCadabra() {
      window.run = run
      console.log(text2)
      return 'Shazam!'
    },
    __proto__: null
  }
}

const text3 = raw`Hooray! You've called the function 'run'.
${run.count < 3 ? 'Was that your first function call?' : `Again... ${run.count} times already actually!`}

There will be a lot more functions to call, variables to use, objects to expand/collapse, and properties to access.
But let's summarize a few things up to this point:

We're in the JavaScript console of your browser. It's like a chat with the JavaScript interpreter. You write commands here and it tries to execute them for you. If you adhere to the syntax, it will do as you ask. Otherwise it will gently scream at you with red error messages, which is great, really.

The text you write here is called the "code". It is viewed as your "input" as soon as you press Enter. And the interpreter's response is called "output". It is shown in the console below your input. Notice the ❯ marker before your input and the ❮• marker before the console's output. There are also messages like this one without any markers on the left, but with a link on the right leading to the JavaScript Discovery source code. If you click on the link, you will be redirected to the Source tab with this script code shown there, and to get back here, you will need to click on the Console tab above. There's a lot of code there, so I'm not sure reading it now would be a good idea. You can always do that later when you're ready.

Call the 'run()' function again to continue.`

const text4 = raw`A bit earlier you typed in 'JSD' and pressed Enter (if you followed my instructions, which you hopefully did). That already was a tiny bit of code, a single token of code, an identifier of a global variable named JSD. And becoming your input that singular variable identifier formed one of the simplest expressions JavaScript interpreter can evaluate - an expression of reading a variable. So it accessed the object value bound to that variable in memory and outputted to the console its representation in a commonly expected format, with curly braces, properties separated by commas, represented by property names and values separated by colons, etc.

So you've read the values of the properties named 'readMe1', 'readMe2' and 'readMe3' and those values were strings of text. Then you've accessed the value of the property named 'thenExpandMe' by expanding it with a click and that value was another object with its own set of properties named 'hintN' 1 through 5 with another five strings of text as their values. From those hints you've found out that other than by expanding objects in the console you can also access/read their values directly with expressions like 'variableName.propertyName' or even 'variableName.propertyName.propertyName' (with any depth really).

In an expression like 'a.b' both 'a' and 'b' are again identifiers, 'a' should identify some existing variable, while 'b' is supposed to identify a property named 'b' of an object bound to the variable named 'a'. And the dot between 'a' and 'b' is called a "property access operator" or "dot notation". So 'a.b' is an expression of reading a property of an object. And the result of evaluating that expression is the value bound to the property named 'b' of the object bound to the variable named 'a'.

Call the 'run()' function again to continue.`

const text5 = raw`After reading through those hints you've accessed the third object bound to the 'nextStep' property of the second object. And you've done that either by expanding objects further in the console or by accessing it directly with an expression like 'JSD.thenExpandMe.nextStep'. And that object yet again had its own set of properties, one of which was named 'recommendation1' and had a string value. That string was a recommendation to read the property named 'abraCadabra' of the object bound to the 'nextStep' property of the object bound to the 'thenExpandMe' property of the object bound to the variable named 'JSD'.

And as soon as you did access that property, the function named 'run' was declared and bound to the variable named 'run' in the global scope. And calling that function a few times with parentheses resulted in the text you are reading right now being output to the console.

While explaining all that, I mentioned several terms that are important to understand: identifier, operator, token, expression, variable, property, binding, string, object, value and function. I've put an object with some definitions/explanations for those terms in a new property of the 'JSD'. You can try and read through those by accessing 'JSD' again (as you will not see it in the stale output left above) and expanding the 'terms' property or by typing 'JSD.terms' and pressing Enter. But those strings are rather long and they are truncated by the console and reading them through the small tooltips shown on hover is not very convenient. So I present you with a function named 'log' that will log the text to the console in a more readable way. You can call it with an expression like 'log(anyExpression)'. Try an expression of reading a property like 'JSD.terms.identifier' in place of 'anyExpression'.

There's no real need to call the 'run()' function again, but if you do, the last three messages will repeat.`

const runMessages = [text3, text4, text5]
const terms = {}

terms.identifier = `An identifier is a token of code naming a binding entity like a variable, property or function. It can also name a constant, parameter, method or class but we haven't covered those yet.

An identifier forms a standalone expression that evaluates to the value bound to the corresponding named binding entity (like, say, a variable) if there is one available. Or it produces a ReferenceError if there is no binding entity with that name in the scope of its usage.

An identifier also can be a part of composite expressions like:
  a.b.c
  fn()
  x = y + z
where a, b, c, fn, x, y and z all are identifiers of variables, properties or functions.

Strictly speaking, variables, properties, or functions (or any other binding entities) do not exist in the code themselves, only the tokens addressing them by name, and those are called identifiers.`

terms.operator = `An operator is a token of code formed by a single character or a combination of characters that performs an operation on one or more operands. We used the property access operator '.' and a function call operator '()' in the code above. 

There are also other operators like assignment operator '=', arithmetic operators '+', '-', '*', '/', etc., logical operators '&&', '||', '!', etc., comparison operators '===', '!==', '<', '>', '<=', '>=' and many others.

Unary operators work on a single operand, binary operators work on two operands, and ternary operators work on three operands. The operator precedence determines the order in which operators are evaluated in an expression (similarly to mathematical operations).

Operators, together with their operands, usually form expressions that are evaluated by the JavaScript interpreter.`

terms.token = `A token is a single unit of code, such as an identifier or operator, analogous to how words and punctuation marks are tokens in human languages. There are also other types of tokens in JS like keywords, literals, punctuation, and comments, but we haven't covered those yet.

Some tokens, like identifiers, literals, or keywords can form a standalone expression or even a statement. But much more often they are used to build composite expressions or statements with multiple tokens or even with nested composite expressions inside them, with any level of nesting.

Only combinations of tokens that follow the language syntax can be considered valid expressions or statements and evaluated by the JavaScript interpreter. Attempting to evaluate an invalid combination of tokens will produce a SyntaxError. You can try two identifiers separated with a space without an operator between them as an example.`

terms.expression = `An expression is a valid segment of code that resolves to a single value. Like a mathematical expression, e.g., 2 + 2, which resolves to 4. Expressions can be simple or complex, and they may include multiple nested sub-expressions. 

For example:
  - A single identifier like 'JSD' is an expression that resolves to the object stored in the JSD variable.
  - Accessing a property like 'JSD.readMe1' is an expression that resolves to the string value of that property.
  - A function call like 'run()' is an expression that executes the function and resolves to its return value (which is 'undefined').
  - Longer token combinations like 'JSD.thenExpandMe.nextStep.abraCadabra' also form expressions.

Whenever you type something into the console and press Enter, the interpreter tries to evaluate it as an expression (or a statement containing expressions) and typically displays the resulting value (the '❮•' output).`

terms.variable = `A variable is the most familiar category of binding entities. It's a named container or placeholder in the computer's memory that you associate with a value. It allows you to store data and refer to it using a meaningful name (an identifier).

You've already been using variables:
  - 'JSD' is a global variable that holds the main JavaScript Discovery object.
  - 'run' is another global variable that holds a function as its value.

Variables allow you to reuse values without recreating them, making your code more readable. Unlike properties which belong to an object, variables typically exist within a scope (local or global).

The word variable can be also used in a more general sense to refer to any binding entity, including constants, parameters and properties. Although, strictly speaking, the term only applies to those declared with the 'var' or 'let' keywords or globally.` 

terms.property = `A property is the most common category of binding entities. It is a variable-like binding that belongs to an object, serving as a named entry that references a value.

You've interacted extensively with properties:
  - 'readMe1', 'readMe2', 'readMe3', and 'thenExpandMe' are properties of the object stored in the 'JSD' variable.
  - The object stored in 'JSD.thenExpandMe' has properties: 'hint1', 'hint2', 'hint3', 'hint4', 'hint5', and 'nextStep'.
  - The object stored in that 'nextStep' property also has properties: 'recommendation1', 'recommendation2', 'recommendation3' and 'abraCadabra'.
You accessed those using the dot '.' operator, like 'JSD.readMe1' or the nested 'JSD.thenExpandMe.hint4'.

Each property consists of a "key" (a name like 'readMe1' or 'hint1') and an associated value, which can be of any data type.`

terms.binding = `A binding is the fundamental link or association established between a name (an identifier) and what that name refers to in the code, such as a specific value, an object, or a function stored in memory. Think of it as the "glue" that connects a label in your code (like 'JSD' or 'run') to the actual data or code block it represents.

This connection exists within a specific context or "scope". For example, 'JSD' and 'run' were bound in the global scope, making them accessible everywhere in this console session. Properties like 'readMe1' establish bindings between their names and their string values within the context of the 'JSD' object.

In addition to variables and properties, there are other categories of bindings, such as constants, functions, parameters, methods, and classes. While some of these concepts overlap or are closely related, these terms are all heavily used. They differ mainly in how they are declared (often using different keywords) and used.`

terms.string = `A string is one of the basic, primitive data types in JavaScript, used to represent textual data. It is essentially an ordered sequence of zero or more characters. To create a string value in your code, you enclose the sequence of characters within single quotes ('like this'), double quotes ("or like this"), or backticks (\`like this\`). This code representation (the characters plus the surrounding quotes or backticks) is called a "string literal".

You've already encountered many string values. The 'readMe' properties, the hints inside 'JSD.thenExpandMe', and the recommendations in 'JSD.thenExpandMe.nextStep' were all stored as strings. You may have noticed that the console also handily presents string values wrapped in quotes.

Strings are immutable, meaning once a string value is created, the sequence of characters within it cannot be changed directly. Operations that appear to modify a string (like adding text) actually create and return a new string value.`

terms.object = `An object is a complex data type that represents a collection of related data and/or functionality. Objects store their data in properties. A property is a binding entity within the object, associating a "key" (a name, usually a string) with a "value". This value can be any JavaScript data type, including other objects, functions, strings, numbers, etc.

You've been interacting primarily with objects so far. The 'JSD' variable holds an object we created to group all the guide's information and features around one point of reference. Its 'thenExpandMe' property holds another object, which in turn has a 'nextStep' property holding yet another object. This nesting demonstrates how objects can contain other objects, enabling complex data structures (sometimes visualized as "trees" or "graphs").

Objects are often used to model real-world things, group related functions (properties that hold functions are commonly called "methods"), and organize code.

There are so many common objects that they have another level of categorization called "classes" or "object types.". Functions and arrays are the most common types of typed objects.`

terms.value = `A value represents the actual data or information that your program works with. It is the concrete piece of data that results from evaluating an expression and is often stored in a binding (such as a variable or property). Every value has a specific data type that determines what kind of data it is and what operations can be performed on it.

JavaScript has seven primitive value types: strings (text, like "hello"), numbers (like 42 or 3.14), booleans (logical true or false), 'undefined' (representing the absence of a defined value), 'null' (representing the intentional absence of a value), 'symbol', and 'bigint'. Objects (including functions, arrays, and many others) are the complex data type.

We create values using literals (either as singular tokens or as complex literals made up of multiple tokens) or "constructor functions" (also often called "classes"). But we can get values from other expressions too.`

terms.function = `A function is a fundamental building block in JavaScript, essentially a reusable block of code designed to perform a specific task or calculate a value. Functions allow you to encapsulate a piece of logic, often assigning it a name via a binding (an identifier), so you can execute that logic multiple times without rewriting the code, simply by "calling" the function.

You call or "invoke" a function using its name followed by parentheses '()' (function call operator). Inside the parentheses, you can optionally pass arguments (values) for the function to work with, though the 'run' function you've used doesn't require any arguments.

Functions are themselves values (in fact, they are a special type of object). This means they can be assigned to variables (like the 'run' variable), stored as object properties (where they are commonly called "methods"), and passed around just like any other value, making them very powerful and flexible.`

welcome()

function welcome() {
  console.log(text)
}

function run() {
  run.count = (run.count || 0) + 1

  const text = runMessages.shift()
  const substitute = run.count < 3
    ? 'Was that your first function call?'
    : `Again... ${run.count} times already actually!`

  runMessages.push(text)
  console.log(String.raw(text, substitute))

  if (text == text5) {
    window.log = console.log
    JSD.terms = terms
  }
}

function raw(callSiteObject) {
  return callSiteObject
}
