function selectedPaymentMethod() {
  let codPayment = document.getElementById("cod").checked;
  let cardPayment = document.getElementById("card").checked;
  let gcashPayment = document.getElementById("Gcash").checked;
  let mayaPayment = document.getElementById("maya").checked;

  if (codPayment == true) {
    codPaymentFunction();
  }
};

function codPaymentFunction() {
  alert("COD!");
}


const group = document.querySelector("#group");
        group.innerHTML = sizes.map((size) => `<div>
                <input type="radio" name="size" value="${size}" id="${size}">
                 <label for="${size}">${size}</label>
            </div>`).join(' ');
        
        // add an event listener for the change event
        const radioButtons = document.querySelectorAll('input[name="size"]');
        for(const radioButton of radioButtons){
            radioButton.addEventListener('change', showSelected);
        }        
        
        function showSelected(e) {
            console.log(e);
            if (this.checked) {
                document.querySelector('#output').innerText = `You selected ${this.value}`;
            }
        }
