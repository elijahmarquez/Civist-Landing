/**
 * SIDE MENU
 * If somebody clicks on the menu icon, let the fireworks begin...
 * We're listening to the 'menu-trigger' ID for some action, then we fire 'sideMenuAppears'
 * Likewise, we're listening to the 'menu-close' ID for a click, then we fire 'sideMenuDisappears' when that happens
 */
document
  .getElementById("menu-trigger")
  .addEventListener("click", sideMenuAppears);
document
  .getElementById("menu-close")
  .addEventListener("click", sideMenuDisappears);

// This adds a show-menu class from the CSS that ALREADY exists, we're adding it in here
// This creates the animation because of the interplay of adding the CSS class via JS
// The browser then interprets the CSS Animations as the classes change
// Go look at the .show-menu code and notes in the CSS
function sideMenuAppears() {
  // console.log('sideMenuAppears() is active'); - if you want to test the function, uncomment this
  document.getElementById("side-menu").classList.add("show-menu");
}

/* When you click menu close, it puts the hide-menu class onto #side-menu, reversing what just happened */
function sideMenuDisappears() {
  // console.log('sideMenuDisappears() is active'); - if you want to test the function, uncomment this
  document.getElementById("side-menu").classList.remove("show-menu");
}
