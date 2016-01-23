//Object Literal
var my_car = {
brand: "Prius",
wheels: 4
}

//Constructor Function
function Car(brand, wheels){
this.brand = brand;
this.wheels = wheels; 
}


//Here we are instantiating a new instance of Car
var myCar = new Car("toyota", 4);
var someCar = new Car("maserati", 4);


//accessing object attribute
console.log(myCar.brand + " is the brand of myCar!");


function Game(company, names, remake, sequel){
	this.company = company;
	this.names = names; 
	this.remake = remake;
	this.sequel = sequel;
}

var pokemon_5 = new Game("Nintendo", "Silver", "SoulSilver", true)

//prototypical object
Game.prototype.indie_game = function (){
		return "Your game is from " + this.company;
	}

console.log(pokemon_5.indie_game() + " - method really accessed");


var pokemon_1 = {
	company: "Nintendo",
	name: "Pokemon Red",
	year: "1996",
	"sequel" : true,
	names: function(){
		return "Your game's name is " + this.name;
	}
}

//accessing the method
console.log(pokemon_1.names());


//////////////////////////////////////////////////////////////////////////
//getting back to this
function Multiplier(number){
	var lastVal;
	this.number = number;

	this.multiply = function(){
		
        var a = this.number;
        var b = a * 1;
        lastValue = b;

	}

	this.getCurrentValue = function(){
		return lastVal;
	}
}


var myMult = new Multiplier(5);
console.log(myMult.multiply());
console.log(myMult.getCurrentValue());


///////////////////////////////////////////////////////////////////

function Person(fname, lname){
	this.fname = fname;
	this.lname = lname;
	this.name = function(){
		return this.fname + " " + this.lname;
		} 
}

function Teacher(numClass, students, subject){
	this.numClass = numClass;
	this.students = students;
	this.subject = subject;
}


function Student(clases, friends, hobbies, major){
	this.clases = clases;
	this.friends = friends;
	this.hobbies = hobbies
	this.major = major;
}

Teacher.prototype = new Person();
Student.prototype = new Person();

function School(){
	this.Student = [];
	this.Teacher = [];
}

var VP = new Teacher(3, 80, "CS");
var Aniqa = new Student(5, 5, "Eating", "CS");
var Tahi = new Student(5, 6, "Makeup", "Law");
var Alex = new Student(5, 3, "Pi", "CS");
var Syed = new Student(5, 1, "Cars", "Accounting");

var raziSchool = new School();
raziSchool.Teacher.push(VP);
raziSchool.Student.push(Aniqa);
raziSchool.Student.push(Tahi);
raziSchool.Student.push(Alex);
raziSchool.Student.push(Syed);

Aniqa.lname = "Wahid";
console.log("Last name: " + Aniqa.lname);

console.log(raziSchool.Student);
console.log(raziSchool.Teacher);


///////////////////////////////////////////////////////////////////
function Album(){
	this.photoAlbum = [];
}

function Photo(name, location){
	this.name = name;
	this.location = location;
}

var a = new Photo("Aniqa", "Queens");
var b = new Photo("Alex", "Manhattan");

var albums = new Album();
albums.photoAlbum.push(a);
albums.photoAlbum.push(b);
console.log(albums.photoAlbum);
