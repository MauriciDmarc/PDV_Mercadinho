var header = document.getElementById("header");
var navigationHeader = document.getElementById("navigation-header");
var content = document.getElementById("content");
var showSidebar = false;

function toggleSidebar() {
  showSidebar = !showSidebar;
  if (showSidebar) {
    navigationHeader.style.marginLeft = "-5vw";
    navigationHeader.style.animationName = "showSidebar";

  } else {
    navigationHeader.style.marginLeft = "-100vw";
    navigationHeader.style.animationName = "";

  }
}

function closeSidebar() {
  if (showSidebar) {
    showSidebar = true;
    toggleSidebar();
  }
}

window.addEventListener("resize", function (event) {
  if (window.innerWidth > 768 && showSidebar) {
    showSidebar = true;
    toggleSidebar();
  }
});
