function myFunction() {
  console.log(window.location.href);
  if (window.location.href === "https://skill-swap-2fe5e.web.app/conference") {
    x.style.display = "block";
  } else {
    var x = document.getElementById("cool");
    x.style.display = "none";
  }
}

myFunction();
