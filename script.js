let button = document.getElementById("trollButton");
let trollsound = document.getElementById("trollsound");

button.addEventListener("click", function() {
  trollsound.currentTime = 0;
  trollsound.play();
    let x = Math.random() * (window.innerWidth - button.offsetWidth);
    let y = Math.random() * (window.innerHeight - button.offsetHeight);

    button.style.left = x + "px";
    button.style.top = y + "px";
});

let Yesbutton = document.getElementById("Yesbutton");
let yessound = document.getElementById("yessound");

Yesbutton.addEventListener("click", function() {
  yessound.currentTime = 0;
  yessound.play();
  video.play();

  document.getElementById("myAlert").style.display = "block";
});

let closeButton = document.getElementById("okButton");

closeButton.addEventListener("click", function() {
  document.getElementById("myAlert").style.display = "none";
  yessound.pause();
});
