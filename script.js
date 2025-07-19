import { products } from "./products.js";

const productContainer = document.getElementById("product-container");

const showProduct = (productsData) => {
  let cards = "";
  productsData.forEach((value) => {
    cards += `
        <div class="product-card">
            <div class="product-image">
                <img src="${value.image}" style="object-fit: contain;" alt="Smartphone">
                <div class="product-badge sale">Sale</div>
            </div>
            <div class="product-info">
                <h3 class="product-name">${value.name}</h3>
                <p class="product-description">${value.description}</p>
                <div class="product-rating">
                    <div class="stars">
                        <span class="star filled">★</span>
                        <span class="star filled">★</span>
                        <span class="star filled">★</span>
                        <span class="star filled">★</span>
                        <span class="star">★</span>
                    </div>
                    <span>${value.rate}</span>
                </div>
                <div class="product-price">
                    <span class="current">$${value.price}</span>
                    <span class="original">$${value.price}</span>
                </div>
                <div class="product-actions">
                    <a href="product-detail.html?id=${value.id}" class="btn btn-outline">View</a>
                    <button class="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    `;
  });
  productContainer.innerHTML = cards;
};
showProduct(products);
