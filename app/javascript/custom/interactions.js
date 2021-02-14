document.addEventListener('turbolinks:load', () => {  
  let turnRed = () => {
    document.getElementById('tofu-red').style.color = "red";
  }

  let initClickEvents = document.getElementById('clicker');
  initClickEvents.addEventListener('click', turnRed);
});