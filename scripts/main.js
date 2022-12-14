
// toggle shopping cart visibility
function toggleCart(){
    let cartContainer = document.getElementById("cartBox");
   //  cartContainer.style.display = "block";
       cartContainer.classList.toggle("active");
       cartCounter();
   }
   //scroll to top button function
   function backToTop(){
       // When the user scrolls down 20px from the top of the document, show the button
       window.onscroll = function() {scrollFunction()};
       
       topFunction();
   }
   function scrollFunction() {
       let backTop = document.getElementById("scrollUp");
       if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
           backTop.style.display = "block";
       } else {
           backTop.style.display = "none";
       }
   }
   
       // When the user clicks on the button, scroll to the top of the document
   function topFunction() {
       document.body.scrollTop = 0; // For Safari
       document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
   }
   
   
   
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
               let bgyBangued = ['Agtangao', 'Angad', 'Ba??acao', 'Bangbangar', 'Cabuloan', 'Calaba', 'Calot/Tablac', 'Cosili West', 'Cosili East', 'Dangdangla', 'Lingtan', 'Lipcan', 'Lubong', 'Macarcarmay', 'Macray', 'Maoay', 'Malita', 'Palao', 'Patucannnay', 'Sagap', 'San Antonio', 'Santa Rosa', 'Sao-atan', 'Sappaac', 'Zone 1', 'Zone 2', 'Zone 3', 'Zone 4', 'Zone 5', 'Zone 6', 'Zone 7']
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
   