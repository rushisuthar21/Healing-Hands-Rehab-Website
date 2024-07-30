document.addEventListener("DOMContentLoaded", () => {
    const cartButtons = document.querySelectorAll(".add-to-cart");
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCountElement = document.getElementById('cart-count');
    
    let cartCount = 0;

    // Add event listeners to each button
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Increment the cart count
            cartCount++;
            // Update the cart count display
            cartCountElement.textContent = cartCount;
        });
    });

    cartButtons.forEach(button => {
        button.addEventListener("click", () => {
            const service = button.getAttribute("data-service");
            const price = parseFloat(button.getAttribute("data-price"));

            const cart = JSON.parse(localStorage.getItem("cart")) || [];
            cart.push({ service, price });
            localStorage.setItem("cart", JSON.stringify(cart));

            alert(`${service} added to cart!`);
        });
    });
});