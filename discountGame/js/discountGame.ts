class DiscountGame {
  discounts: { img: string; code: string }[];
  logo: HTMLImageElement; 
  result: HTMLElement;
  button: HTMLButtonElement;
  used: boolean;

  constructor(discounts: { img: string; code: string }[]) {
    this.discounts = discounts;
    const logoEl = document.getElementById("logobag");
    if (!logoEl) throw new Error("Logo element not found");
    this.logo = logoEl as HTMLImageElement;
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

  this.result.classList.add("show");
  this.button.style.display = "none";

  const intro = document.getElementById("game-intro");
  if (intro) intro.textContent = "You Win!";

}, delay);
  }
}
const imagesToPreload = [
  "images/5.png",
  "images/10.png",
  "images/15.png",
  "images/20.png",
  "images/25.png",
  "images/30.png",
  "images/BOGO.png",
];

imagesToPreload.forEach(src => {
  const img = new Image();
  img.src = src;
});
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