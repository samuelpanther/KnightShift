window.addEventListener("load", function () {
  setActiveNav();
  initializeProductFilters();
  initializeQuantityButtons();
  initializeCheckoutStepper();
});
function setActiveNav() {
  var currentPage = window.location.pathname.split("/").pop() || "index.html";
  var navLinks = document.querySelectorAll("[data-page]");
  navLinks.forEach(function (link) {
    if (link.dataset.page === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
}
function initializeProductFilters() {
  var filterButtons = document.querySelectorAll(".filter-btn");
  var cards = document.querySelectorAll(".product-card[data-category]");
  if (!filterButtons.length || !cards.length) {
    return;
  }
  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var category = button.dataset.filter || "all";
      filterButtons.forEach(function (btn) { return btn.setAttribute("aria-pressed", "false"); });
      button.setAttribute("aria-pressed", "true");
      cards.forEach(function (card) {
        var cardCategory = card.dataset.category || null;
        var shouldShow = category === "all" || category === cardCategory;
        card.style.display = shouldShow ? "block" : "none";
      });
    });
  });
}
function initializeQuantityButtons() {
  var decrementButtons = document.querySelectorAll("[data-qty='decrease']");
  var incrementButtons = document.querySelectorAll("[data-qty='increase']");
  decrementButtons.forEach(function (button) {
    button.addEventListener("click", function () { return updateQuantity(-1); });
  });
  incrementButtons.forEach(function (button) {
    button.addEventListener("click", function () { return updateQuantity(1); });
  });
}
function updateQuantity(change) {
  var quantityInput = document.getElementById("cartQuantity");
  var subtotal = document.getElementById("cartSubtotal");
  if (!quantityInput || !subtotal) {
    return;
  }
  var currentValue = parseInt(quantityInput.value, 10) || 1;
  var nextValue = Math.max(1, currentValue + change);
  var unitPrice = 18;
  quantityInput.value = nextValue.toString();
  subtotal.textContent = "$" + (nextValue * unitPrice).toFixed(2);
}
function initializeCheckoutStepper() {
  var nextButton = document.getElementById("nextStep");
  var stepPills = document.querySelectorAll(".step-pill");
  var stepPanels = document.querySelectorAll(".step-panel");
  if (!nextButton || !stepPills.length || !stepPanels.length) {
    return;
  }
  var currentStep = 0;
  var renderStep = function () {
    stepPills.forEach(function (pill, index) {
      pill.classList.toggle("active", index === currentStep);
    });
    stepPanels.forEach(function (panel, index) {
      panel.hidden = index !== currentStep;
    });
    nextButton.textContent = currentStep === stepPanels.length - 1 ? "Place Order" : "Continue";
  };
  nextButton.addEventListener("click", function () {
    if (currentStep < stepPanels.length - 1) {
      currentStep += 1;
      renderStep();
    }
    else {
      alert("Demo complete: your order is ready for review.");
    }
  });
  renderStep();
}
