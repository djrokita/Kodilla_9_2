var femaleNames = ['Kasia', 'Ania', 'Natalia', 'Monika', 'Jola'];
var maleNames = ['Grzech', 'Piotr', 'Paweł' , 'Jarek', 'Maksym'];

var allNames = femaleNames.concat(maleNames);

var newName = 'Marian';

if (allNames.indexOf(newName) < 0) allNames.push(newName);

console.log(allNames);
