document.addEventListener('turbolinks:load', () => {  
  let turnRed = () => {
    let toggleElement = document.getElementById('tofu-red');
    toggleElement.classList.toggle("red-text");
    gsap.to("#tofu-red", {duration: 2, x: 300});
    gsap.to("#clicker", {duration: 3, x: 300});
  }

  let initChangeRed = document.getElementById('clicker');
  initChangeRed.addEventListener('click', turnRed);

  let bounceTofu = () => {
    let tofu = document.getElementsByClassName('tofu');
    gsap.to(tofu, { duration: 4, ease: "bounce.in", x: 300 });
    gsap.to(tofu, { duration: 4, ease: "back.out(1.7)", y: -100 });
  }

  let initTofuBounce = document.getElementById('bounce');
  initTofuBounce.addEventListener('click', bounceTofu);
});