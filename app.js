var person = {
    firstName: 'Monish',
    lastName: 'Narwani',
    greet: function () {
        console.log('Hello: ' + this.firstName + ' ' + this.lastName);
    }
};

person.greet();
person['greet']();