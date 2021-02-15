document.addEventListener('turbolinks:load', () => {  
  let turnRed = () => {
    let toggleElement = document.getElementById('tofu-red');
    toggleElement.classList.toggle("red-text");
    gsap.to("#tofu-red", {duration: 2, x: 300});
    gsap.to("#clicker", {duration: 3, x: 300});
  }

  let initClickEvents = document.getElementById('clicker');
  initClickEvents.addEventListener('click', turnRed);
});