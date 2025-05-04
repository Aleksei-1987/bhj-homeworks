const products = document.querySelectorAll(".product");
const cartProduct = document.querySelector(".cart__products");

products.forEach((product) => {
  const value = product.querySelector(".product__quantity-value");
  const productAdd = product.querySelector(".product__add");

  product.addEventListener("click", (e) => {
    let target = e.target;

    if (
      target.classList.contains("product__quantity-control_dec") &&
      value.textContent > 1
    ) {
      value.textContent--;
    }

    if (target.classList.contains("product__quantity-control_inc")) {
      value.textContent++;
    }
  });

  productAdd.addEventListener("click", () => {
    const productId = product.getAttribute("data-id");

    const existingProductInCart = Array.from(cartProduct.children).find(
      (item) => item.getAttribute("data-id") === productId
    );

    if (existingProductInCart) {
      let currentCount = parseInt(
        existingProductInCart.querySelector(".cart__product-count").innerText,
        10
      );
      existingProductInCart.querySelector(".cart__product-count").innerText =
        currentCount + parseInt(value.textContent, 10);
    } else {
      const newCartItemHTML = `
        <div class="cart__product" data-id="${productId}">
            <img class="cart__product-image" src="${
              product.querySelector(".product__image").src
            }" />
            <div class="cart__product-count">${value.textContent}</div>
            <button class="cart__product-remove">Удалить</button>
        </div>
          `;
      cartProduct.insertAdjacentHTML("beforeend", newCartItemHTML);
    }
  });
});

cartProduct.addEventListener("click", (e) => {
  if (e.target.matches(".cart__product-remove")) {
    e.target.closest(".cart__product").remove();
  }
});
