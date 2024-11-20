document.addEventListener('DOMContentLoaded', function () {
  AOS.init();

  setTimeout(() => {
    const btnSim = document.getElementById("btn-sim");
    btnSim.style.visibility = "visible";
    btnSim.style.opacity = 1;
  }, 6000);

  setTimeout(() => {
    const ultimaChamada = document.getElementById("link-ultima-chamada");
    ultimaChamada.style.visibility = "visible";
    ultimaChamada.style.opacity = 1;
  }, 12000);
})
