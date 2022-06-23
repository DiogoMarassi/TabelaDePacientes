var tabela = document.querySelector("table");
var paciente = document.querySelector(".paciente");

tabela.addEventListener("dblclick", function(evento){
	evento.target.parentNode.classList.add('fadeOut');

    setTimeout(function(){
        evento.target.parentNode.remove();
    }, 500);

});


