//VAR
let cart = {
};
let counter;

// toggle shopping cart visibility
function toggleCart(){
    let cartContainer = document.getElementById("cartBox");
   //  cartContainer.style.display = "block";
       cartContainer.classList.toggle("active");
       cartCounter();
       displayCartItems();
   }

//save content  inside local storage
function setLSContent(){
    localStorage.setItem("cart", JSON.stringify(cart));
}

function getLSContent() {
    // get contents from local storage.
    // if nothing is there, create an empty array
    const lsContent = JSON.parse(localStorage.getItem("cart")) || [];
    return lsContent;
  }

//add to cart button function
function addToCart(addedItem, addedQuantity, addedPrice){
    
    let subtotal;
    addedItem = addedItem.innerText;
    addedPrice = addedPrice.textContent;
    addedQuantity = Number(addedQuantity);
    
    subtotal = computeSubtotal(addedPrice, addedQuantity);

    let isProductInCart = false;

    cart = getLSContent();

    // to avoid user adds the same product twice, check if
    // the product is not in local storage already before adding it
   
    for (let i=0; i < cart.length; i++){
      if (cart[i].item == addedItem){
        isProductInCart = true;
        alert("This item is already in the cart.")
        break;
      }
    }

    if (!isProductInCart){
        //push the variables into the object items
        cart.push({item: addedItem, 
                quantity: addedQuantity, 
                price: addedPrice, 
                subtotal: subtotal});

        //store the quantity and item name in local storage
        setLSContent();

        // //update the cart counter when an item is added
        cartCounter();
        displayCartItems();

    }
        
}

//compute the subtotal (price times quantity) and return its value
function computeSubtotal(addedPrice, addedQuantity) {
    //remove the ₱ from the text and transform the price string into a number ;
    numPrice = addedPrice.replace(/(\₱)/, "");
    numPrice = Number(numPrice);

    subtotalAmount = (numPrice * addedQuantity).toFixed(2);

    subtotal = `₱${subtotalAmount}`;

    return subtotal;
}

//update the cart counter when an item is added
function cartCounter(){
    let current = 0;
    let counter;
    cart = getLSContent();
    if (cart.length === 0) {
        counter = document.querySelector(".cartCounter");
    
        counter.innerText = 0;
    }
    else {
        cart.forEach(function(updateCounter){
            current += updateCounter.quantity;
        });
        counter = document.querySelector(".cartCounter");
    
        counter.innerText = current;
    }
}

function displayCartItems(){
    cart = getLSContent();

    
    let table = document.getElementById("cartContents");
    
    if (cart.length == 0) {
        let isEmpty = document.getElementById("cartEmpty").textContent;
        alert(isEmpty);
    }
    
    else if (cart.length !== 0){
        let row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        for (let i=0; i < cart.length; i++){
            //removes spaces between two word item name to be used as an ID for the cells
            cellID = cart[i].item.replace(/ /g, ""); 
            cell1.innerHTML = `<p>${cart[i].item}</p>`;
            cell2.innerHTML = `<p id="${cellID}PriceCell">${cart[i].price}</p>`;
            cell3.innerHTML = `
                <div class="input-group input-group-sm mb-3 align-center  mt-auto">
                    <span class="input-group-text" style="width:10px;" onclick="${cellID}Cell.value = decCellQuantity(${cellID}Cell, ${cellID}CellSubtotal, ${cellID}PriceCell)">-</span>
                    <input type="number" id="${cellID}Cell" class="text-center form-control" value="${cart[i].quantity}" style="width:30px; border-color:#A2DBB7;">
                    <span class="input-group-text text-start"  style="width:12px;" onclick="${cellID}Cell.value = incCellQuantity(${cellID}Cell, ${cellID}CellSubtotal, ${cellID}PriceCell)">+</span>
                </div>`;
            cell4.innerHTML = `<p id="${cellID}CellSubtotal">${cart[i].subtotal}</p>`;
            cell5.innerHTML = `<button class="btn rounded-0"><i class="bi bi-trash3-fill" style="color:#073418;" onclick="deleteItemRow()"></i></button>`;
        }
    }
    // computeTotal();
}

//function to delete item in cart
function deleteItemRow(){
    cart = getLSContent();
    var index, table = document.getElementById("cartContents");
    for (var i = 0; i < table.rows.length; i++){
        table.rows[i].onclick = function(){
            index = this.rowIndex;
            table.deleteRow(index);
            console.log(index);
        }
    }
    cart.splice(index-1, 1);
    setLSContent(cart);
    cartCounter();
}

//function to increment quantity
function incCellQuantity(input, sub, priceCell){
    let inputNum = Number(input.value);
    inputNum += 1;
    priceCell = priceCell.innerText;
    
    sub.innerText = computeSubtotal(priceCell, inputNum);
    return inputNum;
    
}
//function to decrement quantity
function decCellQuantity(qtyInput, subT, cellPrice){
    let qty = Number(qtyInput.value);
    if (qty > 1) {
       qty -= 1;
       cellPrice = cellPrice.innerText;
    
        subT.innerText = computeSubtotal(cellPrice, qty);
    }
    return qty;
    
}

function clearCart(){
    // clear all products from cart (and local storage)

    // retrieve list of products from LS
    cart = getLSContent();
    // empty array in local storage
    cart.splice(0, cart.length);
    // update local storage
    setLSContent(cart);
    cartCounter();
    deleteRows();
    // location.reload;

}

function deleteRows() {
    
    let table = document.getElementById("cartContents");
    var rowCount = table.rows.length;
    for (var i = rowCount - 1; i > 0; i--) {
        table.deleteRow(i);
    }
}

function computeTotal(){
    cart = getLSContent();
    let total;

    for (var i = 0; i <= cart.length; i++) {
        sub = cart[i].subtotal;
        total = total + sub;
    }
    document.getElementById("total-price").innerHTML = `₱${total}.toFixed(2)`;
}

//add to cart button function for the modal
function addBasketToCart(addedItem, addedQuantity, addedPrice){
   
    let subtotal;
        
    subtotal = addedPrice;

    let isProductInCart = false;

    cart = getLSContent();

    // to avoid user adds the same product twice, check if
    // the product is not in local storage already before adding it
    
    for (let i=0; i < cart.length; i++){
      if (cart[i].item == addedItem){
        isProductInCart = true;
        alert("This item is already in the cart.")
        break;
      }
    }

    if (!isProductInCart){
        //push the variables into the object items
        cart.push({item: addedItem, 
                quantity: addedQuantity, 
                price: addedPrice, 
                subtotal: subtotal});

        //store the quantity and item name in local storage
        setLSContent();

        // //update the cart counter when an item is added
        cartCounter();
        displayCartItems();

    }
        
}