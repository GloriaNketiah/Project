// set up firebase app and firestore database
const firebaseConfig = {
  apiKey: "AIzaSyBIPKT-Ay1J1xTCPlnfEJ-BKpa1hCFjkyQ",
    authDomain: "project-33c8a.firebaseapp.com",
    projectId: "project-33c8a",
    storageBucket: "project-33c8a.appspot.com",
    messagingSenderId: "142812338420",
    appId: "1:142812338420:web:a052fb142ba6633fe0e6a1"
  };
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
console.log("firebase setup complete!");

let nameForm = document.getElementById("nameForm");

  nameForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let Name = document.getElementById("Name");
  if (Name.value == "") {
    alert("Please enter a name");
  } else {
    alert ("Name is suceessflly submitted");
    console.log(Name.value);
    Name.value == "";
    db.collection("Students").add({
      Name: Name.value,
    });
  }
});

// JS code for banner
document.querySelector(".banner__close").addEventListener("click", function () {
  this.closest(".banner").style.display = "none";
});

// JS code for navigation bar search
function myFunction2() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}


// JS code for popup
const video = document.querySelector('video');
window.addEventListener('scroll', () => {
  const value = 1 + window.scrollY / -600;
  video.style.opacity = value;
});

$ = function(id) {
  return document.getElementById(id);
}

var show = function(id) {
  $(id).style.display ='block';
}
var hide = function(id) {
  $(id).style.display ='none';
}

// Function to remove row from table
function myFunction() {
  document.getElementById("myTable").deleteRow(0);
}