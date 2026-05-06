var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());
var product1 = new Product();
product1.name = "Laptop";
product1.price = 999.99;
product1.description = "A high-performance laptop suitable for all your computing needs.";
var product2 = new Product();
product2.name = "Mouse";
product2.price = 29;
product2.description = "Wireless ergonomic mouse";
var product3 = new Product();
product3.name = "Keyboard";
product3.price = 79;
product3.description = "Wireless ergonomic keyboard";
var output = document.getElementById("output");
output.innerHTML = "                 \n    <div class=\"product\">\n    <h3>".concat(product1.name, "</h3>\n    <p class=\"price\">$").concat(product1.price, "</p>\n    </div>\n\n    <div class=\"product\">\n    <h3>").concat(product2.name, "</h3>\n    <p class=\"price\">$").concat(product2.price, "</p>\n\n    <div class=\"product\">\n    <h3>").concat(product3.name, "</h3>\n    <p class=\"price\">$").concat(product3.price, "</p>\n    ");
/* The backticks ` above allow you to write multi-line strings and embed variables using ${}.
This will correctly render your product details in the HTML element with id "output". */
