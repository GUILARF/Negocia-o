class NegociacaoController
{

    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new this.NegociacoesView('#negociacoesView');// passando a div onde será renderizada a tabela

    constructor()
    {
        this._inputData = <HTMLInputElement> document.querySelector('#data');
        this._inputQuantidade = <HTMLInputElement>  document.querySelector('#quantidade');
        this._inputValor = <HTMLInputElement> document.querySelector('#valor');
        this._negociacoesView.update();
    }

    adiciona(event: Event)
    {
        event.preventDefault(); //Previne o comportamento padrão, que é recarregar a página

        const negociacao = new Negociacao(
            
            //Convertendo os valores recebidos do html, que são strings
            //Formato mais aceito para data: 2019,12,08
            new Date(this._inputData.value.replace(/-/g, ',')),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );

        //Iniciar o array com 0 ou simplesmente limpá-lo
        //this._negociacoes.obtemArrayNegociacao().lengh = 0;
        this._negociacoes.adiciona(negociacao);
        this._negociacoes.obtemArrayNegociacao().array.forEach(negociacao => {
            console.log(negociacao.data);
        });
    }

}