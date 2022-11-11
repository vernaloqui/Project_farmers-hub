let partner = {

};

function setDataToLocalStorage() {
    localStorage.setItem('partner', JSON.stringify(partner));
};
  
function getDataFromLocalStorage() {
    const gotData = JSON.parse(localStorage.getItem("partner")) || [];
    return gotData;
};

function RegisterPartner(){
    let emailNew = document.getElementById("email").value;
    let pw1 = document.getElementById("password").value;
    let pw2 = document.getElementById("confirmpassword").value;
    let firstName = document.getElementById("fName").value;
    let midName = document.getElementById("mName").value;
    let lastName = document.getElementById("lName").value;
    let Bdate = document.getElementById("dob").value;
    let CPnum = document.getElementById("phoneNum").value;
    let HouseNum = document.getElementById("Address1").value;
    let Street = document.getElementById("Address2").value;
    let province = document.getElementById("province").value;
    let city = document.getElementById("municipality").value;
    let brgy = document.getElementById("Barangay").value;
    let zip = document.getElementById("zipCode").value;
    let tandC = document.getElementById("tandC");
    let privy = document.getElementById("privacy");
    let fruits = document.getElementById("fruits");
    let veges = document.getElementById("veges");
    let spices = document.getElementById("spices");
    let storeName = document.getElementById("storeName").value;
    let card = document.getElementById("card").checked;
    let Gcash = document.getElementById("Gcash").checked;
    let Maya = document.getElementById("maya").checked;
    const partner = {
    
    };
    let confirmation = document.getElementById("confirmation");
    itemsToSell = [veges, fruits, spices]
    let chosenItems = [];
    let preferredPayment;

    let isDataInArray = false;

    if ((email == "") || (pw1 == "") || (pw2 =="") || (firstName == "") || (midName == "") || (lastName == "") || (Bdate == "") || (CPnum == "") || (HouseNum == "") || (Street == "") || (province == "") || (city == "") || (brgy == "") || (zip == "") || (privy == "false") || (tandC == "false")) {
        alert("Fill-up required data to register.");
        
      }
    else {
    partner = getDataFromLocalStorage();

        for (let i=0; i < partner.length; i++) {
          if (partner[i].email == emailNew) {
            isDataInArray = true;
              alert("This email is already registered!");
            break;
          }
        }

        if (!isDataInArray){    

            for( i = 0; i < itemsToSell.length; i++ ) {
                if( itemsToSell[i].checked ==true ){
                    chosenItems.push(itemsToSell[i].value); 
                }
            };

            if(card === true){
                preferredPayment = "card";
            }
            else {
                if (Gcash === true){
                    preferredPayment = "Gcash"; 
                }
                else {
                    preferredPayment = "Maya";
                }
            };

            partner.push({email: emailNew, 
                        password: pw1,
                        firstName: firstName,
                        middleName: midName,
                        lastName: lastName,
                        DateOfBirth: Bdate,
                        PhoneNum: CPnum,
                        HouseNum: HouseNum,
                        Street: Street,
                        Province: province,
                        City: city,
                        Brgy: brgy,
                        PostalCode: zip,
                        storeName: storeName,
                        Items: chosenItems,
                        Payment: preferredPayment
                    });
            console.log("You have successfully created a farmer partner account.");
            document.getElementById("confirmation").innerHTML = `
          <p class="display-6" style="color:#073418;">You have successfully created a farmer partner account.</p>
          <a href="Login.html"><button type="button" class="btn" style="background-color:#A2DBB7; border-radius:5px; box-shadow:5px 5px grey;">Log in here</button></a>`;
          setDataToLocalStorage();
        }
    }
}