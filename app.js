
 document.getElementsByTagName("nav")[0].firstElementChild.style.color = "black";
let a =document.getElementById("ab");
console.log(a); 
a.style.color = "orange"

document.getElementsByTagName("nav")[0].firstElementChild.style.color = "yellow"; 
let f = document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green";

Array.from(document.getElementsByTagName("li")).forEach((element) => {
    element.style.backgroundColor = "pink"
});