//Up until now you have been adding properties to the prototype individually:

Bird.prototype.numLegs = 2;

//This becomes tedious after more than a few properties.

Bird.prototype.eat = function() {
    console.log("nom nom nom");
}

Bird.prototype.describe = function() {
    console.log("My name is " + this.name);
}

//Amore efficient way is to set the prototype to a new object that already contains the properties.
//This way, the properties are added all at once:

Bird.prototype = {
    numlegs: 2,
    eat:function() {
        console.log("nom nom nom");
    },
    describe: function() {
        console.log("My name is " + this.name);
    }
};