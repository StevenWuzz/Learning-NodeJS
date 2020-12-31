var events = require('events');
 
class Person extends events.EventEmitter{
    constructor(name){
        super();
        this.name = name;
    }
}
 
var james = new Person('james'); 
var mary = new Person('mary'); 
var ruy = new Person('ruy');
var people = [james, mary, ruy];

/*
people.forEach(person => {
    person.on('speak', msg => {
        console.log(person.name + ' said: ' + msg);
    });
});
*/

people.forEach(function(person){
    person.on('speak', function(msg){
        console.log(person.name + ' said: ' + msg);
    });
});

james.emit('speak', 'hey dudes');