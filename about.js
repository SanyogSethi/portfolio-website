// Setting toggle between dark mode and light mode when the button is pressed 
document.body.classList.toggle("dark-theme");
var icon=document.getElementById("icon");
icon.onclick=function(){

  document.body.classList.toggle("dark-theme");

  if(document.body.classList.contains("dark-theme")){
    icon.src="assets/sun.png";
  }
  
  else{
    icon.src="assets/moon.png";
  }
}

// Burger menu function
document.getElementById('menu-icon').addEventListener('click', function() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active');
  if (navbar.classList.contains('active')) {
    navbar.style.visibility = 'visible';
    navbar.style.opacity = '1';
  } else {
    navbar.style.visibility = 'hidden';
    navbar.style.opacity = '0';
  }
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

const zoompic = document.querySelector('.about-img');
zoompic.addEventListener("mouseover", () => {// Adds hovering class to scale up the image when the user hovers mouse over the field
  zoompic.classList.add('hovering');
})

zoompic.addEventListener("mouseout", () => {//Removes hovering class when the user removes the cursor from the field
  zoompic.classList.remove('hovering');
})

// Scaling up image by adding hovering class when mouse enters image class and removing the class when mouse leaves

const serviceLists = [
  'ServiceList',
  'ServiceList2',
  'ServiceList3',
  'ServiceList4'
];
// Using foreach loop to traverse among various elements in Services section of the website
serviceLists.forEach(id => {
  const element = document.querySelector(`#${id}`);
  // Scaling up and down images on mouseenter and mouseleave events
  if (element) {
    element.addEventListener("mouseenter", () => {
      element.classList.add('hoveringOver');
    });

    element.addEventListener("mouseleave", () => {
      element.classList.remove('hoveringOver');
    });
  }
});