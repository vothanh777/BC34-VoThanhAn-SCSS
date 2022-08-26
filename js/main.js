if (window.innerWidth >= 1200) {
  window.addEventListener("scroll", function () {
    this.document.getElementsByTagName("header")[0].style.backgroundColor =
      "#fff";
    if (this.scrollY === 0) {
      this.document.getElementsByTagName("header")[0].style.backgroundColor =
        "transparent";
    }
  });
} else {
  this.document.getElementsByTagName("header")[0].style.backgroundColor =
    "#fff";
}

if (document.getElementById("btnToggle").clicked == true) {
  this.document.getElementsByTagName("header")[0].style.backgroundColor =
    "#fff";
}
