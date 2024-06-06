
let NomeDaPessoa = document.getElementById("chris")
let texto = document.getElementById("textoEnvio")

function chris()
{
    texto.innerHTML = "Ola, " + NomeDaPessoa.value + "Tudo bem"
}


let numero = document.getElementById("numero");
let convercao= document.getElementById("convercao")
let valor = document.getElementById("resposta");

function math()
{
    convercao.innerHTML = parseInt(numero.value) / 100
}

let NumeroIndefinido = document.getElementById("sucessor")
let resultado = document.getElementById("resultado")

let number = document.getElementById("number")

function sucessor()
{
    document.getElementById("sucessor").innerHTML = parseInt(number.value) + 1;
    document.getElementById("antecessor").innerHTML = parseInt(number.value) - 1;
}

let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");
let rps = document.getElementById("resposta");

function resultado2()
{
    if(numero1.value > numero2.value)
        {
            rps.innerHTML = numero1.value + " é menor que " + numero2.value
        }
        else
        {
            rps.innerHTML = numero2.value + " é maior que " + numero1.value
        }
}

var c = 1;
while(c <= 100)
    {
        console.log(c)
        c = c + 1;
    }

var c = 0;
while(c <= 50)
    {
        console.log(c)
        c = c + 5;
    }

var c = 100;
while(c >= 10)
    {
        console.log(c)
        c = c - 10;
    }

let = document.getElementById("salario")
let = document.getElementById("aumento")
let = document.getElementById("porcento")

function almento()
{
    if(salario.value > 1250)
        {
            salario.innerHTML = + ((parseInt( salario.value ) - 1250) * 100/10)
        }
        else
        {
            salario.innerHTML = + ((parseInt( salario.value ) - 1250) * 100/10)
        }
}