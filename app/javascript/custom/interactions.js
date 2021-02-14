document.addEventListener('turbolinks:load', () => {  
  let turnRed = () => {
  //   document.getElementById('tofu-red').style.color = "red";
    let toggleElement = document.getElementById('tofu-red');
    toggleElement.classList.toggle("red-text");
  }

  let initClickEvents = document.getElementById('clicker');
  initClickEvents.addEventListener('click', turnRed);
});