function open_bitch() {
  document.getElementById("foldOutMenu").style.transform = "none";
}
function close_bitch() {
  document.getElementById("foldOutMenu").style =
    "transform-origin: 0% 0%; transform: translate(-100%, 0); transition: transform 0.9s cubic-bezier(0.77,0.2,0.05,1.0);";
}
