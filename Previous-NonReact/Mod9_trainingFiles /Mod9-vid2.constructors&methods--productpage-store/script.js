var Product = /** @class */ (function () {
    function Product(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description; //the "this" keyword refers to the current object being created
    }
    Product.prototype.getDiscountedPrice = function (discountPercent) {
        var discount = this.price * (discountPercent / 100); //we use this.price to access product's current price
        return this.price - discount;
    };
    Product.prototype.getDisplayInfo = function () {
        return "".concat(this.name, " - $").concat(this.price, " - ").concat(this.description);
    };
    return Product;
}());
var product1 = new Product("Laptop", 999, "Powerful laptop for work and gaming");
var product2 = new Product("Mouse", 29, "Wireless ergonomic mouse");
var product3 = new Product("Keyboard", 79, "Mechanical keyboard with RBG lighting");
console.log(product1.getDisplayInfo());
console.log(product2.getDisplayInfo());
console.log(product3.getDisplayInfo());
var output = document.getElementById("output");
output.innerHTML = "\n\n";
// the discounted prices added below were created after the getDiscountedPrice method
output.innerHTML = "\n<div class=\"product\">\n<h3>".concat(product1.name, "</h3>\n<p>").concat(product1.description, "</p>\n<p class = \"price\">$").concat(product1.price, "</p>\n<p style=\"color: #e74c3c;\">20% off: $").concat(product1.getDiscountedPrice(20), "</p>\n</div>\n\n<div class=\"product\">\n<h3>").concat(product2.name, "</h3>\n<p>").concat(product2.description, "</p>\n<p class = \"price\">$").concat(product2.price, "</p>\n<p style=\"color: #e74c3c;\">20% off: $").concat(product1.getDiscountedPrice(20), "</p>\n</div>\n\n<div class=\"product\">\n<h3>").concat(product3.name, "</h3>\n<p>").concat(product3.description, "</p>\n<p class = \"price\">$").concat(product3.price, "</p>\n<p style=\"color: #e74c3c;\">20% off: $").concat(product1.getDiscountedPrice(20), "</p>\n</div>  \n\n");
/*above, we're calling the method and passing 20 for 20% off. we'll add another method that combines the product
information into a single formatted string  - this will be the getDisplayInfo */
/* we will now create a method (function that performs actions on objects data)
--we'll create a method that calculates a discounted price. to do this, we'll go back
and add it in under the constructor within the overarching curly bracket */ 
