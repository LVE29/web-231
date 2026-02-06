/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Leslie Espino
      Date: February 6th, 2026

      Filename: project03-01.js
*/

// Function to display a numeric value as a text string in the format $##.##
// Get all menu item checkboxes
let menuItems = document.getElementsByClassName("menuItem");

// Add click event listeners to each checkbox
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", calcTotal);
}

// Calculate and display the total order cost
function calcTotal() {
  let orderTotal = 0;

  for (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i].checked) {
      orderTotal += Number(menuItems[i].value);
    }
  }

  document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}

function formatCurrency(value) {
  return "$" + value.toFixed(2);
}
