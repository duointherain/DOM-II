// Your code goes here

// let test = document.getElementById("nav");

let navItems = document.getElementsByClassName(`nav-link`)

  navItems[0].addEventListener('mouseover', function(event)  {
    event.target.style.color = "hsl(38, 99%, 65%)"
})

navItems[0].addEventListener('mouseout', function(event)  {
  event.target.style.color = "black"
})

navItems[1].addEventListener('mouseover', function(event)  {
  event.target.style.color = "hsl(38, 99%, 65%)"
})

navItems[1].addEventListener('mouseout', function(event)  {
event.target.style.color = "black"
})
navItems[2].addEventListener('mouseover', function(event)  {
  event.target.style.color = "hsl(38, 99%, 65%)"
})

navItems[2].addEventListener('mouseout', function(event)  {
event.target.style.color = "black"
})

navItems[3].addEventListener('mouseover', function(event)  {
  event.target.style.color = "hsl(38, 99%, 65%)"
})

navItems[3].addEventListener('mouseout', function(event)  {
event.target.style.color = "black"
})

window.onload = (event) => {
  console.log('1x2 forever');
};


const card = document.querySelector('aside');

card.addEventListener('dblclick', function (e) {
  card.classList.toggle('large');
});


window.addEventListener("resize", function(event){
alert("Blue and Purple")
console.log('blue and purple')


});
