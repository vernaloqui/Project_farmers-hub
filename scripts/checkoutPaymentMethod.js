let radios = document.querySelectorAll('input[type=radio][name="Payment"]');
//radios.forEach(radio => radio.addEventListener('change', () => alert(radio.value)));

for(const radioButton of radios){
  radioButton.addEventListener('change', showSelected);
}

function showSelected(e) {
  console.log(e);
  // if (this.checked) {
  //     document.querySelector('#paymentMethodData').innerHTML = `You selected ${this.value} payment method.`;
  // }
  if (this.checked) { 
    if ((this.value) == "COD") {
      x = document.querySelector('#paymentMethodData');
        x.innerHTML = 'You selected ' + this.value + ' payment method.' + ' <br><br>';

          // // Create element:
          // const label = document.createElement("label");
          //   label.setAttribute("for", "userName");
          //   label.innerHTML = "Full Name : ";
          //   document.getElementById("paymentMethodData").appendChild(label);

          // const para = document.createElement("input");
          // var i = document.createElement("input"); //input element, text
          //   i.setAttribute('type',"text");
          //   i.setAttribute('id',"userName");
          //   i.setAttribute('name',"userName");
          //   i.setAttribute('value',"default");
          //   //para.innerText = "This is a paragraph.";
          //   // Append to body:
          //   document.getElementById("paymentMethodData").appendChild(para);
    }

    if ((this.value) == "CARD") {
      x = document.querySelector('#paymentMethodData');
        x.innerHTML = 'You selected ' + this.value + ' payment method.' + ' <br><br>';

        const label = document.createElement("label");
          label.setAttribute("for", "accountname");
          label.innerHTML = "Card Holder Name : ";
          document.getElementById("paymentMethodData").appendChild(label);
        const para = document.createElement("input");
          var i = document.createElement("input"); //input element, text
          i.setAttribute('type',"text");
          i.setAttribute('id',"accountname");
          i.setAttribute('name',"accountname");
          i.setAttribute('value',"default");
          document.getElementById("paymentMethodData").appendChild(para);
          
        const label2 = document.createElement("label");
          label2.setAttribute("for", "useraccountnumber");
          label2.innerHTML = "Card No. : ";
          document.getElementById("paymentMethodData").appendChild(label2);
        const para2 = document.createElement("input");
          var i = document.createElement("input");
          i.setAttribute('type',"number");
          i.setAttribute('id',"useraccountnumber");
          i.setAttribute('name',"useraccountnumber");
          i.setAttribute('value',"default");
          document.getElementById("paymentMethodData").appendChild(para2);

          const label3 = document.createElement("label");
          label3.setAttribute("for", "cardexpirydate");
          label3.innerHTML = "Card Expiry Date : ";
          document.getElementById("paymentMethodData").appendChild(label3);
        const para3 = document.createElement("input");
          var i = document.createElement("input");
          i.setAttribute('type',"number");
          i.setAttribute('id',"cardexpirydate");
          i.setAttribute('name',"cardexpirydate");
          i.setAttribute('value',"default");
          document.getElementById("paymentMethodData").appendChild(para3);
    }

    if ((this.value) == "GCASH") {
      x = document.querySelector('#paymentMethodData');
        x.innerHTML = 'You selected ' + this.value + ' payment method.' + ' <br><br>';

      const label = document.createElement("label");
        label.setAttribute("for", "accountname");
        label.innerHTML = "Account Name : ";
        document.getElementById("paymentMethodData").appendChild(label);
      const para = document.createElement("input");
        var i = document.createElement("input"); //input element, text
        i.setAttribute('type',"text");
        i.setAttribute('id',"accountname");
        i.setAttribute('name',"accountname");
        i.setAttribute('value',"default");
        document.getElementById("paymentMethodData").appendChild(para);

      const label2 = document.createElement("label");
        label2.setAttribute("for", "useraccountnumber");
        label2.innerHTML = "Account No. : ";
        document.getElementById("paymentMethodData").appendChild(label2);
      const para2 = document.createElement("input");
        var i = document.createElement("input");
        i.setAttribute('type',"number");
        i.setAttribute('id',"useraccountnumber");
        i.setAttribute('name',"useraccountnumber");
        i.setAttribute('value',"default");
        document.getElementById("paymentMethodData").appendChild(para2);
    }

    if ((this.value) == "MAYA") {
      x = document.querySelector('#paymentMethodData');
      x.innerHTML = 'You selected ' + this.value + ' payment method.' + ' <br><br>';

      const label = document.createElement("label");
        label.setAttribute("for", "accountname");
        label.innerHTML = "Account Name : ";
      const para = document.createElement("input");
        var i = document.createElement("input"); //input element, text
        i.setAttribute('type',"text");
        i.setAttribute('id',"accountname");
        i.setAttribute('name',"accountname");
        i.setAttribute('value',"default");

      const label2 = document.createElement("label");
        label2.setAttribute("for", "useraccountnumber");
        label2.innerHTML = "Account No. : ";
      const para2 = document.createElement("input");
        var ii = document.createElement("input");
        ii.setAttribute('type',"number");
        ii.setAttribute('id',"useraccountnumber");
        ii.setAttribute('name',"useraccountnumber");
        ii.setAttribute('value',"default");

        const out1 = document.getElementById("paymentMethodData").appendChild(label);
        const out2 = document.getElementById("paymentMethodData").appendChild(para);
        const out3 = document.getElementById("paymentMethodData").appendChild(label2);
        const out4 = document.getElementById("paymentMethodData").appendChild(para2);

        // let outPut = document.getElementById("paymentMethodDataGrid1").innerHTML;
        
     
    }
  }
}

