// Dummy T-shirt products
const products = [
  {
    id: 1,
    name: "Red Graphic Tee",
    price: 19.99,
    image: "https://via.placeholder.com/200x250?text=Red+Graphic+Tee",
    color: "red",
    size: "M",
    description: "A vibrant red T-shirt with a cool graphic design.",
  },
  {
    id: 2,
    name: "Blue Striped Tee",
    price: 24.99,
    image: "https://via.placeholder.com/200x250?text=Blue+Striped+Tee",
    color: "blue",
    size: "L",
    description: "A stylish blue T-shirt with vertical stripes.",
  },
  {
    id: 3,
    name: "Black Plain Tee",
    price: 14.99,
    image: "https://via.placeholder.com/200x250?text=Black+Plain+Tee",
    color: "black",
    size: "S",
    description: "A classic black T-shirt for everyday wear.",
  },
  {
    id: 4,
    name: "Green Nature Tee",
    price: 22.99,
    image: "https://via.placeholder.com/200x250?text=Green+Nature+Tee",
    color: "green",
    size: "M",
    description: "A green T-shirt with a nature-inspired design.",
  },
  {
    id: 5,
    name: "Yellow Smiley Tee",
    price: 18.99,
    image: "https://via.placeholder.com/200x250?text=Yellow+Smiley+Tee",
    color: "yellow",
    size: "L",
    description: "A cheerful yellow T-shirt with a smiley face.",
  },
  {
    id: 6,
    name: "White Minimalist Tee",
    price: 16.99,
    image: "https://via.placeholder.com/200x250?text=White+Minimalist+Tee",
    color: "white",
    size: "S",
    description: "A clean and minimalist white T-shirt.",
  },
];

// Function to render products
function renderProducts(filteredProducts = products) {
  const productGrid = document.getElementById("product-grid");
  productGrid.innerHTML = ""; // Clear existing content

  filteredProducts.forEach((product) => {
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
  const product = products.find((p) => p.id === productId);
  if (product) {
    alert(`${product.name} added to cart!`);
    const cartCount = document.getElementById("cart-count");
    cartCount.textContent = parseInt(cartCount.textContent) + 1;
  }
}

// Initial render
renderProducts();


// Check if the user is logged in (dummy check for now)
let isLoggedIn = false; // Replace with actual login status from backend

// Update the navigation menu based on login status
function updateAuthLinks() {
  const loginLink = document.getElementById("login-link");
  const logoutLink = document.getElementById("logout-link");

  if (isLoggedIn) {
    loginLink.style.display = "none";
    logoutLink.style.display = "inline";
  } else {
    loginLink.style.display = "inline";
    logoutLink.style.display = "none";
  }
}

// Logout functionality
document.getElementById("logout-link").addEventListener("click", (e) => {
  e.preventDefault();
  isLoggedIn = false; // Update login status
  updateAuthLinks();
  alert("Logged out successfully!");
});

// Initial check
updateAuthLinks();
