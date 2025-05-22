  const products = [
    {  name: "uPhone x11",
      price: 1000,
      available: 10,
      image: src = "images/phone1.png",
      rating: 5
    },
      {
          name: "uTablet B",
          price: 2000,
          available: 5,
          image: src = "images/Tablet.png",
          rating: 3
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

      const order = []

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
          product.available -= quantity;
        let item = {
          quantity: quantity,
          idx: idx,
        }
        order.push(item)
        renderCart()
        
          // render(); // Re-render to update stock display
     /* } else {
          alert("❌ Quantity unavailable."); */
      } 
      
    }

    function renderCart () {
      cartDiv.innerHTML = `
        <button onclick="renderCartDetails()">items: ${order.length} ⏷</button>`

    }
    function removeItem (idx) {
      order.splice(idx,1)
      renderCartDetails()
    }
    function renderCartDetails () {
      cartDetailsDiv.innerHTML = `<ol>`
      let total = 0
      for(let i=0; i < order.length; i++) {
        let selectedIdx = order[i].idx
        cartDetailsDiv.innerHTML += `<li>${products[selectedIdx].name} x ${order[i].quantity}
        <button onclick="removeItem(${i})">x</button></li>`
        total += order[i].quantity * products[selectedIdx].price
      }
      cartDetailsDiv.innerHTML += `<li>total: ${total}</li>`
      cartDetailsDiv.innerHTML += `</ol>`
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
    
      //★☆
    /* let stars = ""
      if(products[i]. rating >= 4.5 && products[i].rating <= 5 ) {
        stars = `★★★★★`
      } else if (products[i]. rating >= 3.5) {
        stars = `★★★★☆`
  }
          else if (products[i]. rating >= 2.5){
              stars = `★★★☆☆`}
          else if (products[i]. rating >= 1.5) {
                stars = `★★☆☆☆`}
          else if (products[i]. rating >= 0.5 ) {
                      stars = `★☆☆☆☆`} */


  let stars = ``
                      for (let j = 1; j <= 5; j++) {
                        if (j <= products[i].rating) {
                            stars += "★";
                          } else {
                            stars += "☆";
                          }
                        } 

    /*?????for (let i = 0; i < products.length; i++) {
      let stars = "";
      const rating = products[i].rating;

      // Build the star rating string
      for (let j = 1; j <= 5; j++) {
        if (j <= Math.floor(rating)) {
          stars += "★";
        } else {
          stars += "☆";
        }
                            }*/


      //HW: 5.4
  /*  let stars = "☆☆☆☆☆"
      if(products[i]. rating >= 0.5 && products[i].rating <= 1 ) {
          stars = `★☆☆☆☆`
      } else if (products[i]. rating >= 1.5 && products[i].rating <= 2.4) {
          stars = `★★☆☆☆`}
          else if (products[i]. rating >= 2.5 && products[i].rating <= 3.4){
              stars = `★★★☆☆`}
          else if (products[i]. rating >= 3.5 && products[i].rating <= 4.4) {
                stars = `★★★★☆`}
          else if (products[i]. rating >= 4.5 && products[i].rating <= 5.0) {
                      stars = `★★★★★`}  */   
                      

  /*HW: 5.3
  let stars = "☆☆☆☆☆";
  const rating = products[i].rating;

  switch (true) {
    case (rating >= 4.5 && rating <= 5):
      stars = "★★★★★";
      break;
    case (rating >= 3.5):
      stars = "★★★★☆";
      break;
    case (rating >= 2.5):
      stars = "★★★☆☆";
      break;
    case (rating >= 1.5):
      stars = "★★☆☆☆";
      break;
    case (rating >= 0.5):
      stars = "★☆☆☆☆";
      break;
    default:
      stars = "☆☆☆☆☆";
  } */

      

      catalogDiv.innerHTML += `
        <div>
          <img src="${products[i].image}" alt="${products[i].name}" width="200" />  
          <h2>${products[i].name}</h2>
          <p>Price: ${products[i].price}</p>
          <p style="color: ${stockColor}; font-weight: bold;">${stockStatus}</p>
          <button onclick="add(${i})">ADD</button>
          <div>${stars}</div>
        </div>
      `;
  }

  }

  render()
