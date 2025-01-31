document.addEventListener("DOMContentLoaded", function () {
  var myUL = document.getElementById("myUL");

  // Function to create a new list item
  function newElement() {
      var inputValue = document.getElementById("myInput").value.trim();
      if (inputValue === '') {
          alert("You must write something!");
          return;
      }

      var li = document.createElement("li");
      li.textContent = inputValue;
      li.className = "task-item";

      // Create close button
      var span = document.createElement("SPAN");
      span.className = "close";
      span.innerHTML = "\u00D7";
      li.appendChild(span);
      
      myUL.appendChild(li);
      document.getElementById("myInput").value = "";

      // Add event listener for removing items
      span.onclick = function () {
          li.remove();
      };
  }

  // Add button event listener
  document.querySelector(".addBtn").addEventListener("click", newElement);

  // Add event listener for "Enter" key
  // Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  debugger;
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);  
});
