// Retrieve cart items from localStorage
let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

// Function to display cart items
function displayCartItems() {
  const cartItemsContainer = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("total-price");
  let totalPrice = 0;

  // Clear existing content
  cartItemsContainer.innerHTML = "";

  // Loop through cart items and display them
  cartItems.forEach((item, index) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";

    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-details">
        <h3>${item.name}</h3>
        <p>$${item.price.toFixed(2)}</p>
      </div>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;

    cartItemsContainer.appendChild(cartItem);
    totalPrice += item.price;
  });

  // Display total price
  totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Function to remove an item from the cart
function removeFromCart(index) {
  cartItems.splice(index, 1); // Remove the item from the array
  localStorage.setItem("cart", JSON.stringify(cartItems)); // Update localStorage
  displayCartItems(); // Refresh the cart display
  updateCartCount(); // Update the cart count in the header
}

// Function to update the cart count in the header
function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  cartCount.textContent = cartItems.length;
}

// Initial display of cart items
displayCartItems();
updateCartCount();
