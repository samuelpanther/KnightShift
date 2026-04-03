class DiscountGame {
  discounts: { img: string; code: string }[];
  logo: HTMLElement; 
  result: HTMLElement;
  button: HTMLButtonElement;
  used: boolean;

  constructor(discounts: { img: string; code: string }[]) {
    this.discounts = discounts;
    this.logo = document.getElementById("logo")!;
    this.result = document.getElementById("result")!;
    this.button = document.getElementById("reveal-btn") as HTMLButtonElement;
    this.used = false;

    this.button.addEventListener("click", () => this.handleClick());
  }

  getRandomDiscount() {
    const index = Math.floor(Math.random() * this.discounts.length);
    return this.discounts[index];
  }

  handleClick() {
    if (this.used) return;
    this.used = true;

    const reward = this.getRandomDiscount();

    this.logo.style.opacity = "0";

    const delay = 400 + Math.random() * 300;

    setTimeout(() => {
  this.logo.style.display = "none";

  this.result.innerHTML = `
    <img src="${reward.img}" />
    <p>Your reward:</p>
    <p><strong>${reward.code}</strong></p>
    <p>Enter this code at checkout</p>
  `;

  this.result.style.opacity = "1";
  this.button.style.display = "none";

  const intro = document.getElementById("game-intro");
  if (intro) intro.textContent = "You Win!";

}, delay);
  }
}

// start the game
new DiscountGame([
  { img: "images/5.png", code: "KS5TY" },
  { img: "images/10.png", code: "TY10" },
  { img: "images/15.png", code: "15KS" },
  { img: "images/20.png", code: "K20S" },
  { img: "images/25.png", code: "KS25" },
  { img: "images/30.png", code: "30TY" },
  { img: "images/BOGO.png", code: "KSBOGO" },
]);