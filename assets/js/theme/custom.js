// JavaScript source code
console.log("Cool!");
function createCart(url, cartItems) {
    return fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cartItems),
    })
        .then(response => response.json());
};

document.querySelector(".add-class-btn").addEventListener("click", function () {
    createCart(`/api/storefront/carts`, {
        "lineItems": [
            {
                "quantity": 1,
                "productId": 86
            },
            {
                "quantity": 1,
                "productId": 88
            },
            {
                "quantity": 1,
                "productId": 111,
                "optionSelections": [
                    {
                        "optionId": 114,
                        "optionValue": 102
                    }
                ]
            }
        ]
    }
    )
        .then(data => console.log(JSON.stringify(data)))
        .catch(error => console.error(error));
    alert("Just added items to your cart!");
}); 