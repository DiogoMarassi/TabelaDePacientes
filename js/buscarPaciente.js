var botaoAdicionar = document.querySelector('#buscar-pacientes');


botaoAdicionar.addEventListener("click", function(){
    console.log("buscando pacientes...")

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes")

    xhr.addEventListener("load", function(){


        if(xhr.status == 200)
        {
            var resposta = xhr.responseText;
        console.log(resposta);
        console.log(typeof resposta);

        var pacientes = JSON.parse(resposta);
        
        pacientes.forEach(function(paciente){
        
            adicionaPacienteNaTabela(paciente)
        });
        } else {
            console.log( xhr.status);
        }
        
    });

    xhr.send();

    

    
});

