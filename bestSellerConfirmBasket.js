function selectedBasket() {
  let sBasket = document.getElementById("smallBasket").checked;
  let mBasket = document.getElementById("medBasket").checked;
  let lBasket = document.getElementById("largeBasket").checked;

  if (sBasket == true) {
    document.getElementById("sizeFruitBasket").innerHTML = "Small Basket";
    basketQty();
  }

  else if (mBasket == true) {
    document.getElementById("sizeFruitBasket").innerHTML = "Medium Basket";
    basketQty();
  }
 
  else if (lBasket == true) {
    document.getElementById("sizeFruitBasket").innerHTML = "Large Basket";
    basketQty();
  }

  else {
    alert("Choose basket!");
  }
};

function basketQty() {
  let piQty = document.getElementById("pineappleQty").value;
  let avQty = document.getElementById("avoQty").value;
  let apQty = document.getElementById("appleQty").value;
  let leQty = document.getElementById("lemonQty").value;
  let baQty = document.getElementById("bananaQty").value;
  let drQty = document.getElementById("dragonQty").value;
  let raQty = document.getElementById("rambutanQty").value;
  let grQty = document.getElementById("grapesQty").value;
  let maQty = document.getElementById("mangoQty").value;
  let peQty = document.getElementById("pearQty").value;
  let paQty = document.getElementById("papayaQty").value;
  let orQty = document.getElementById("orangeQty").value;

  let tQty = Number(piQty) + Number(avQty) + Number(apQty) + Number(leQty) + Number(baQty) + Number(drQty) + Number(raQty) + Number(grQty) + Number(maQty) + Number(peQty) + Number(paQty) + Number(orQty);

  if (tQty < 7) {
    alert("Minimum basket quantity needed is 7 PCs to checkout.");
    document.getElementById("quantityFruitBasket").innerHTML = (tQty + " PCS");
    document.getElementById("modalFruitBasketAddToCart").setAttribute('disabled', true);
  }

  else {
    document.getElementById("modalFruitBasketAddToCart").removeAttribute('disabled');
    document.getElementById("quantityFruitBasket").innerHTML = (tQty + " PCS");
    
  }
  
}

