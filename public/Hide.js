function myFunction(call) {
  var x = document.getElementById("cool");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

myFunction();
