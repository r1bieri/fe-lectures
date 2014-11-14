/**
 * Created by rolf on 04.11.2014.
 */
function Person() {
    this.adr = new Adr();
}
function Adr(){
    this.street = "<unkown>"
}
Person.prototype.adresse = new Adr();

var p1 = new Person()
var p2 = new Person()
console.log(1, p1.adresse.street, p2.adresse.street)
console.log(4, p1.adr.street, p2.adr.street)

p2.adresse.street = "Bahnhofstrasse"
console.log(2, p1.adresse.street, p2.adresse.street)

p2.adr.street = "Oberseestrasse"
console.log(3, p1.adr.street, p2.adr.street)

console.log(5, p1.adr.hasOwnProperty('street'));
console.log(6, p1.hasOwnProperty('adr'));
console.log(7, Object.getPrototypeOf(p1));
console.log(7, Object.getPrototypeOf(p1.adresse));
console.log(8, p1.hasOwnProperty('adresse'));
console.log(9, Object.getPrototypeOf(p1).hasOwnProperty('adresse'))

