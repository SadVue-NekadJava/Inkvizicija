window.onload = function() {
  var p = document.querySelector("p");
  // var h = document.querySelector("h2");

  var html = p.innerHTML
    .split("")
    .map(function(val) {
      return "<span class='letter'>" + val + "</span>";
    })
    .join("");

  document.getElementById("h2").innerHTML = html;
  // document.getElementById("div").innerHTML = html;

  var letter = document.getElementsByClassName("letter");

  for (var i = 0; i < letter.length; i++) {
    letter[i].style.transition = "opacity 800ms " + i * 10 + "ms";
  }
  function withOpacity() {
    for (var i = 0; i < letter.length; i++) {
      letter[i].style.opacity = 1;
    }
  }

  function noOpacity() {
    for (var i = 0; i < letter.length; i++) {
      letter[i].style.opacity = 0;
      // letter[i].style.className = letter[i].style.className + " let";
    }
  }

  window.setTimeout(function() {
    withOpacity();
  }, 500);

  var flag = 0;

  // button click
noOpacity();

};
