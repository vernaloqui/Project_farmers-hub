function selectedBasket() {
  let sBasket = document.getElementById("smallBasket").checked;
  let mBasket = document.getElementById("medBasket").checked;
  let lBasket = document.getElementById("largeBasket").checked;

  if (sBasket == true) {
    document.getElementById("sizeFruitBasket").innerHTML = "Small Basket";
    smallBasketQty();
  }

  else if (mBasket == true) {
    document.getElementById("sizeFruitBasket").innerHTML = "Medium Basket";
    mediumBasketQty();
  }
 
  else if (lBasket == true) {
    document.getElementById("sizeFruitBasket").innerHTML = "Large Basket";
    largeBasketQty();
  }

  else {
    alert("Choose basket!");
  }
};

function smallBasketQty() {
  let spiQty = document.getElementById("pineappleQty").value;
  let savQty = document.getElementById("avoQty").value;
  let sapQty = document.getElementById("appleQty").value;
  let sleQty = document.getElementById("lemonQty").value;
  let sbaQty = document.getElementById("bananaQty").value;
  let sdrQty = document.getElementById("dragonQty").value;
  let sraQty = document.getElementById("rambutanQty").value;
  let sgrQty = document.getElementById("grapesQty").value;
  let smaQty = document.getElementById("mangoQty").value;
  let speQty = document.getElementById("pearQty").value;
  let spaQty = document.getElementById("papayaQty").value;
  let sorQty = document.getElementById("orangeQty").value;

  let stQty = Number(spiQty) + Number(savQty) + Number(sapQty) + Number(sleQty) + Number(sbaQty) + Number(sdrQty) + Number(sraQty) + Number(srQty) + Number(smaQty) + Number(speQty) + Number(spaQty) + Number(sorQty);

  if (stQty < 7) {
    alert("Minimum basket quantity needed is 7 PCs to checkout.");
    document.getElementById("quantityFruitBasket").innerHTML = (stQty + " PCS");
    document.getElementById("modalFruitBasketAddToCart").setAttribute('disabled', true);
  }

  else {
    document.getElementById("modalFruitBasketAddToCart").removeAttribute('disabled');
    document.getElementById("quantityFruitBasket").innerHTML = (stQty + " PCS");
    
  }
};

function mediumBasketQty() {
  let mpiQty = document.getElementById("pineappleQty").value;
  let mavQty = document.getElementById("avoQty").value;
  let mapQty = document.getElementById("appleQty").value;
  let mleQty = document.getElementById("lemonQty").value;
  let mbaQty = document.getElementById("bananaQty").value;
  let mdrQty = document.getElementById("dragonQty").value;
  let mraQty = document.getElementById("rambutanQty").value;
  let mgrQty = document.getElementById("grapesQty").value;
  let mmaQty = document.getElementById("mangoQty").value;
  let mpeQty = document.getElementById("pearQty").value;
  let mpaQty = document.getElementById("papayaQty").value;
  let morQty = document.getElementById("orangeQty").value;
  
  let mtQty = Number(mpiQty) + Number(mavQty) + Number(mapQty) + Number(mleQty) + Number(mbaQty) + Number(mdrQty) + Number(mraQty) + Number(mgrQty) + Number(mmaQty) + Number(mpeQty) + Number(mpaQty) + Number(morQty);
  
  if (mtQty < 10) {
    alert("Minimum basket quantity needed is 10 PCs to checkout.");
    document.getElementById("quantityFruitBasket").innerHTML = (mtQty + " PCS");
    document.getElementById("modalFruitBasketAddToCart").setAttribute('disabled', true);
  }
  
  else {
    document.getElementById("modalFruitBasketAddToCart").removeAttribute('disabled');
    document.getElementById("quantityFruitBasket").innerHTML = (mtQty + " PCS");
      
  }
  
};

function largeBasketQty() {
  let lpiQty = document.getElementById("pineappleQty").value;
  let lavQty = document.getElementById("avoQty").value;
  let lapQty = document.getElementById("appleQty").value;
  let lleQty = document.getElementById("lemonQty").value;
  let lbaQty = document.getElementById("bananaQty").value;
  let ldrQty = document.getElementById("dragonQty").value;
  let lraQty = document.getElementById("rambutanQty").value;
  let lgrQty = document.getElementById("grapesQty").value;
  let lmaQty = document.getElementById("mangoQty").value;
  let lpeQty = document.getElementById("pearQty").value;
  let lpaQty = document.getElementById("papayaQty").value;
  let lorQty = document.getElementById("orangeQty").value;

  let ltQty = Number(lpiQty) + Number(lavQty) + Number(lapQty) + Number(lleQty) + Number(lbaQty) + Number(ldrQty) + Number(lraQty) + Number(lgrQty) + Number(lmaQty) + Number(lpeQty) + Number(lpaQty) + Number(lorQty);

  if (ltQty < 15) {
    alert("Minimum basket quantity needed is 15 PCs to checkout.");
    document.getElementById("quantityFruitBasket").innerHTML = (ltQty + " PCS");
    document.getElementById("modalFruitBasketAddToCart").setAttribute('disabled', true);
  }

  else {
    document.getElementById("modalFruitBasketAddToCart").removeAttribute('disabled');
    document.getElementById("quantityFruitBasket").innerHTML = (ltQty + " PCS");
    
  }
}

