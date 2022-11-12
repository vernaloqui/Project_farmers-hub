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
    changeActive(indicator);
}

function changeActive(indicator){
    let container = document.querySelector('.indicator');
    let link = container.children;
    
    for (let i = 0; i < link.length; i++) {
        //check which nav-link is active
        if (link[i].querySelector('.active')){
            currentActive = link[i].querySelector('.active');
            activeIndex = i;
            currentActive.classList.remove('active');
        
        }
    }
    //compare current selection with the current active link then change the active one
    if (indicator != link[activeIndex].querySelector('.nav-link')){
        
        switch(indicator){
            case "Vegetables":
                link[1].querySelector('.nav-link').classList.add("active");
            break;
            case "Fruits":
                link[2].querySelector('.nav-link').classList.add("active");
            break;
            case "Spices and Herbs":
                link[3].querySelector('.nav-link').classList.add("active");
            break;
            case "Best Sellers":
                link[4].querySelector('.nav-link').classList.add("active");
            break;
            default:
                link[0].querySelector('.nav-link').classList.add("active");
            break;
        }
    }
}