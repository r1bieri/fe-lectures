/**
 * Created by Rolf on 09.07.2014.
 */
var fruit = {color : 'red' };
var apple = Object.create(fruit);
var banana = Object.create(fruit);

apple.color = 'green';
banana.color = 'yellow'
console.log(apple.color);
console.log(banana.color);
console.log(fruit.color);

// delete apple.color;