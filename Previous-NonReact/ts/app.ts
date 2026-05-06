window.addEventListener("load", () => {
  setActiveNav();
  initializeProductFilters();
  initializeQuantityButtons();
  initializeCheckoutStepper();
});

function setActiveNav(): void {
  const currentPage: string = window.location.pathname.split("/").pop() || "index.html";
  const navLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll("[data-page]");

  navLinks.forEach((link: HTMLAnchorElement) => {
    if (link.dataset.page === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
}

function initializeProductFilters(): void {
  const filterButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll(".filter-btn");
  const cards: NodeListOf<HTMLElement> = document.querySelectorAll(".product-card[data-category]");

  if (!filterButtons.length || !cards.length) {
    return;
  }

  filterButtons.forEach((button: HTMLButtonElement) => {
    button.addEventListener("click", () => {
      const category: string = button.dataset.filter || "all";

      filterButtons.forEach((btn: HTMLButtonElement) => btn.setAttribute("aria-pressed", "false"));
      button.setAttribute("aria-pressed", "true");

      cards.forEach((card: HTMLElement) => {
        const cardCategory: string | null = card.dataset.category || null;
        const shouldShow: boolean = category === "all" || category === cardCategory;
        card.style.display = shouldShow ? "block" : "none";
      });
    });
  });
}

function initializeQuantityButtons(): void {
  const decrementButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll("[data-qty='decrease']");
  const incrementButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll("[data-qty='increase']");

  decrementButtons.forEach((button: HTMLButtonElement) => {
    button.addEventListener("click", () => updateQuantity(-1));
  });

  incrementButtons.forEach((button: HTMLButtonElement) => {
    button.addEventListener("click", () => updateQuantity(1));
  });
}

function updateQuantity(change: number): void {
  const quantityInput = document.getElementById("cartQuantity") as HTMLInputElement | null;
  const subtotal = document.getElementById("cartSubtotal") as HTMLElement | null;

  if (!quantityInput || !subtotal) {
    return;
  }

  const currentValue: number = parseInt(quantityInput.value, 10) || 1;
  const nextValue: number = Math.max(1, currentValue + change);
  const unitPrice: number = 18;

  quantityInput.value = nextValue.toString();
  subtotal.textContent = `$${(nextValue * unitPrice).toFixed(2)}`;
}

function initializeCheckoutStepper(): void {
  const nextButton = document.getElementById("nextStep") as HTMLButtonElement | null;
  const stepPills: NodeListOf<HTMLElement> = document.querySelectorAll(".step-pill");
  const stepPanels: NodeListOf<HTMLElement> = document.querySelectorAll(".step-panel");

  if (!nextButton || !stepPills.length || !stepPanels.length) {
    return;
  }

  let currentStep: number = 0;

  const renderStep = (): void => {
    stepPills.forEach((pill: HTMLElement, index: number) => {
      pill.classList.toggle("active", index === currentStep);
    });

    stepPanels.forEach((panel: HTMLElement, index: number) => {
      panel.hidden = index !== currentStep;
    });

    nextButton.textContent = currentStep === stepPanels.length - 1 ? "Place Order" : "Continue";
  };

  nextButton.addEventListener("click", () => {
    if (currentStep < stepPanels.length - 1) {
      currentStep += 1;
      renderStep();
    } else {
      alert("Demo complete: your order is ready for review.");
    }
  });

  renderStep();
}
