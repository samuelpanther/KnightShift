/* lecture coding file for inheritance and access modifiers
inheritance lets us create a new class based on an existing class, reusing its propery and methods

access modifiers control who can access class properties
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    //we are adding getAge because we added the private access modifier to age
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
// now we'll create an employee class that inherits from person
//we use the extends key word to inherit all 
// properties and methods from the parent class, Person
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, lastName, age, department) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.department = department;
        return _this;
    }
    Employee.prototype.getEmployeeInfo = function () {
        return "".concat(this.getFullName(), " works in ").concat(this.department);
    };
    return Employee;
}(Person));
//now we'll create some employee objects
var emp1 = new Employee("John", "Smith", 35, "Engineering");
var emp2 = new Employee("Jane", "Doe", 28, "Marketing");
var emp3 = new Employee("Bob", "Johnson", 42, "Sales");
var output = document.getElementById("output");
output.innerHTML = "\n    <div class=\"employee\">\n        <h3>".concat(emp1.getFullName(), "</h3>\n        <p>Age: ").concat(emp1.getAge(), "</p>\n        <p class=\"department\">Department: ").concat(emp1.department, "</p>\n    </div>\n\n    <div class=\"employee\">\n        <h3>").concat(emp2.getFullName(), "</h3>\n        <p>Age: ").concat(emp2.getAge(), "</p>\n        <p class=\"department\">Department: ").concat(emp2.department, "</p>\n    </div>\n\n    <div class=\"employee\">\n        <h3>").concat(emp3.getFullName(), "</h3>\n        <p>Age: ").concat(emp3.getAge(), "</p>\n        <p class=\"department\">Department: ").concat(emp3.department, "</p>\n    </div>\n    ");
//so above, employee inherited all the methods e.g. getFullName from the Person class
//and now we can add methods to the employee class -
//  this will be inserted under Employee constructor
/*    everything below apparently is not a part of this lecture

class Product {
    name: string;
    price: number;
    description: string;

    constructor(name: string, price: number, description: string) {
        this.name = name;
        this.price = price;
        this.description = description;      //the "this" keyword refers to the current object being created
    }

    getDiscountedPrice(discountPercent: number): number {
        let discount = this.price * (discountPercent / 100);  //we use this.price to access product's current price
        return this.price - discount;
    }

    getDisplayInfo(): string {
        return `${this.name} - $${this.price} - ${this.description}`;
    }
}

let product1 = new Product("Laptop", 999, "Powerful laptop for work and gaming");
let product2 = new Product("Mouse", 29, "Wireless ergonomic mouse");
let product3 = new Product("Keyboard", 79, "Mechanical keyboard with RBG lighting");

console.log(product1.getDisplayInfo());
console.log(product2.getDisplayInfo());
console.log(product3.getDisplayInfo());

let output = document.getElementById("output") as HTMLElement;

output.innerHTML = `

`


// the discounted prices added below were created after the getDiscountedPrice method


output.innerHTML = `
<div class="product">
<h3>${product1.name}</h3>
<p>${product1.description}</p>
<p class = "price">$${product1.price}</p>
<p style="color: #e74c3c;">20% off: $${product1.getDiscountedPrice(20)}</p>
</div>

<div class="product">
<h3>${product2.name}</h3>
<p>${product2.description}</p>
<p class = "price">$${product2.price}</p>
<p style="color: #e74c3c;">20% off: $${product1.getDiscountedPrice(20)}</p>
</div>

<div class="product">
<h3>${product3.name}</h3>
<p>${product3.description}</p>
<p class = "price">$${product3.price}</p>
<p style="color: #e74c3c;">20% off: $${product1.getDiscountedPrice(20)}</p>
</div>

`;

/*above, we're calling the method and passing 20 for 20% off. we'll add another method that combines the product
information into a single formatted string  - this will be the getDisplayInfo */
/* we will now create a method (function that performs actions on objects data)
--we'll create a method that calculates a discounted price. to do this, we'll go back
and add it in under the constructor within the overarching curly bracket */ 
