// // selection
// document.getElementById
// document.getElementsByClassName
// document.getElementsByTagName

// document.querySelector // ye akela upper 3 ka kaam krta hai

// select and save
//let btn = document.querySelector('button'); 

var h1 = document.querySelector("h1"); // tag
h1.style.color = "red";
h1.style.fontFamily = "gilroy";
h1.style.fontSize = "50px";


var h2 = document.querySelector("h2"); // tag
h2.classList.add("makeitred"); // add class
h2.classList.remove("makeitred"); // remove class


var btn = document.querySelector("button"); // tag
btn.addEventListener("click", function(){
    alert("button clicked");
    btn.textContent = "downloading ...";
    btn.style.backgroundColor = "green";

    document.querySelector("button").appendChild(h1);
});