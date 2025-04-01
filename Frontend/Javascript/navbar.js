let menu = document.getElementById("menu");

function showDropdown () {

   if (menu.className === "nav-menu") {
      menu.className += " responsive";
      showLinks();
   } else {
      menu.className = "nav-menu";
      hideLinks();
   }
}

function showLinks () {
   let moreLinks = document.querySelectorAll(".showLink");

   moreLinks.forEach(function (item) {
      item.style.display = "inline";
   });
}

function hideLinks () {
   let moreLinks = document.querySelectorAll(".showLink");
   moreLinks.forEach(function (item) {
      item.style.display = "none";
   });
}

function windowResize() {
   let windowWidth = window.innerWidth;
 
   if (windowWidth > 795) {
      menu.className = "nav-menu";
      hideLinks();
   } 
 }

 window.addEventListener("resize", windowResize);