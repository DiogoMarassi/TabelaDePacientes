var botaoAdicionar = document.querySelector('.botao-novo-paciente')
var contadorDePacientes = 0
var tabela = document.querySelector("table");
var pacientes = document.querySelectorAll(".paciente");
var itens = JSON.parse(localStorage.getItem("itens")) || [];
console.log(itens);

var itensFixos = JSON.parse(localStorage.getItem("itensFixos")) || [];

for(var i=0; i < pacientes.length; i++)
{   
    var botaoFixo = criaNovoBotao();
    var paciente = pacientes[i];
    paciente.appendChild(botaoFixo);
    removePacienteExistente(botaoFixo);
}


for(var i=0; i < itens.length; i++)
{
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    var botao = criaNovoBotao();

    pacienteTr.appendChild(montaTd(itens[i].nome, 'info-nome'));
    pacienteTr.appendChild(montaTd(itens[i].peso, 'info-peso'));
    pacienteTr.appendChild(montaTd(itens[i].altura, 'info-altura'));
    pacienteTr.appendChild(montaTd(itens[i].gordura, 'info-gordura'));
    pacienteTr.appendChild(montaTd(itens[i].imc, 'info-imc'));

    colocaNaTabela(pacienteTr);

    removePaciente(botao);

    console.log(botao)

    pacienteTr.appendChild(botao);
}

for(var i=0; i < itensFixos.length; i++)
{
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    var botao = criaNovoBotao();

    pacienteTr.appendChild(montaTd(itensFixos[i].nome, 'info-nome'));
    pacienteTr.appendChild(montaTd(itensFixos[i].peso, 'info-peso'));
    pacienteTr.appendChild(montaTd(itensFixos[i].altura, 'info-altura'));
    pacienteTr.appendChild(montaTd(itensFixos[i].gordura, 'info-gordura'));
    pacienteTr.appendChild(montaTd(itensFixos[i].imc, 'info-imc'));

    colocaNaTabela(pacienteTr);

    removePacienteExistente(botao);

    

    pacienteTr.appendChild(botao);
    console.log(pacienteTr)
    console.log("tetetet")
}






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

    var botao = criaNovoBotao();

    console.log(botao)
    
    pacienteTr.appendChild(botao);

    colocaNaTabela(pacienteTr);
   
    itens.push(paciente);

   

    console.log(itens);

      
    localStorage.setItem("itens", JSON.stringify(itens));

    form.reset();

    removePaciente(botao);

    contadorDePacientes++;

    
   
});


function criaNovoBotao()
{
    var botao = document.createElement('button');
    botao.classList.add('botao-novo');
    botao.textContent = 'x';
    return botao;
}

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
        imc: calculaImc(form.peso.value, form.altura.value),    
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
    return pacienteTr;
}


