/*var form = document.querySelector("form");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  var search = form.querySelector("input[type=search]");
  search.value = "site:css-tricks.com " + search.value;
  form.submit();
});*/

function saludo() {
    
    "use strict";
    
    var fecha = new Date(),
        hora = fecha.getHours(),
        texto,
        usuario = "Sergio",
        documento = document.getElementsByTagName('body'),
        posicion = document.getElementById('saludo'),
        encab = document.getElementsByClassName('saludo'),
        boton = document.getElementsByClassName('botones'),
        temp = document.getElementById('weather'),
        menumov = document.getElementById('menumovil'),
        encab2 = document.getElementsByClassName('colorHead');
    
    if (hora >= 6 && hora <= 14) {
        
        texto = "Buenos días " + usuario;
        posicion.innerHTML = '<h1 class="saludo">' + texto + '</h1>';
        documento[0].style.backgroundImage = "url('images/background7.jpg')";
        encab[0].style.backgroundColor = "rgba(0, 99, 177,.6)";
        boton[0].style.backgroundColor = "rgba(0, 99, 177,.6)";
        temp.style.backgroundColor = "rgba(0, 99, 177,.6)";
        menumov.style.backgroundColor = "rgba(0, 99, 177,.6)";
        document.getElementsByClassName('sidenav')[0].style.backgroundColor = "rgba(0, 99, 177,.6)";
        
        for (var i = 0; i < encab2.length; i++){
            encab2[i].style.backgroundColor = "rgba(0, 99, 177,.6)";
        }
        
    }
    if (hora > 14 && hora < 20) {
        
        texto = "Buenas tardes " + usuario;
        posicion.innerHTML = '<h1 class="saludo">' + texto + '</h1>';
        documento[0].style.backgroundImage = "url('images/background8.jpg')";
        encab[0].style.backgroundColor = "rgba(85, 177, 0,.6)";
        boton[0].style.backgroundColor = "rgba(85, 177, 0,.6)";
        temp.style.backgroundColor = "rgba(85, 177, 0,.6)";
        menumov.style.backgroundColor = "rgba(85, 177, 0,.6)";
        document.getElementsByClassName('sidenav')[0].style.backgroundColor = "rgba(85, 177, 0,.6)";
        
        for (var i = 0; i < encab2.length; i++){
            encab2[i].style.backgroundColor = "rgba(85, 177, 0,.6)";
        }
    }
    if (hora >= 20 || hora < 6) {
        
        texto = "Buenas noches " + usuario;
        posicion.innerHTML = '<h1 class="saludo">' + texto + '</h1>';
        documento[0].style.backgroundImage = "url('images/background9.jpg')";
        encab[0].style.backgroundColor = "rgba(0, 0, 0,.6)";
        boton[0].style.backgroundColor = "rgba(0, 0, 0,.6)";
        temp.style.backgroundColor = "rgba(0, 0, 0,.6)";
        menumov.style.backgroundColor = "rgba(0, 0, 0,.6)";
        document.getElementsByClassName('sidenav')[0].style.backgroundColor = "rgba(0, 0, 0,.6)";
        
        for (var i = 0; i < encab2.length; i++){
            encab2[i].style.backgroundColor = "rgba(0, 0, 0,.6)";
        }
    }
    
    
}

function hora() {
    
    var fecha = new Date(),
        hora = fecha.getHours(),
        min = fecha.getMinutes(),
        posicion = document.getElementById('reloj');
    
    if (hora < 10 && min < 10) {
        
        posicion.innerHTML = '0' + hora + ':' + '0' + min;
        
    } else if (min < 10 && hora >= 10){
        
        posicion.innerHTML = hora + ':' + '0' + min;
        
    } else if (hora < 10 && min >= 10) {
        
        posicion.innerHTML = '0' + hora + ':' + min;
    } 
    
    else {
        
        posicion.innerHTML = hora + ':' + min;
    }
    
        
}

function darHora() {
    
    hora();
    setInterval(hora, 60000);
}

function darSaludo() {
    
    saludo();
    setInterval(saludo, 60000);
}

 


 


