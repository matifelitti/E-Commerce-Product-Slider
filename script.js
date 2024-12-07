let currentProduct = 0;

const products = document.querySelectorAll(".product");
const totalProducts = products.length;
const productSlider = document.querySelector(".product-slider");

function navigate(direction) {
  if (direction === "next") {
    currentProduct = (currentProduct + 1) % totalProducts;
  } else if (direction === "prev") {
    currentProduct = (currentProduct - 1 + totalProducts) % totalProducts;
  }

  updateSlider();
}

function updateSlider() {
  const offset = -currentProduct * products[0].offsetWidth;
  productSlider.style.transform = `translateX(${offset}px)`;

  const productColor = products[currentProduct].getAttribute("data-color");
  document.body.style.backgroundColor = productColor;
}
