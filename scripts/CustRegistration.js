let registeredUsers = {
  dataArray: [],
};

function setDataToLocalStorage() {
  localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
};

function getDataFromLocalStorage() {
  const gotData = JSON.parse(localStorage.getItem("registeredUsers")) || [];
  return gotData;
};

function addDataToLocalStorage() {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let confirmpassword = document.getElementById('confirmpassword').value;
  let firstName = document.getElementById('fName').value;
  let middleName = document.getElementById('mName').value;
  let lastName = document.getElementById('lName').value;
  let dateOfBirth = document.getElementById('dob').value;
  let phoneNumber = document.getElementById('phoneNum').value;
  let address1 = document.getElementById('Address1').value;
  let address2 = document.getElementById('Address2').value;
  let pRovince = document.getElementById('province').value;
  let mUnicipality = document.getElementById('municipality').value;
  let bArangay = document.getElementById('Barangay').value;
  let zipCode = document.getElementById('zipCode').value;
  let pRivacy = document.getElementById('privacy').checked;
  let tErms = document.getElementById('tandC').checked;
  let confirmation = document.getElementById("confirmation");
  let isDataInArray = false;
 

// if one of the required field is null/unchecked, then registration will not proceed:-->
  if ((email == "") || (password == "") || (confirmpassword =="") || (firstName == "") || (middleName == "") || (lastName == "") || (dateOfBirth == "") || (phoneNumber == "") || (address1 == "") || (address2 == "") || (pRovince == "") || (mUnicipality == "") || (bArangay == "") || (zipCode == "") || (pRivacy == "false") || (tErms == "false")) {
    alert("Fill-up required data to register.");
    
  }
  else {
      registeredUsers = getDataFromLocalStorage();

        for (let i=0; i < registeredUsers.length; i++) {
          if (registeredUsers[i].itemEmail == email) {
            isDataInArray = true;
              alert("This email is already registered!");
            break;
          }
        }

        if (!isDataInArray){
          registeredUsers.push(
            {
              itemEmail: email, 
              itemPassword: password,
              itemConfirmpassword: confirmpassword,
              itemFirstName: firstName,
              itemMiddleName: middleName,
              itemLastName: lastName,
              itemDateOfBirth: dateOfBirth,
              itemPhoneNum: phoneNumber,
              itemAddress1: address1,
              itemAddress2: address2, 
              itemProvine: pRovince,
              itemMunicipality: mUnicipality,
              itemBarangay: bArangay,
              itemZipCode: zipCode, 
              itemPrivacy: pRivacy, 
              itemTerms: tErms, 
            
            }
          );
          
          console.log(confirmation);
          document.getElementById("confirmation").innerHTML = `
          <p class="display-6" style="color:#073418;">You have successfully created an account.</p>
          <a href="Login.html"><button type="button" class="btn" style="background-color:#A2DBB7; border-radius:5px; box-shadow:5px 5px grey;">Log in here</button></a>
          <a href="combined.html"><button type="button" class="btn" style="background-color:#A2DBB7; border-radius:5px; box-shadow:5px 5px grey;">Continue Shopping</button></a>`;
        setDataToLocalStorage();
        
        }
      }
    
    }