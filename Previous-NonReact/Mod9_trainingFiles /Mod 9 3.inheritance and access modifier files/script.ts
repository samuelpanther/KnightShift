/* lecture coding file for inheritance and access modifiers 
inheritance lets us create a new class based on an existing class, reusing its propery and methods

access modifiers control who can access class properties

child classes inherit everytihing from their parent classes, and we use super 
in the child constructor to call the parent constructor 
*/

class Person {
    firstName: string; 
    lastName: string; 
    private age: number;    //now we're making age private in Person class

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    //we are adding getAge because we added the private access modifier to age
    getAge(): number {
        return this.age;
}
}

// now we'll create an employee class that inherits from person

//we use the extends key word to inherit all 
// properties and methods from the parent class, Person

class Employee extends Person {
    department: string;
   
    constructor(firstName: string, lastName: string, age: number, department: string) {
    super(firstName, lastName, age);   //notice use of super to call the parent class constructor
    this.department = department;
    }

    getEmployeeInfo(): string {   //adding a method specifically for employee, notice it also still calls the getFullName  inherited Person
    return `${this.getFullName()} works in ${this.department}`;
}
}

    //now we'll create some employee objects

    let emp1 = new Employee("John", "Smith", 35, "Engineering");
    let emp2 = new Employee("Jane", "Doe", 28, "Marketing");
    let emp3 = new Employee("Bob", "Johnson", 42, "Sales");

    let output = document.getElementById("output") as HTMLElement;


    output.innerHTML = `
    <div class="employee">
        <h3>${emp1.getFullName()}</h3>
        <p>Age: ${emp1.getAge()}</p>
        <p class="department">Department: ${emp1.department}</p>
    </div>

    <div class="employee">
        <h3>${emp2.getFullName()}</h3>
        <p>Age: ${emp2.getAge()}</p>
        <p class="department">Department: ${emp2.department}</p>
    </div>

    <div class="employee">
        <h3>${emp3.getFullName()}</h3>
        <p>Age: ${emp3.getAge()}</p>
        <p class="department">Department: ${emp3.department}</p>
    </div>
    `;

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