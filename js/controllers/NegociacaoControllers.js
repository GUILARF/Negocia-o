class NegociacaoController {
    constructor() {
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }
    adiciona(event) {
        event.preventDefault(); //Previne o comportamento padrão, que é recarregar a página
        const negociacao = new Negociacao(this._inputData.value, this._inputQuantidade.value, this._inputValor.value);
    }
}
