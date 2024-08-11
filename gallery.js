// Setting toggle between dark mode and light mode when the button is pressed 
document.body.classList.toggle("dark-theme");
var icon=document.getElementById("icon");
icon.onclick=function(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    icon.src="assets/sun.png";}
    else{
      icon.src="assets/moon.png";
  }
}
// Menu button (Burger menu)
document.getElementById('menu-icon').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});

// Page transition 
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-anchor');
  
  links.forEach(link => {
      link.addEventListener('click', (event) => {
          event.preventDefault();
          
          const target = link.href;
          document.body.classList.add('fade-out');
          
          setTimeout(() => {
              window.location.href = target;
          }, 500); // Duration matches the CSS transition duration
      });
  });
});

// Declaring a constant to store info of all projects/grid items
const items = document.querySelectorAll('.projects');

// Running a forEach loop to add hover effecton image and container and show info over the project tile using .mouseover class in CSS using mouseover event Listener in JS
items.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.classList.add('mouseover');
    });
    // Removing the .mouseover class from projects when mouseout event occurs, i.e., when mouse pointer leaves the project area
    item.addEventListener('mouseout', () => {
        item.classList.remove('mouseover');
    });
});