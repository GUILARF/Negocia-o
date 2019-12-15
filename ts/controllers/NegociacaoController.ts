import {Negociacoes, Negociacao} from '../models/index'
import {NegociacoesView, MensagemView} from '../views/index'


export class NegociacaoController {

    private _inputData: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView', true);
    private _mensagemView = new MensagemView('#mensagemView', true);

    constructor() {
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoesView.update(this._negociacoes, this._negociacoesView._escapar);
    }

    adiciona(event: Event) {

        event.preventDefault();

        const negociacao = new Negociacao(
            //new Date(this._inputData.value.replace(/-/g, ',')), 
            new Date(this._inputData.value), 
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );

        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes, this._negociacoesView._escapar);
        this._mensagemView.update('Negociação adicionada com sucesso!', this._mensagemView._escapar);
    }
}