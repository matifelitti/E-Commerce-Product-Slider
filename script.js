let currentProduct = 0;

const products = document.querySelectorAll(".product");
const totalProducts = products.length;
const productSlider = document.querySelector(".product-slider");
const sliderContainer = document.querySelector(".slider-container");

function updateSlider() {
  const offset = -currentProduct * products[0].offsetWidth;
  productSlider.style.transform = `translateX(${offset}px)`;

  const productColor = products[currentProduct].getAttribute("data-color");
  document.body.style.backgroundColor = productColor;
}

sliderContainer.addEventListener("click", () => {
  currentProduct = (currentProduct + 1) % totalProducts;
  updateSlider();
});

updateSlider();
