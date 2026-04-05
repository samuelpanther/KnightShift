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
  var prevButton = document.getElementById("prevStep");
  var stepPills = document.querySelectorAll(".step-pill");
  var stepPanels = document.querySelectorAll(".step-panel");

  if (!nextButton || !stepPills.length || !stepPanels.length) {
    return;
  }

  var currentStep = 0;

  function renderStep() {
    stepPills.forEach(function (pill, index) {
      pill.classList.toggle("active", index === currentStep);
    });

    stepPanels.forEach(function (panel, index) {
      panel.hidden = index !== currentStep;
    });

    if (prevButton) {
      prevButton.hidden = currentStep === 0;
    }

    nextButton.textContent =
      currentStep === stepPanels.length - 1 ? "Place Order" : "Continue";
  }

  stepPills.forEach(function (pill, index) {
    pill.addEventListener("click", function () {
      if (index <= currentStep) {
        currentStep = index;
        renderStep();
      }
    });
  });

  if (prevButton) {
    prevButton.addEventListener("click", function () {
      if (currentStep > 0) {
        currentStep -= 1;
        renderStep();
      }
    });
  }

  nextButton.addEventListener("click", function () {
    if (currentStep === 0 && !validateShipping()) return;
    if (currentStep === 1 && !validatePayment()) return;

    if (currentStep < stepPanels.length - 1) {
      currentStep += 1;
      renderStep();
    } else {
      alert("Demo complete: your order is ready for review.");
    }
  });

  renderStep();
}

);
  renderStep();

function showError(field, message) {
  field.classList.add("is-invalid");
  const error = document.getElementById(field.id + "-error");
  if (error) error.textContent = message;
}

function clearError(field) {
  field.classList.remove("is-invalid");
  const error = document.getElementById(field.id + "-error");
  if (error) error.textContent = "";
}

function validateShipping() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const address = document.getElementById("address");

  let valid = true;

  if (!name.value.trim()) {
    showError(name, "Full name is required");
    valid = false;
  } else clearError(name);

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim()) {
    showError(email, "Email is required");
    valid = false;
  } else if (!emailPattern.test(email.value)) {
    showError(email, "Enter a valid email");
    valid = false;
  } else clearError(email);

  if (!address.value.trim()) {
    showError(address, "Address is required");
    valid = false;
  } else clearError(address);

  return valid;
}

function validatePayment() {
  const card = document.getElementById("card");

  if (!card.value.trim()) {
    showError(card, "Card number is required");
    return false;
  }

  clearError(card);
  return true;
}


}
