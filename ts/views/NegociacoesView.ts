class NegociacoesView
{
    private _elemento: Element; // Criado element porque o querySelector retorna um elemento
    constructor(nomeElemento: string)
    {
        this._elemento = document.querySelector(nomeElemento)
    }

    update():void
    {
        //comando abaixo preenche o html do elemento que foi passado por id com a tabela (no template)
        this._elemento.innerHTML = this.template(); 
        // se não botar o this dá erro
        //this._elemento.innerHTML = template();
    }

    template(): string
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
                       
            </tbody>

            <tfoot>
            </tfoot>
        </table> 
        
        
        `
    }
}