//print order summary
function goToCheckout(orderContents){
  
  window.location.href = 'CheckOut.html';
  printOrderSummary(orderContents);
}

function printOrderSummary(){
  let table = document.querySelector("#orderContents");
  // let table = document.getElementById("orderContents");
  cart = JSON.parse(localStorage.getItem("cart"));
  
  let shipping;
  let subtotals = 0;
  let count = 0;
  var total = 0;

  
  for (let i=0; i < cart.length; i++){
    let row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    //removes spaces between two word item name to be used as an ID for the cells
    console.log(cart[i].item);
    cellID = cart[i].item.replace(/ /g, ""); 
    console.log(cellID);
    cell1.innerHTML = `<p id="${cellID}SumItem">${cart[i].item}</p>`;
    cell2.innerHTML = `<p id="${cellID}PriceSum">${cart[i].price}</p>`;
    cell3.innerHTML = `<p id="${cellID}qtySum">${cart[i].quantity}</p>`;
    cell4.innerHTML = `<p id="${cellID}SubtotalSum">${cart[i].subtotal}</p>`;
    count = count + 1;
    subtotals += computeSubtotal(cart[i].subtotal);
    console.log(subtotals);
  }       
  if (count < 5){
    shipping = 45.00;
  }
  else if (count < 10){
    shipping = 65.00;
  }
  else {
    shipping = 70.00;
  }
  
  total = Number(subtotals) + Number(shipping);
  document.getElementById('subtotal').innerText = `₱${subtotals.toFixed(2)}`;
  document.getElementById('shipFee').innerText = `₱${shipping.toFixed(2)}`;
  document.getElementById('totalPrice').innerText = `₱${total.toFixed(2)}`;
}

function computeSubtotal(sub) {
  
    //remove the ₱ from the text and transform the price string into a number ;
    subT = sub.replace(/(\₱)/, "");
    subT = Number(subT);

    return subT;
}

function PlaceOrder(){
 let name = document.getElementById('custName').value;
 let Phone = document.getElementById('Phone').value;
 let Email = document.getElementById('userEmail').value;
 let Address1 = document.getElementById('Housenum').value;
 let Address = document.getElementById('province').value;

 if (name == "" || Phone == "" || Email == "" || Phone == "" || Address == ""){
    alert("Please make sure you have entered all details.");
 }
 else{
  alert('Your order has been completed successfully.');
}
}
