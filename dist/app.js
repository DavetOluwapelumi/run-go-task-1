"use strict";
// Base class Person
class Person {
    // the constructor function of the object
    constructor(firstName, lastName, email, occupation) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.occupation = occupation;
    }
    // Methods of the Oject
    book_a_car() {
        return `${this.firstName} ${this.lastName} booked a car`;
    }
    cancel_a_booking() {
        return `${this.firstName} ${this.lastName} cancelled a booking`;
    }
    make_a_payment() {
        return `${this.firstName} ${this.lastName} made a payment`;
    }
    reschedule_booking() {
        return `${this.firstName} ${this.lastName} rescheduled a booking`;
    }
    track_car_movement() {
        return `${this.firstName} ${this.lastName} tracked a car movement`;
    }
}
// Driver inherits the properties of class Person
class Driver extends Person {
    // constructor function for driver
    constructor(firstName, lastName, email) {
        super(firstName, lastName, email, "Driver");
        this.rating = Math.random() * 5;
    }
    // Driver methods
    introduce() {
        return `I am ${this.firstName} ${this.lastName} a ${this.occupation} with a rating of ${this.rating.toFixed(1)}`;
    }
    request_payment() {
        return `${this.firstName} ${this.lastName} requested for payment`;
    }
}
// Student inherits the properties of class Person
class Student extends Person {
    constructor(firstName, lastName, email) {
        super(firstName, lastName, email, "student");
    }
}
// Admin inherits the properties of class Person
class Admin extends Person {
    constructor(firstName, lastName, email) {
        super(firstName, lastName, email, "admin");
    }
}
// Testing the student Class
let student1 = new Student("David", "Titilayo", "titilayodavid405@gmail.com");
console.log(student1.make_a_payment());
console.log(student1.book_a_car());
console.log(student1.cancel_a_booking());
// Testing the Driver Class
let driver1 = new Driver("Bolu", "Bassey", "bolu@gmail.com");
console.log(driver1.introduce());
console.log(driver1.request_payment());
// Testing the Admin Class
let admin = new Admin("Emmanuel", "Lucky", "emmanuel@gmail.com");
console.log(student1.reschedule_booking());
console.log(student1.track_car_movement());
