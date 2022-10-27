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
    
}