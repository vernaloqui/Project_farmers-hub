function selectedBasket() {
  let sBasket = document.getElementById("smallBasket").checked;
  let mBasket = document.getElementById("medBasket").checked;
  let lBasket = document.getElementById("largeBasket").checked;

  if (sBasket == true) {
    console.log(sBasket);
    return "small basket";
  }

  else if (mBasket == true) {
    console.log(mBasket);
    return "medium basket";
  }
 
  else if (lBasket == true) {
    // document.getElementById("sizeFruitBasket").innerHTML = "Large Basket";
    // largeBasketQty();
    return "large basket";
  }

  else {
    alert("Choose basket!");
  }
};


function countFruits(){
  let piQty = Number(document.getElementById("pineappleQty").value);
  let avQty = Number(document.getElementById("avoQty").value);
  let apQty = Number(document.getElementById("appleQty").value);
  let leQty = Number(document.getElementById("lemonQty").value);
  let baQty = Number(document.getElementById("bananaQty").value);
  let drQty = Number(document.getElementById("dragonQty").value);
  let raQty = Number(document.getElementById("rambutanQty").value);
  let grQty = Number(document.getElementById("grapesQty").value);
  let maQty = Number(document.getElementById("mangoQty").value);
  let peQty = Number(document.getElementById("pearQty").value);
  let paQty = Number(document.getElementById("papayaQty").value);
  let orQty = Number(document.getElementById("orangeQty").value);
  let count = [piQty, avQty, apQty, leQty, baQty, drQty, raQty, grQty, maQty, peQty, paQty, orQty];


  let sum = piQty + avQty + apQty + leQty + baQty + drQty + raQty + grQty + maQty + peQty + paQty + orQty;

  let fruit = {
     count,
     sum 
  }
  return fruit;
}



function printFruitBasket(){
  
  let table = document.getElementById("BasketTable");
  var rowCount = table.rows.length;
  let size = selectedBasket();
  let fruits = ["Pineapple", "Avocado", "Apple", "Lemon", "Banana", "Dragonfruit", "Rambutan", "Grapes", "Mango", "Pear", "Papaya", "Orange"];
  let button = document.getElementById("addCart");
  let priceS = document.getElementById("smallPrice").innerText;
  let priceM = document.getElementById("mediumPrice").innerText;
  let priceL = document.getElementById("largePrice").innerText;

  fruitObject = countFruits();

  countArray = fruitObject.count;
  sum = fruitObject.sum;
  // console.log(sum);

  for (var i = rowCount - 1; i > 0; i--) {
    table.deleteRow(i);
  }
  
  for (let i = 0; i < 12; i++){
    if (countArray[i] !== 0){
    let row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell2.textContent = fruits[i];
    cell1.textContent = countArray[i];
    }
  }

 console.log(document.getElementById("smallPrice").innerText);
  switch (size){
    case "small basket":
      if(sum === 7){
        document.getElementById("basketSize").innerHTML = `Your fruits basket size is: <strong>${size}</strong>`;
        button.style.display = "block";
        button.onclick = function() { addBasketToCart(size, 1, priceS) };
        document.getElementById("price").innerHTML = `<strong>Total: ${priceS}</strong>`;

      }  
      else {
        document.getElementById("basketSize").innerHTML = `Your fruits basket size is: <strong>${size}</strong>. Please select <strong>exactly 7 fruits</strong> in order to proceed.`;
        button.style.display = "none";

      }
    break;

    case "medium basket":
      if(sum === 10){
        document.getElementById("basketSize").innerHTML = `Your fruits basket size is: <strong>${size}</strong>`;
        button.style.display = "block";
        button.onclick = function() {addBasketToCart(size, 1, priceM) };
        document.getElementById("price").innerHTML = `<strong>Total: ${priceM}</strong>`;

      }  
      else {
        document.getElementById("basketSize").innerHTML = `Your fruits basket size is: <strong>${size}</strong>. Please select <strong>exactly 10 fruits</strong> in order to proceed.`;
        button.style.display = "none";
      }
    break;

    case "large basket":
      if(sum === 15){
        document.getElementById("basketSize").innerHTML = `Your fruits basket size is: <strong>${size}</strong>`;
        button.style.display = "block";
        button.onclick = function() { addBasketToCart(size, 1, priceL) };
        document.getElementById("price").innerHTML = `<strong>Total: ${priceL}</strong>`;

      }  
      else {
        document.getElementById("basketSize").innerHTML = `Your fruits basket size is: <strong>${size}</strong>. Please select <strong>exactly 15 fruits</strong> in order to proceed.`;
        button.style.display = "none";
      }
    break;
  }  
  
  //get contents of the basket table for storage
var fruitsArray = [];
var FruitTable = document.querySelector("#BasketTable");
var rows = FruitTable.children;
console.log(rows);
for (var j = 0; j < rows.length; j++) {
    var fields = rows[j].children;
  var rowArray = [];
  for (var k = 0; k < fields.length; k++) {
    rowArray.push(fields[k].innerText);
  }
  fruitsArray.push(rowArray);
}

localStorage.setItem("fruitsBasket", JSON.stringify(fruitsArray));
}
