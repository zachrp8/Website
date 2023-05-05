function getStyles() {
    let x = document.getElementById("mode");
    let y = document.getElementsByTagName("link")[0];
    let cssStyle= x.value;
    y.setAttribute("href", cssStyle);
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
    let inputs = document.getElementsByClassName("input");
    for (let i =0; i < inputs.length; i++) {
        inputs[i].
    }
}
