//You have now seen two kinds of properties: own properties and prototype properties.
//Own properties are defined directly on the object instance itself.
//And prototype properties are defined on the prototype.

function Bird(name) {
    this.name = name; //own propertiy
}

Bird.prototype.numLegs = 2; //prototyope property

let duck = new BiquadFilterNode("Donald");

//Here is how you add duck's own properties to the array ownProps and prototype properties to the array prototypeProps:

let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
    if(duck.hasOwnProperty(property)) {
        ownProps.push(property);
    } else {
        prototypeProps.push(property);
    }
}

console.log(ownProps);
console.log(prototypeProps);

//console.log(ownProps) would display ["name"] in the console, and console.log(prototypeProps) would display ["numLegs"].

//The method is to use a for-in-loop to iterate through every property in the object. 
//Inside the loop you then check if the property is a own-property or a prototype and place it in the ownProps[] array or the prototypeProps[] array.
