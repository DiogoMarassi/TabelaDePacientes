var tabela = document.querySelector("table");
var paciente = document.querySelector(".paciente");

function removePacienteExistente(recebebotao)
{
    recebebotao.addEventListener("click", function(evento){
        const objetoClicado = evento.target.parentNode;
        console.log(evento.target);
        console.log(itensFixos) //está vazio
        const arrayClicado = itensFixos.find( element => element.nome === objetoClicado.childNodes[0].textContent );

        

        console.log(evento.target.parentNode);
        console.log(evento.target.parentNode.childNodes[0].textContent);
        console.log(arrayClicado); //undefined
        console.log(itensFixos.indexOf(arrayClicado)); //-1

        objetoClicado.classList.add('fadeOut');
        
       
        
        setTimeout(function(){
            objetoClicado.remove();
        }, 500);

                 
            itensFixos.splice(itensFixos.indexOf(arrayClicado), 1);
            console.log("itensFixos abaixo")
            console.log(itensFixos)
            localStorage.setItem("itensFixos", JSON.stringify(itensFixos));
        
    });
}



function removePaciente(recebebotao)
{
    recebebotao.addEventListener("click", function(evento){
        
        console.log(itens[0])
        evento.target.parentNode.classList.add('fadeOut');
        
        setTimeout(function(){
            evento.target.parentNode.remove();
        }, 500);
        const objetoClicado = evento.target.parentNode
        const arrayClicado = itens.find( elemento => elemento.nome === objetoClicado.childNodes[0].textContent )
        
        console.log(objetoClicado);
        console.log(objetoClicado.childNodes[0].textContent);
        console.log(arrayClicado);
        console.log(itens.indexOf(arrayClicado));
        itens.splice(itens.indexOf(arrayClicado), 1)

        

        
        localStorage.setItem("itens", JSON.stringify(itens));
    
    });
}





