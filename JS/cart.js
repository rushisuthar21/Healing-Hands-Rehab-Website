// Wait until the DOM content is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
    // Select all elements with the class 'add-to-cart'
    const cartButtons = document.querySelectorAll(".add-to-cart");
    const addToCartButtons = document.querySelectorAll('.add-to-cart'); // Duplicate selector, same as cartButtons
    const cartCountElement = document.getElementById('cart-count'); // Element displaying the cart count
    
    let cartCount = 0; // Initialize cart count

    // Add click event listeners to each 'add-to-cart' button
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Increment the cart count by 1
            cartCount++;
            // Update the cart count display on the page
            cartCountElement.textContent = cartCount;
        });
    });

    // Add click event listeners to each 'add-to-cart' button
    cartButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Get the service name and price from data attributes
            const service = button.getAttribute("data-service");
            const price = parseFloat(button.getAttribute("data-price"));

            // Retrieve the current cart from localStorage or initialize an empty array if not present
            const cart = JSON.parse(localStorage.getItem("cart")) || [];
            // Add the new item (service and price) to the cart
            cart.push({ service, price });
            // Save the updated cart back to localStorage
            localStorage.setItem("cart", JSON.stringify(cart));

            // Alert the user that the item has been added to the cart
            alert(`${service} added to cart!`);
        });
    });
});
