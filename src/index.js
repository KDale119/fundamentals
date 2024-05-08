"use strict";
exports.__esModule = true;
var Employee = /** @class */ (function () {
    function Employee(name, age, email) {
        var _this = this;
        this.name = name;
        this.age = age;
        this.email = email;
        this.displayInfo = function () {
            console.log(_this.info);
        };
        this.info = name + " " + age + " " + email;
    }
    return Employee;
}());
var Box = /** @class */ (function () {
    function Box(value) {
        this.value = value;
    }
    Box.prototype.getValue = function () {
        return this.value;
    };
    Box.prototype.setValue = function (value) {
        this.value = value;
    };
    return Box;
}());
var me = {
    age: 26,
    name: "Kayla",
    isFemale: true,
    favNumbers: [7, 9, 15, 21],
    grossNumbers: [3, 6, 13]
};
console.log(me);
var person = {
    name: "Bobby",
    age: 7,
    email: "bobbyjo123@gmail.com"
};
console.log(person);
var emp = new Employee("Bobby", 7, "bobbyjo123@gmail.com");
console.log(emp);
var box = new Box(10);
console.log(box.value);
