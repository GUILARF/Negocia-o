class Negociacoes
{
    private _negociacoes: Negociacao[] = []; // assim declara no typescript
    //private _negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao): void
    {
        this._negociacoes.push(negociacao);
    }

    obtemArrayNegociacao(): Negociacao[]
    {
        // cria um novo array e concatena o array de negociacao a ele, para não passar a referência exata do
        // array de negociação
        return [].concat(this._negociacoes);
    }
}