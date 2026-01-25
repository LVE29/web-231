/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Leslie Espino
      Date:   January, 24th, 2026

      Filename: project02-02.js
 */
function verifyForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();

  name && email && phone
    ? window.alert("Thank you!")
    : window.alert("Please fill in all fields");
}

document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();
  verifyForm();
});
