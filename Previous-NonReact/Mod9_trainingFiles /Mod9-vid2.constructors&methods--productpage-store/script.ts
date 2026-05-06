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