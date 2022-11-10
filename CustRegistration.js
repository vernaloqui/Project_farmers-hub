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
  let firstName = document.getElementById('firstName').value;
  let middleName = document.getElementById('middleName').value;
  let lastName = document.getElementById('lastName').value;
  let dateOfBirth = document.getElementById('dob').value;
  let phoneNumber = document.getElementById('phoneNum').value;
  let address1 = document.getElementById('Address1').value;
  let address2 = document.getElementById('Address2').value;
  let pRovince = document.getElementById('province').value;
  let mUnicipality = document.getElementById('Municipality').value;
  let bArangay = document.getElementById('Barangay').value;
  let zipCode = document.getElementById('zipCode').value;
  let pRivacy = document.getElementById('privacy').checked;
  let tErms = document.getElementById('tandC').checked;

  let isDataInArray = false;

// <--if one of the required field is null/unchecked, then registration will not proceed:-->
  if ((email == "") || (password == "") || (confirmpassword) || (firstName == "") || (middleName == "") || (lastName == "") || (dateOfBirth == "") || (phoneNumber == "") || (address1 == "") || (address2 == "") || (pRovince == "") || (mUnicipality == "") || (bArangay == "") || (zipCode == "") || (pRivacy == "false") || (tErms == "false")) {
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

        setDataToLocalStorage();
          alert("You are now registered!")
        //registeredUsersCounter();
        //displayregisteredUsers();
      
        }
      };

      function registeredUsersCounter() {
        let current = 0;
        let counter;

        registeredUsers = getDataFromLocalStorage();

        if (registeredUsers.length === 0) {
            //counter = document.querySelector(".cartCounter");
        
            //counter.innerText = 0;
            counter = 0;
        }
        else {
          registeredUsers.forEach(function(updateCounter){
                current += updateCounter.quantity;
            });
            //counter = document.querySelector(".cartCounter");
        
            //counter.innerText = current;
            counter = current;
        }
      };

      function displayregisteredUsers() {
        registeredUsers = getDataFromLocalStorage();

        if (registeredUsers.length == 0) {
          alert('No list of registered users..');
        }

        else if (registeredUsers.length !== 0) {
          getDataFromLocalStorage()
        
        }

      }
}