function getStyles() {
    let x = document.getElementById("mode");
    let y = document.getElementsByTagName("link")[0];
    let cssStyle= x.value;
    y.setAttribute("href", cssStyle);
    if(cssStyle=== "./stylesheets/dark.css"){
        localStorage.setItem("isDarkMode", true)
    } else {
        localStorage.setItem("isDarkMode", false)
    }
}
function randomcolor() {
    const color = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + color;
    const color2 = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.color = "#" + color2;
    const color21 = Math.floor(Math.random()*16777215).toString(16);
    document.getElementsByTagName("header")[0].style.backgroundColor= "#" + color21;
    const color3 = Math.floor(Math.random()*16777215).toString(16);
    document.getElementsByTagName("footer")[0].style.backgroundColor= "#" + color3;
    const color4 = Math.floor(Math.random()*16777215).toString(16);
    document.getElementsByTagName("footer")[0].style.color= "#" + color4;
}
function validateForm() {
    const inputs = document.getElementsByClassName("input");
    const error = document.getElementById("error-box");
    let retVal=true;
    for (let i =0; i < inputs.length; i++) {
        if(inputs[i].value==""){
            inputs[i].style.border="2px solid red";
            error.innerHTML="Missing Info";
            error.style.color="red";
            retVal=false;
        }
    }
    if (!inputs[1].value.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,3}$")){
        error.innerHTML = "Invalid Email Format";
        inputs[1].style.border="2px solid red";
        error.style.color="red";
        retVal=false;
    }
    return retVal;
}
function load() {
    let dark = false;
    if (typeof(Storage) !== "undefined") {
        if (localStorage.getItem("isDarkMode") !== null){
            dark = localStorage.getItem("isDarkMode");
        }               
    }
    if (dark) {
        var y = document.getElementsByTagName("link")[0];
        y.setAttribute("href", "./stylesheets/dark.css")
    }
    else {
        y.setAttribute("href", "./stylesheets/styles.css")
    }
}