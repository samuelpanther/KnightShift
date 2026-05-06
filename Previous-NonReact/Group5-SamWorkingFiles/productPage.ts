class Product {
    name: string;
    price: number;
    description: string;

    constructor(name: string, price: number, description: string) {
        this.name = name;
        this.price = price;
        this.description = description;
    }
}

class Cart {
    items: { product: Product; quantity: number }[] = [];

    addItem(product: Product): void {
        const existing = this.items.find(i => i.product.name === product.name);
        if (existing) {
            existing.quantity++;
        } else {
            this.items.push({ product, quantity: 1 });
        }
        this.render();
    }

    removeItem(productName: string): void {
        this.items = this.items.filter(i => i.product.name !== productName);
        this.render();
    }

    render(): void {
        const cartContainer = document.getElementById("cart-items") as HTMLElement;
        const totalEl       = document.getElementById("cart-total") as HTMLElement;

        const total = this.items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
        totalEl.textContent = `$${total.toFixed(2)}`;

        cartContainer.innerHTML = this.items.map(({ product, quantity }) => `
            <div>
                ${product.name} x${quantity} — $${product.price.toFixed(2)}
                <button onclick="cart.removeItem('${product.name}')">Remove</button>
            </div>
        `).join("");
    }
}

// Your products
const espresso = new Product("Espresso",  3.50, "Bold double shot");
const coldBrew = new Product("Cold Brew", 4.75, "12-hour steep");
const oatLatte = new Product("Oat Latte", 5.00, "Smooth with oat milk");

const cart = new Cart();
cart.render();

// In your HTML, add to each product button:
// <button onclick="cart.addItem(espresso)">Add to Cart</button>