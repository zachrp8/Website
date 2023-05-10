let i =0;
let main = document.getElementsByTagName('main')[0];
main.innerHTML="<div class='flex' id='newDiv'></div>";
let div = document.getElementById('newDiv');
let arr = new Array("<div class='text-xxl'>Contact Us</div","<div class='text-xl'>To get in contact with us use one of the below social media links or send an email to <a href='trdotter@m.marywood.edu'>Todd Dotter</a></div")
for (i=0; i<arr.length; i++){
    div.innerHTML+= arr[i];
}