// Wait until the DOM content is fully loaded before executing the script
document.addEventListener("DOMContentLoaded", () => {
    // Retrieve cart items from localStorage or initialize as an empty array if not present
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    // Select the HTML elements for displaying cart items and total
    const cartTable = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const proceedToPayBtn = document.getElementById("proceed-to-pay");

    // Function to update the cart display
    function updateCart() {
        cartTable.innerHTML = ""; // Clear the existing cart table content
        let total = 0; // Initialize total price

        // Iterate through each cart item to display it
        cartItems.forEach((item, index) => {
            total += item.price; // Add item price to total
            const row = document.createElement("tr"); // Create a new row for the item
            row.innerHTML = `
                <td>${item.service}</td> <!-- Display service name -->
                <td>$${item.price.toFixed(2)}</td> <!-- Display price with two decimal places -->
                <td><button class="remove-item" data-index="${index}">Remove</button></td> <!-- Remove button with data-index -->
            `;
            cartTable.appendChild(row); // Append the row to the cart table
        });

        // Display the total price
        cartTotal.textContent = total.toFixed(2);
    }

    // Event listener for handling item removal from the cart
    cartTable.addEventListener("click", (event) => {
        // Check if the clicked element is a remove button
        if (event.target.classList.contains("remove-item")) {
            const index = event.target.dataset.index; // Get the index of the item to be removed
            cartItems.splice(index, 1); // Remove the item from the cart array
            localStorage.setItem("cart", JSON.stringify(cartItems)); // Update localStorage
            updateCart(); // Refresh the cart display
        }
    });

    // Event listener for handling the "Proceed to Pay" button click
    proceedToPayBtn.addEventListener("click", () => {
        // Optional: Alert the user before proceeding to payment
        alert("Proceeding to payment...");

        // Redirect to the "Thank You" page
        window.location.href = "../HTML/thank-you.html";
    });

    // Initial call to populate the cart display when the page loads
    updateCart();
});
