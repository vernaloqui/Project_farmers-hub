function IndicatorShift(indicator){
    // changeBackground(indicator);
    indicator = indicator.innerText;
    vege = document.querySelector(".Vegetables");
    fruits = document.querySelector(".Fruits");
    sherbs = document.querySelector(".Spices");
    best = document.querySelector(".Best");
    
    switch (indicator){
        case "Vegetables":
            if (vege.style.display = "block"){
                fruits.style.display = "none";
                sherbs.style.display = "none";
                best.style.display = "none";
            }
            else {
                vege.style.display = "block";
                fruits.style.display = "none";
                sherbs.style.display = "none";
                best.style.display = "none";
            }
        break;
        case "Fruits":
            if (fruits.style.display = "block"){
                vege.style.display = "none";
                sherbs.style.display = "none";
                best.style.display = "none";
            }
            else {
                fruits.style.display = "block";
                vege.style.display = "none";
                sherbs.style.display = "none";
                best.style.display = "none";
            }            
        break;
        case "Spices and Herbs":
            if (sherbs.style.display = "block"){
                vege.style.display = "none";
                fruits.style.display = "none";
                best.style.display = "none";
            }
            else {
                sherbs.style.display = "block";
                vege.style.display = "none";
                fruits.style.display = "none";
                best.style.display = "none";
            } 
            
        break;
        case "Best Sellers":
            if (best.style.display = "block"){
                vege.style.display = "none";
                fruits.style.display = "none";
                sherbs.style.display = "none";
            }
            else {
                best.style.display = "block";
                vege.style.display = "none";
                fruits.style.display = "none";
                sherbs.style.display = "none";
            } 
        break;
        default:
            vege.style.display = "block";
            fruits.style.display = "block";
            sherbs.style.display = "block";
        break;
    }
}

function changeActive(){
    let container = document.querySelector('.indicator');
    let link = container.getElementsByClassName('.nav-link');

    for (let i = 0; i < link.length; i++) {
        // li[i].children.classList.remove('active');
        link[i].addEventListener('click', function() {
            var current = document.getElementsByClassName('active');
            current[0].className = current[0].className.replace('active', '');
            this.className += " active";
            console.log(this.className);
        });
    }
    indicator.classList.add('active');
}