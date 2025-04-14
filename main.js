
// menu Icon functionality

const menuBtn = document.getElementById("menu-btn");

const navLinks = document.getElementById("navLinks");

const menuBtnIcon = menuBtn.querySelector("i");

// event listener for menu button click
menuBtn.addEventListener("click", (e)=> {
  // add open class to nav links
  navLinks.classList.toggle("open");

  // toggle icon between menu and close
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class" , isOpen ? "ri-close-line" : "ri-menu-line");
});

// handling when i click on a link the menu disappears and the icon changes to menu

navLinks.addEventListener("click", (e)=> {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});