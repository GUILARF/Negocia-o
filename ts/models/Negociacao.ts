class Negociacao {

    // Pode trocar todo codigo abaixo comentado pela linha a seguir
    constructor(private _data: Date, private _quantidade: number, private _valor: number) {}
    
    // private _data;
    // private _quantidade;
    // private _valor;
    
    // constructor(data, quantidade, valor) {

    //     this._data = data;
    //     this._quantidade = quantidade;
    //     this._valor = valor;
    // }

    get data() {

        return this._data;
    }

    get quantidade() {

        return this._quantidade;
    }

    get valor() {

        return this._valor;
    }

    get volume() {

        return this._quantidade * this._valor;
    }
}

