var DiscountGame = /** @class */ (function () {
    function DiscountGame(discounts) {
        var _this = this;
        this.discounts = discounts;
        this.logo = document.getElementById("logo");
        this.result = document.getElementById("result");
        this.button = document.getElementById("reveal-btn");
        this.used = false;
        this.button.addEventListener("click", function () { return _this.handleClick(); });
    }
    DiscountGame.prototype.getRandomDiscount = function () {
        var index = Math.floor(Math.random() * this.discounts.length);
        return this.discounts[index];
    };
    DiscountGame.prototype.handleClick = function () {
        var _this = this;
        if (this.used)
            return;
        this.used = true;
        var reward = this.getRandomDiscount();
        this.logo.style.opacity = "0";
        var delay = 400 + Math.random() * 300;
        setTimeout(function () {
            _this.logo.style.display = "none";
            _this.result.innerHTML = "\n    <img src=\"".concat(reward.img, "\" />\n    <p>Your reward:</p>\n    <p><strong>").concat(reward.code, "</strong></p>\n    <p>Enter this code at checkout</p>\n  ");
            _this.result.style.opacity = "1";
            _this.button.style.display = "none";
            var intro = document.getElementById("game-intro");
            if (intro)
                intro.textContent = "You Win!";
        }, delay);
    };
    return DiscountGame;
}());
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
