// function validate(){
//     let email = document.getElementById('username').value;
//     let pass = document.getElementById('password').value;
//     if (email == 'leehanxhin27@gmail.com' &&  pass == 'bella')
//     {
//         alert('login success');
//     } else {
//         alert('Login failed');
//     };
// }
// validate();




// const passFunction = function(){
//     let a = document.getElementById('pass').value;
//     let selector = a;

// // WD20P-SC [password]

//     switch (selector) {
//         case "WD20P-SC":
//             alert("Successfully Logged in!");
//             break;

//             case "":
//                 alert("Please Enter Password!");
    
//         default:
//             alert("Wrong Password!");
//             location.reload();
//             break;
//     };
// };

// const passwordFunction = function(){
//     let a = document.getElementById('psw').value;
//     let selector = a;

//     switch (selector) {
//         case "WD20P-SC":
//             alert("Successfully Logged in!");
//             window.location.href = "index.html";
//             break;
    
//         default:
//             alert("Wrong Password!");
//             location.reload();
//             break;
//     }

// };



// function confirm_gmail(inputText){
//     var format = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
//     if (inputText.value.match(format))
//     {
//         alert ("Valid email!");
//         document.form1.text1.focus();
//         return true;

//     } else {
//         alert("Invalid email address!");
//         document.form1.text1.focus();
//         return false;

//     }
// };



function confirm_gmail(inputText)
{
var format = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
if(inputText.value.match(format))
{
// alert("Valid email address!");
window.location.href = "index.html";
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}
}
