//VAR
let items ={
    cart: []
};
let counter;

//Forgot password modal for OK button
function forgotPassword(){
    let emailInput = document.getElementById("email").value;
    let bodyDiv = document.getElementById("forgotPwInstruction");
    let input = document.getElementById("inputGroup");
    let footer = document.getElementById("Modalfooter");
    let noEmail = document.getElementById("inputAlert");

    // footer.style.display = "flex";
    // bodyDiv.style.display = "block";
    // bodyDiv.style.display = "block";

    if(emailInput !=""){
        footer.style.display = "none";
        bodyDiv.style.display = "none";
        input.style.display = "none";
        
        noEmail.innerText = "A password reset link has been sent to your email address.";
        location.reload();
    }
    else {
       
        noEmail.style.color = "red";
        noEmail.style.fontSize = "small";
        noEmail.innerText = "Please enter a valid email address.";
    }
}

//Municipality Selection function for registration
function showMunicipalitySelection(){
    const provinceList = document.querySelector("#province");
    let index = document.querySelector("#province").selectedIndex;
    let townList = document.querySelector("#Municipality");
    let provinceChoice = provinceList[index].value;

    switch (provinceChoice){
        case "Abra":
            let towns = ['Bangued', 'Boliney', 'Bucay', 'Bucloc', 'Daguioman', 'Danglas', 'Doloras', 'La Paz', 'Lacub', 'Lagangilang', 'Langiden', 'Licuan-Baay', 'Luba', 'Malibcong', 'Manabo', 'Penarrubia', 'Pidigan', 'Pilar', 'Sallapadan', 'San Juan', 'Tayum', 'Tineg', 'Tubo', 'Villaviciosa'];

            for (var i = 0; i < 24; i++) {
                var newOption = document.createElement("option");
                newOption.value = towns[i];
                newOption.innerHTML = towns[i];
                townList.appendChild(newOption);
            }
            break;
    }

}


//Barangay selection function for registration form
function showBarangaySelection(){
    const municipalityList = document.querySelector("#Municipality");
    let index = document.querySelector("#Municipality").selectedIndex;
    let bgyList = document.querySelector("#Barangay");
    let townChoice = municipalityList[index].value;

    switch (townChoice){
        case "Bangued":
            let bgyBangued = ['Agtangao', 'Angad', 'Bañacao', 'Bangbangar', 'Cabuloan', 'Calaba', 'Calot/Tablac', 'Cosili West', 'Cosili East', 'Dangdangla', 'Lingtan', 'Lipcan', 'Lubong', 'Macarcarmay', 'Macray', 'Maoay', 'Malita', 'Palao', 'Patucannnay', 'Sagap', 'San Antonio', 'Santa Rosa', 'Sao-atan', 'Sappaac', 'Zone 1', 'Zone 2', 'Zone 3', 'Zone 4', 'Zone 5', 'Zone 6', 'Zone 7']
                // '', 'Boliney', 'Bucay', 'Bucloc', 'Daguioman', 'Danglas', 'Doloras', 'La Paz', 'Lacub', 'Lagangilang', 'Langiden', 'Licuan-Baay', 'Luba', 'Malibcong', 'Manabo', 'Penarrubia', 'Pidigan', 'Pilar', 'Sallapadan', 'San Juan', 'Tayum', 'Tineg', 'Tubo', 'Villaviciosa'];

            for (var i = 0; i < 31; i++) {
                var newOption = document.createElement("option");
                newOption.value = bgyBangued[i];
                newOption.innerHTML = bgyBangued[i];
                bgyList.appendChild(newOption);
            }
            break;
    }

}

//Register Account Button function to check pw and input fields

function RegisterAccount(){
    let emailNew = document.getElementById("email").value;
    let pw1 = document.getElementById("password").value;
    let pw2 = document.getElementById("confirmpassword").value;
    let firstName = document.getElementById("fName").value;
    let lastName = document.getElementById("lName").value;
    let Bdate = document.getElementById("dob").value;
    let CPnum = document.getElementById("phoneNum").value;
    let HouseNum = document.getElementById("Address1").value;
    let Street = document.getElementById("Address2").value;
    let province = document.getElementById("province").value;
    let city = document.getElementById("Municipality").value;
    let brgy = document.getElementById("Barangay").value;
    let zip = document.getElementById("zipCode").value;
    let tandC = document.getElementById("tandC");
    let privy = document.getElementById("privacy");

    if (emailNew == "" || pw1 == "" || pw2 == "" || firstName == "" || lastName =="" || Bdate == "" || CPnum =="" || HouseNum == "" || Street == "" || province == "" || city == "" || brgy == "" || zip == "" || tandC.checked == false || privy.checked == false){
        document.getElementById("alertUser").innerHTML = "Please make sure to complete the details.";
    }
    else {
        if(pw1 == pw2){
            let sectionDisplay = document.getElementById("formSection");
            let confirmationDisplay = document.getElementById("confirmation");

            sectionDisplay.style.display = "none";
            confirmationDisplay.style.display = "block";    
        }
        else {
            let alertUser = document.getElementById("alertUser");
            alertUser.innerHTML = "Please make sure the passwords matched.";
            alertUser.style.color = "red";
            alertUser.style.fontStyle = "italic";
            alertUser.style.fontSize = "12px";
        }
    }
}

//function to increment quantity
function incQuantity(input){
    let inputNum = Number(input.value);
    inputNum += 1;
    return inputNum;
    
}
//function to decrement quantity
function decQuantity(qtyInput){
    let qty = Number(qtyInput.value);
    if (qty > 0) {
       qty -= 1;
    }
    return qty;
    
}
//add to cart button function
function addToCart(addedItem, addedQuantity, addedPrice){
    
    let subtotal;
    addedItem = addedItem.innerText;
    addedPrice = addedPrice.innerText;
    addedQuantity = Number(addedQuantity);
    
    subtotal = computeSubtotal(addedPrice, addedQuantity);

    //push the variables into the object items
    items.cart.push({item: addedItem, quantity: addedQuantity, price: addedPrice, subtotal: subtotal});

    //store the quantity and item name in local storage
    localStorage.setItem("items", JSON.stringify(items));

    //update the cart counter when an item is added
    cartCounter();
    
}

//compute the subtotal (price times quantity) and return its value
function computeSubtotal(addedPrice, addedQuantity) {
    //remove the ₱ from the text and transform the price string into a number ;
    numPrice = addedPrice.replace(/(\₱)/, "");
    numPrice = Number(numPrice);

    subtotalAmount = numPrice * addedQuantity;

    subtotal = `₱${subtotalAmount}.00`;

    return subtotal;
}

//update the cart counter when an item is added
function cartCounter(){
    let current = 0;
    if (items.cart == "") {
        counter.innerText = 0;
    }
    else {
        items.cart.forEach(function(updateCounter){
            current += updateCounter.quantity;
        });
        counter = document.querySelector(".cartCounter");
    
        counter.innerText = current;
    }
}
