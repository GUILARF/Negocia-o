class NegociacoesView
{
    private _elemento: Element; // Criado element porque o querySelector retorna um elemento
    constructor(nomeElemento: string)
    {
        this._elemento = document.querySelector(nomeElemento)
    }

    update(negociacoes: Negociacoes):void
    {
        //comando abaixo preenche o html do elemento que foi passado por id com a tabela (no template)
        this._elemento.innerHTML = this.template(negociacoes); 
        // se não botar o this dá erro
        //this._elemento.innerHTML = template();
    }

    template(negociacoes: Negociacoes): string
    {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
                ${negociacoes.obtemArrayNegociacao().map(n=>
                    `
                        <tr>
                            <th>${n.data.getDate()}/${n.data.getMonth() + 1}/ ${n.data.getFullYear()}</th>
                            <th>${n.quantidade}</th>
                            <th>${n.valor}</th>
                            <th>${n.volume}</th>
                            
                        </tr>
                    `
                ).join('')//se não colocar o join, vai retornar um array, mas nós queremos uma stringona.
                          //getMonth() + 1 porque os meses vao de 0 a 11.
                }     
            </tbody>

            <tfoot>
            </tfoot>
        </table> 
        
        
        `
    }
}