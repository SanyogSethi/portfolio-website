// Declaring texts to switch between when entering homepage
const texts = ["CS Student", "Tech Enthusiast", "Aspiring DSA and JS"];
const speed = 50; // milliseconds per character
let textIndex = 0;
let charIndex = 0;

// Burger menu button functionality:
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


// Creating function to type the above text one by one with a smooth transition
function typeText() {
  const currentText = texts[textIndex];
  const textContainer = document.getElementById('text-container');
  if (charIndex < currentText.length) {
    textContainer.innerHTML = currentText.substring(0, charIndex + 1);
    charIndex++;
    setTimeout(typeText, speed);
  } 
  else {    
    textIndex = (textIndex + 1) % texts.length;
    charIndex = 0;    
    textContainer.className = "";    
    
    setTimeout(() => {      
      textContainer.className = "border";
      typeText();
    }, 1000);
    
  }
}
window.onload = typeText; //Calling function to type text when the website is loaded

var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");

// Page transition function
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-anchor');
  
  links.forEach(link => {
      link.addEventListener('click', (event) => {
          event.preventDefault();
          
          const target = link.href;
          document.body.classList.add('fade-out');
          
          setTimeout(() => {
              window.location.href = target;
          }, 500);
      });
  });
});

// Playing audio on text input in form
var log = console.log;
var audio = new Audio('sound.mp3');
function typing(){
  audio.play();
}

// Function to expand education section in website 
function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active-link");
  }
  for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab")
}

// Setting dark mode as default mode
document.body.classList.toggle("dark-theme");
var icon=document.getElementById("icon"); //To change icon from sun to moon on switching between dark and light modes

// Creating function to toggle between dark and light mode in main website
icon.onclick=function(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    icon.src="assets/sun.png";}
    else{
      icon.src="assets/moon.png";
  }
}

const zoompic = document.querySelector('#picture');
zoompic.addEventListener("mouseover", () => {// Adds focus class when the user hovers mouse over the field and removes blur class
  zoompic.classList.add('img-mouseover');
})

zoompic.addEventListener("mouseout", () => {//Removes focus class when the user removes the cursor from the field and adds the blur class
  zoompic.classList.remove('img-mouseover');
})

//Manipulating hover effect on image in about section
const zoomin = document.querySelector('#picture2');
zoomin.addEventListener("mouseover", () => {
  zoomin.classList.add('zoomin-class');
})

zoomin.addEventListener("mouseout", () => {
  zoomin.classList.remove('zoomin-class');
})

//Manipulating hover effect on project cards on portfolio section
const focuss = document.querySelector('.portfolio-card');
focuss.addEventListener("mouseover", () => {
    focuss.classList.add('transformation-class');
})

focuss.addEventListener("mouseout", () => {
    focuss.classList.remove('transformation-class');
})

const focuss2 = document.querySelector('#cardOP');
focuss2.addEventListener("mouseover", () => {
    focuss2.classList.add('transformation-class');
})

focuss2.addEventListener("mouseout", () => {
    focuss2.classList.remove('transformation-class');
})

// Form validation
// Function to set error of any particular field in form
function seterror(id, error){
  element = document.getElementById(id);
  var er = 0;
  if(id=="FName")
    er = 0;
  else if(id=="LName")
    er=1;
  else if(id=="Email")
    er=2;
  else
    er=3;
  element = document.getElementsByClassName('error')[er].innerHTML = error;
}
// Function to clear any existing error messages when condition is satisfied
function clearErrors(){
  var firstname = document.forms['form']["FName"].value;
  var email = document.forms['form']["Email"].value;
  element = document.getElementsByClassName('confirmation-f')[0].innerHTML = firstname;
  element = document.getElementsByClassName('confirmation-f')[1].innerHTML = email;

  errors = document.getElementsByClassName('error');
  for(let item of errors){
    item.innerHTML = "";
  }
}

// Function to verify email format 
function validEmail(email){
  let emailRegex = /^([A-Z0-9_+-]+\.?)*[A-Z0-9_+-]@([A-Z0-9][A-Z0-9-]*\.)+[A-Z]{2,}$/i;
  return emailRegex.test(email);
}
// Main function to validate Form
function validateForm(){
  event.preventDefault;//Preventing default form submission
  clearErrors();//Clearing all existing errors before validating form
  // Storing values of inputs in their corresponding js variables
  var firstname = document.forms['form']["FName"].value;
  var lastname = document.forms['form']["LName"].value;
  var email = document.forms['form']["Email"].value;
  var message = document.forms['form']["Message"].value;
  var errorfound = false;

  
  // Checking if the field is empty
  if(firstname.length == 0){
    seterror("FName","First Name can't be empty");
    errorfound = true;
  }
  // Checking if the name is too short, We took a minimum value of 3 as a feasible name should have atleast 3 characters such as "Sam" 
  else if(firstname.length <3){
    seterror("FName", "The name is too short");
    errorfound = true;
  }

  if(lastname.length == 0){
    seterror("LName","Last Name can't be empty");
    errorfound = true;
  }
  else if(lastname.length <3){
    seterror("LName", "The last name is too short");
    errorfound = true;
  }

  if(email.length == 0){
    seterror("Email","Email can't be empty");
    errorfound = true;
  }
  else if(email.length <5){
    seterror("Email", "The Email name is too short");
    errorfound = true;
    // The checking of @ and . in Email is done by validEmail() function
  }
  else if(!validEmail(email)){
    seterror("Email","Enter a valid email");
    errorfound = true;
  }

  if(message.length == 0){
    seterror("Message","Message can't be empty");
    errorfound = true;
  }
  else if(message.length <10){
    seterror("Message", "The message is too short");
    errorfound = true;
  }

  //If there is no error while form submission in any field, Show a confirmation message
  if(errorfound == false){
    openpopup();
    return false;
  }
  else{
    closepopup();
    return false;
  }

  return false;
}
// Form validation ends here

//Handling focus and blur events in Form fields

// Helper function to handle focus and blur in form fields
function handleFocusEvents(element) {
  let focused = false;
  // adding two event listeners, one for mouseover and other for focus(mostly in case of mobile view)
  element.addEventListener("focusin", () => {
    focused = true;
    element.classList.add('focus');
    element.classList.remove('blur');
  });

  element.addEventListener("mouseover", () => {
    if (!focused) {
      element.classList.add('focus');
      element.classList.remove('blur');
    }
  });

  element.addEventListener("focusout", () => {
    element.classList.remove('focus');
    element.classList.add('blur');
    focused = false;
  });

  element.addEventListener("mouseout", () => {
    if (!focused) {
      element.classList.remove('focus');
      element.classList.add('blur');
    }
  });
}

// Using map function to switch between different fields of the form
const fields = ['#FName', '#LName', '#Email', '#Message'].map(selector => document.querySelector(selector));

// Adding event listeners to fields
fields.forEach(field => handleFocusEvents(field));

let popup = document.getElementById("confirmation");

function openpopup(){
  //Shows confirmation message if form is validated properly
  popup.classList.add("show-confirmation");
}
function closepopup(){
  // Hides confirmation message if the form validation isn't performed properly
  popup.classList.remove("show-confirmation");
}

// JS ends here