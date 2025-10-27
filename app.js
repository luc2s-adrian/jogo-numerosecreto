function exibirTextoNaTela(tag, texto) {
let elemento = document.querySelector(tag);
elemento.innerHTML = texto;
}
function exibirMensagemInicial() {
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Tente advinhar o número entre 1 e 10!');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Você acertou!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Parabéns, você adivinhou o número secreto com ${tentativas} ${palavraTentativas}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        }
else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor!');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior!');
        } tentativas++;
        limparCampo();
    }
}

function gerarNumeroSecreto() {
    return Math.floor(Math.random() * 10) + 1;
}
let numeroSecreto = gerarNumeroSecreto();
let tentativas = 1;

function limparCampo() {
    document.querySelector('input').value = '';
    document.querySelector('input').focus();
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroSecreto();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
   }
