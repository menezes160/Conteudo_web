
let qtdCliques = 0;
let segundos = 0;
let cliquesPorMinuto = 0;

function handleClick(){
    qtdCliques += 1;
    let elementoQtdCliques = document.getElementById("quantidade-cliques");
    elementoQtdCliques.innerText = qtdCliques;
}

window.onload = ()=>{
    cronometro();
}

function cronometro(){
    setTimeout(()=>{

        segundos += 1;

        let elementoCronometro = document.getElementById("cronometro")
        elementoCronometro.innerText = segundos

        calculaCliquesPorMinuto()
        cronometro();
    },1000) 
}

function calculaCliquesPorMinuto(){
    cliquesPorMinuto = (qtdCliques / (segundos / 60)).toFixed();

    let elementoCliquesPorMinuto = document.getElementById("cpm")
    elementoCliquesPorMinuto.innerText = cliquesPorMinuto;
}