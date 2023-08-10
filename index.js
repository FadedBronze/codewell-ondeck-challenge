const closeButton = document.querySelector(".hamburger-menu-close-button");
const hamburgerMenuButton = document.querySelector(".hamburger-menu-button");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const desktopNav = document.querySelector(".layout-desktop");
const mobileNav = document.querySelector(".layout-mobile");
const products = document.querySelector(".products");

window.addEventListener("resize", handleWindowResize);

handleWindowResize();

let timeout;

products.addEventListener("mouseover", () => {
  clearTimeout(timeout);
  products.open = true;
});

products.addEventListener("mouseout", () => {
  timeout = setTimeout(() => {
    products.open = false;
  }, 100);
});

closeButton.addEventListener("click", () => {
  hamburgerMenu.classList.add("hidden");
  closeButton.classList.add("hidden");
});

hamburgerMenuButton.addEventListener("click", () => {
  hamburgerMenu.classList.remove("hidden");
  closeButton.classList.remove("hidden");
});

function handleWindowResize() {
  console.log("ran");

  if (window.innerWidth < 1280) {
    document.querySelector(".yellow-heading br")?.remove();
  } else {
    if (!document.querySelector(".yellow-heading br")) {
      document
        .querySelector(".yellow-heading")
        .prepend(document.createElement("br"));
    }
  }

  if (window.innerWidth < 1100) {
    mobileNav.classList.remove("hidden");
    desktopNav.classList.add("hidden");
  } else {
    mobileNav.classList.add("hidden");
    desktopNav.classList.remove("hidden");
  }

  if (window.innerWidth < 1100) {
    const img = document.querySelector(".home > img");

    if (img) {
      img.remove();
    }
  } else {
    const img = document.querySelector(".home > img");

    if (!img) {
      const image = document.createElement("img");

      image.src = "Assets/Hero Image.png";
      image.className = "hero-image";

      document.querySelector(".home").appendChild(image);
    }
  }
}
