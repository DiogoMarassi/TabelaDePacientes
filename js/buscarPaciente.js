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
            console.log(pacientes)
            localStorage.setItem("itensFixos", JSON.stringify(pacientes))
            console.log(itensFixos);
                for(var i=0; i < pacientes.length; i++)
                {   
                    var botaoFixo = criaNovoBotao();
                    var paciente = pacientes[i];
                    var pacienteTr = adicionaPacienteNaTabela(paciente);
                    pacienteTr.appendChild(botaoFixo);
                    removePacienteExistente(botaoFixo);
                    
                }

               

        } else {
            console.log( xhr.status);
        }
        
    });

    xhr.send();

    

    
});

