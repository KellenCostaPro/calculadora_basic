function inserir(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function apagar() {
    document.getElementById('resultado').innerHTML = "";
}

function del() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;

    if (resultado) {
        try {
            document.getElementById('resultado').innerHTML = eval(resultado);
        } catch (error) {
            document.getElementById('resultado').innerHTML = 'Erro ao calcular: ' + error.message;
            alert('Ocorreu um erro ao calcular: ' + error.message);
        }
    } else {
        alert('Nenhum cálculo a ser realizado. Insira uma expressão.');
    }
}
