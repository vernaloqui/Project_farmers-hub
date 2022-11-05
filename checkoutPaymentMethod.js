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

          // Create element:
          const label = document.createElement("label");
            label.setAttribute("for", "useraddress");
            label.innerHTML = "Address : ";
            document.getElementById("paymentMethodData").appendChild(label);

          const para = document.createElement("input");
          var i = document.createElement("input"); //input element, text
            i.setAttribute('type',"text");
            i.setAttribute('id',"useraddress");
            i.setAttribute('name',"useraddress");
            i.setAttribute('value',"default");
            //para.innerText = "This is a paragraph.";
            // Append to body:
            document.getElementById("paymentMethodData").appendChild(para);
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

        let outPut = document.getElementById("paymentMethodDataGrid1").innerHTML;
        
     
    }
  }
}

