let swan = new Bird();
swan.name = "Carlos";
swan.color = "white";

//It is possible to change the properties of each bird manually but that would be a lot of work, if you want birds with different values for name and color.

//Suppose you were writing a program to keep track of hundreds or even thousands of different birds in an aviary. It would take a lot of time to create all the birds, then change the properties to different values for every one.
//To more easily vreate different Bird objects, you can design your Bird constructor to accept parameters:

function Bird(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
}

//Then pass in the values as arguments to define each unique bitd into the Bird constructor: 

// let cardinal = new Bird("Bruce", "red");

//This gives a new instance of Bird with name and color properties set to Bruce and red, respectively. The numLegs property is still set to 2. The cardinal has these properties:

cardinal.name
cardinal.color
cardinal.numLegs

//The constructor is more flexible. It's now possible to define the properties for each Bird at the time it is created, which is one way that JS constructors are so useful. 
//They group objects together based on shared characteristics and behavior and define a blueprint that automates their cteation.