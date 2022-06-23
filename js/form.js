var botaoAdicionar = document.querySelector('.botao-novo-paciente')
var contadorDePacientes = 0

botaoAdicionar.addEventListener("click", function(event) 
{
    event.preventDefault();

    var form = document.querySelector('.info-novo-paciente');
    
    var paciente = resgataInfoDoForm(form);
    
    var pacienteTr = montaTr(paciente);

    

    var erros = validaPaciente(paciente);
    console.log(erros);

    if(erros.length > 0)
    {
        exibeMensagensDeErro(erros);
        return;  
    }

    colocaNaTabela(pacienteTr);

    form.reset();

    contadorDePacientes++;

    
   
});

function exibeMensagensDeErro(erros)
{
    var ul = document.querySelector('#mensagem-erro');

    ul.innerHTML = ""

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        li.classList.add('erroLi')
        ul.appendChild(li);

    });
}

function resgataInfoDoForm(form)
{
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;   
}

function montaTr(paciente)
{
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));
    
    return pacienteTr;   
}

function montaTd(dado, classe)
{
    var td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)
    return td;  
}

function validaPaciente(paciente)
{

    var erros = [];

    if(paciente.nome.length == 0)
    {
        erros.push("O nome é inválido");
    }
    
    if(!validaPeso(paciente.peso) || paciente.peso.length == 0)
    {
        erros.push("O peso é inválido!");
    }

    if(!validaAltura(paciente.altura) || paciente.altura.length == 0)
    {
        erros.push("A altura é inválida!");
    } 

    if(paciente.gordura.length == 0)
    {
        erros.push("A % de gordura é inválida");
    }
    
    return erros;
}



function colocaNaTabela(pacienteTr)
{
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);  
    
    var ul = document.querySelector('#mensagem-erro');
    ul.innerHTML = ""
}

function adicionaPacienteNaTabela(paciente)
{
    
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr)
    
}

