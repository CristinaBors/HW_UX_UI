const products = [
  {  name: "uPhone x11",
    price: 1000,
    available: 2,
    image: src = "images/phone1.png"
  },
    {
        name: "uTablet B",
        price: 2000,
        available: 5,
        image: src = "images/Tablet.png"
    },
]


/*function render () {
    for (let i=0; i< products.length; i++) {
        catalogDiv.innerHTML += `
        <div>
            <h2>${products[i].name}</h2>
            <p>price: ${products[i].price}</p>
        </div>
        `
    }
} */

function add(idx) {
    const product = products[idx];
    const quantityStr = prompt(`Enter quantity for ${product.name}:`);

    if (quantityStr === null) return; // User clicked "Cancel"

    const quantity = parseInt(quantityStr);

    if (isNaN(quantity) || quantity <= 0) {
        alert("Please enter a valid quantity.");
        return;
    }

    if (quantity <= product.available) {
        alert("✅ OK! Added to cart.");
        // Optionally: reduce the available quantity
        // product.available -= quantity;
        // render(); // Re-render to update stock display
    } else {
        alert("❌ Quantity unavailable.");
    }
}

function render() {
    const catalogDiv = document.getElementById("catalog"); // Make sure your HTML has <div id="catalog"></div>
    catalogDiv.innerHTML = ""; // Clear previous content

for (let i = 0; i < products.length; i++) {
    let stockStatus = "";
    let stockColor = "";

    const available = products[i].available;

    if (available === 0) {
        stockStatus = "Not in stock";
        stockColor = "red";
    } else if (available <= 2) {
        stockStatus = "End of stock";
        stockColor = "darkorange";
    } else if (available <= 5) {
        stockStatus = "Limited stock";
        stockColor = "orange";
    } else {
        stockStatus = "In stock";
        stockColor = "green";
    }

    catalogDiv.innerHTML += `
      <div>
        <img src="${products[i].image}" alt="${products[i].name}" width="200" />  
        <h2>${products[i].name}</h2>
        <p>Price: ${products[i].price}</p>
        <p style="color: ${stockColor}; font-weight: bold;">${stockStatus}</p>
        <button onclick="add(${i})">ADD</button>
      </div>
    `;
}

}

render()
