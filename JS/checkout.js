

document.addEventListener("DOMContentLoaded", () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const cartTable = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const proceedToPayBtn = document.getElementById("proceed-to-pay");

    function updateCart() {
        cartTable.innerHTML = "";
        let total = 0;

        cartItems.forEach((item, index) => {
            total += item.price;
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.service}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td><button class="remove-item" data-index="${index}">Remove</button></td>
            `;
            cartTable.appendChild(row);
        });

        cartTotal.textContent = total.toFixed(2);
    }

    cartTable.addEventListener("click", (event) => {
        if (event.target.classList.contains("remove-item")) {
            const index = event.target.dataset.index;
            cartItems.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cartItems));
            updateCart();
        }
    });

    document.getElementById("proceed-to-pay").addEventListener("click", () => {
        // Alert message before redirection (optional)
        alert("Proceeding to payment...");
        
        // Redirect to the "Thank You" page
        window.location.href = "../HTML/thank-you.html";
    });
    

    updateCart();
});