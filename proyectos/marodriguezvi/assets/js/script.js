var btnMenuOpen = document.getElementById("btn-menu-open");
var menuLateral = document.getElementById("menu-lateral");
var btnMenuClose = document.getElementById("btn-menu-close");
var btnMenuToggle = document.getElementById("btn-menu-toggle");
var navLinks = document.getElementById("nav-links");
window.addEventListener("resize", arreglarNavLinks);

btnMenuOpen.addEventListener("click", mostrarMenuLateral);
btnMenuClose.addEventListener("click", ocultarMenuLateral);
btnMenuToggle.addEventListener("click", toggleNavLinks);


function mostrarMenuLateral() {
  menuLateral.classList.add("mostrar");
}

function ocultarMenuLateral() {
  menuLateral.classList.remove("mostrar");
}

function toggleNavLinks() {
  navLinks.classList.toggle("mostrar");
}

function arreglarNavLinks() {
  if(window.innerWidth >= 900){
    navLinks.classList.remove("mostrar");
  }
}

function cargarDatos() {
  var datos = [
    {url: "//unal.edu.co", nombre: "UNAL", instruccion: "Instrucción UNAL"},
    {url: "//css-trick.co", nombre: "CSS trick", instruccion: "Instrucción CSS"},
    {url: "assets/uploads/actividades/actividad-normal/index.html", nombre: "Determinar operación", instruccion: "Fijate en los números y selecciona la operación que da el resultado"},
    {url: "assets/uploads/actividades/actividad-canvas/index.html", nombre: "Actividad Canvas", instruccion: "Instrucción CSS"},
  ]

  return datos;
}

function generarLinks() {
  var menuLinks = document.getElementById("menu-links");
  menuLinks.innerHTML = "";

  var links = cargarDatos();
  if(links.length > 0){
    for(var i = 0; i < links.length; i++){
      var texto = document.createTextNode(links[i].nombre);
      var link = document.createElement("a");
      link.href = links[i].url;
      /* Abrir link en un iframe, por medio del name*/
      link.target = "main-iframe";
      link.appendChild(texto);

      var itemLista = document.createElement("li");
      itemLista.appendChild(link);

      menuLinks.appendChild(itemLista);
    }
  }else{
    var texto = document.createTextNode("No se ha encontrado ninguna actividad");
    var itemLista = document.createElement("li");
    itemLista.appendChild = texto;
    menuLinks.appendChild(itemLista);
  }
}

generarLinks();