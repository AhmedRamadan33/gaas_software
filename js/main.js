let header = document.getElementById("header")

window.onscroll = function () {
  
  this.scrollY >= 250 ? header.classList.add("header_2") : header.classList.remove("header_2");

};


