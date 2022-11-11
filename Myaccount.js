//My Profile Tab Pane

//id="profilePic"
//id="firstName"
//id="middleName"
//id="lastName"
//id="dob"
//id="phoneNum"

function add() {
  let inputFName = document.getElementById("firstName").value;
  let inputMName = document.getElementById("middleName").value;
  let inputLName = document.getElementById("lastName").value;
  let inputDOB = document.getElementById("dob").value;
  let inputPhoneNum = document.getElementById("phoneNum").value;

  sessionStorage.setItem("userFirstName", JSON.stringify(inputFName));
  sessionStorage.setItem("userMiddleName", JSON.stringify(inputMName));
  sessionStorage.setItem("userLastName", JSON.stringify(inputLName));
  sessionStorage.setItem("userDOB", JSON.stringify(inputDOB));
  sessionStorage.setItem("userPhoneNum", JSON.stringify(inputPhoneNum));

}

function getPic() {
  let reader = new FileReader();

  reader.addEventListener("load", function() {
    sessionStorage.setItem("userProfilePic", reader.result);
    showProfilePic();
})
reader.readAsDataURL(target.files[0]);

}

function showProfilePic() {
  let profilePic = document.getElementById("profilePic");
  let profilePicURL = sessionStorage.getItem("userProfilePic");
  profilePic.innerHTML = "<img src='" + profilePicURL +"'style='width: 100px;'>";

}


//Address Tab Pane

function applyEditAdd() {
  let cAddressEdit = document.getElementById("cAddress");
  let iAddress = document.getElementById("addressInput").value;

  if (iAddress != "") {
    cAddressEdit.innerText = iAddress;
  }
 
  else {
    alert("Please input data.")
  }
}

function applyEditAddS() {
  let sAddressEdit = document.getElementById("sAddress");
  let iAddressS = document.getElementById("addressInputS").value;

  if (iAddressS != "") {
    sAddressEdit.innerText = iAddressS;
    //sessionStorage.setItem("userFirstName", JSON.stringify(inputFName));
  }
 
  else {
    alert("Please input data.")
  }
}