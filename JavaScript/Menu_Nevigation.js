function myFunction(x) {
  x.classList.toggle("change");

  var menu = document.getElementById("Open_Mobile");
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "block";  
  } else {
    menu.style.display = "none";  
  }
}

// document.getElementById("Village_Port").addEventListener("click", function() {
//   var villages = document.getElementById("Villages");

//   if (villages.style.display === "none" || villages.style.display === "") {
//     villages.style.display = "block";  
//   } else {
//     villages.style.display = "none"; 
//   }
// });

function openVillageLink() {
  const select = document.getElementById("villages");
  const url = select.value;
  if (url) {
    window.open(url, '_blank'); 
  }
}


function openDeptLink() {
  const select = document.getElementById("Departments");
  const url = select.value;
  if (url) {
    window.open(url, '_blank'); 
  }
}