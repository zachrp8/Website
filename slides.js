let index = 0;
show(index);

// Next/previous controls
function slideController(n) {
    show(index += n);
}

// Thumbnail image controls
function currentSlide(n) {
    show(index = n);
}

function show(n) {
    let i;
    let boxes = document.getElementsByClassName("box"); //create array of boxes
    let dots = document.getElementsByClassName("dot");
    if (n > 6) {
        index = 0;
    }
    if (n < 0) {
        index = 6; // if the person clicks left and youre at the first slide go to the last one
    }
    for (i = 0; i < 7; i++) { //hide the non active slides
        boxes[i].style.display = "none";
    }
    for (i = 0; i < 7; i++) { //loop through the little dots
        dots[i].className = dots[i].className.replace(" on", "");
    }
    boxes[index].style.display = "block"; // show the slide we are on
    dots[index].className += " on"; //highlight the correct dot
}