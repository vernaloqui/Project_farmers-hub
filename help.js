//function to check if message submitted is empty and to provide confirmation that the message is received

function checkMessage() {
  var inputMessage = document.getElementById("exampleInputPassword1").value;
    if (inputMessage == "") {
     
      alert("You submitted an empty message!");
    }
    else {
      alert("Your message was submitted! ");
    }
}


