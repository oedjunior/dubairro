function MenuOverEnabled(){
    let menuOverflow = document.getElementById("menu_overflow");
    menuOverflow.style.display= "block";
}

function MenuDisplay(){
    let menuDisplay = document.getElementById("menu_display");
    menuDisplay.style.display= "block";
}
function MenuOverDisabled(){
    let menuOverflow = document.getElementById("menu_overflow");
    menuOverflow.style.display= "none";
    let menuDisplay = document.getElementById("menu_display");
    menuDisplay.style.display= "none";
}

function MobileMenu(){
    MenuOverEnabled();
    MenuDisplay();
}

function MobileMenuOff(){
    let menuDisplay = document.getElementById("menu_display");
    menuDisplay.style.display= "none";
}