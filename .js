document.addEventListener("DOMContentLoaded", function() {
    var menuIcono = document.querySelector(".menu_icono");
    var listaEnlaces = document.querySelector(".head_navegacion-lista");
  
    menuIcono.addEventListener("click", function() {
      listaEnlaces.classList.toggle("mostrar");
    });
  });