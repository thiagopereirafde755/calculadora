let tela = document.getElementById('tela');

function valor(valorr) {
    tela.value += valorr; 
}

function limpar() {
    tela.value = '';  
}

function ApagarUltima() {
    tela.value = tela.value.slice(0, -1);  
}

function calcular() {
    try {
        let expression = tela.value.replace(/%/g, '*0.01');  
        tela.value = eval(expression);  
    } catch (error) {
        tela.value = 'erro'; 
    }
}
