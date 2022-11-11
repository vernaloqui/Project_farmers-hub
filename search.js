function SearchBar(){
    var userInput, filterPro, UserUl, Userli, Userhref, bar, proValue;
    userInput = document.getElementById("userInput");
    filterPro = userInput.value.toUpperCase();
    UserUl = document.getElementById("listOfproducts");
    Userli = UserUl.getElementsByTagName("li");

    for (bar = 0; bar < Userli.length; bar++){
        Userhref =Userli[bar].getElementsByTagName("a")[0];
        proValue = Userhref.textContent || Userhref.innerText;
        
        if (proValue.toUpperCase().indexOf(filterPro) > -1){
            Userli[bar].style.display ="";
            
            UserUl.classList.add("active");
        }
        else {
            Userli[bar].style.display = "none";
        }
    }
//     const form = document.getElementById('form');
// // const input = document.getElementById('userInput');
// // const link = 'BestSellers.html#UlamBundles';


// // function submitted(event) {
// //   event.preventDefault();
// //   const url = link + input.value;
// //   const window = window.open(url, '_blank');
// //   window.focus();
// // }

// // form.addEventListener('submit', submitted);

}
