//Forgot password modal for OK button
function forgotPassword(){
    let emailInput = document.getElementById("email").value;

    if(emailInput !=""){
        let bodyDiv = document.getElementById("body");
        let footer = document.getElementById("Modalfooter");
        footer.style.display = "none";
        bodyDiv.style.display = "none";
        
        document.getElementById("emailSent").innerText = "A password reset link has been sent to your email address.";
    }
    else {
        let noEmail = document.getElementById("inputAlert");
        noEmail.style.color = "red";
        noEmail.innerText = "Please enter a valid email address.";
    }
}
