//adding dynamic animation to the role
const roles = ["Computer Science Student", "Web Designer", "Programmer"];
let index=0;

setInterval(()=> {
 
  document.querySelector('.role').textContent = roles[index];
  index = (index + 1) % roles.length;
},3000);