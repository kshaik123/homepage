// Sample product data (to be replaced with data from backend)
const products = [
  { id: 1, name: "Red Graphic Tee", price: 19.99, image: "https://via.placeholder.com/200", color: "red", size: "M" },
  { id: 2, name: "Blue Striped Tee", price: 24.99, image: "https://via.placeholder.com/200", color: "blue", size: "L" },
  { id: 3, name: "Black Plain Tee", price: 14.99, image: "https://via.placeholder.com/200", color: "black", size: "S" },
];

// Function to render products
function renderProducts(filteredProducts = products) {
  const productGrid = document.getElementById("product-grid");
  productGrid.innerHTML = ""; // Clear existing content

  filteredProducts.forEach(product => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    productGrid.appendChild(productCard);
  });
}

// Function to add product to cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    alert(`${product.name} added to cart!`);
    const cartCount = document.getElementById("cart-count");
    cartCount.textContent = parseInt(cartCount.textContent) + 1;
  }
}

// Initial render
renderProducts();
