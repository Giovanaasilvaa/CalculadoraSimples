function adicionarValor(valor) {
    document.getElementById('resultado').value += valor;
}

function limpar() {
    document.getElementById('resultado').value = '';
}

function calcular() {
    try {
        let expressao = document.getElementById('resultado').value;
        expressao = expressao.replace(/(\d+)%/g, (match, p1) => `(${p1} * 0.01)`);
        if (/\/\s*0/.test(expressao)) {
            throw new Error("Divisão por zero");
        }
        const resultado = eval(expressao);
        document.getElementById('resultado').value = resultado;
    } catch (e) {
        document.getElementById('resultado').value = 'Erro';
    }
}
