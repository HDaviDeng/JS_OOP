//All objectsin JacaScript (witha few exceptions) hava a prototype.
//Also, an object's prototype itself is an object.

function Bird(name) {
    this.name = name;
} 

typeof Bird.prototype;

//In a browser, the global name variable has special meaning. This has caused people a lot of confusion over the years as they tried to create their own global variable named name and then found it coerced into a string.
//The checker you are using doesn't appear able to special case an assignment to name if it follows a declaration of let name.
//You can see that the message goes away if you put the code inside a function.

//Because a prototype is an object, a prototype can have its own prototype! In this case, the prototype of Bird.prototype is Object.prototype:

Object.prototype.isPrototypeOf(Bird.prototype);

//How is this useful? You may recall the hasOwnProperty method from a previous challenge:

let duck = new Bird("Donald");
duck.hasOwnProperty("name");

//The hasOwnProperty method is defined in Object.prototype, which can be accessed by Bird.prototype, which can then be accessed by duck. This is an example of the prototype chain.
//In this prototype chain, Bird is the supertype for duck, while duck is the subtype. Object is a supertype for both Bird and duck. Object is a supertype for all objects in JavaScript.
//Therefore, any object can use the hasOwnProperty method.

