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

//