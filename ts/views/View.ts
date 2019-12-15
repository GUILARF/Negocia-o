export abstract class View<T> {

    protected _elemento: JQuery
    readonly _escapar: boolean
    constructor(seletor: string, escapar: boolean) {

        this._elemento = $(seletor)
        this._escapar = escapar
    }

    update(model: T, escapar?: boolean) {
        let template = this.template(model)
        if (this._escapar)
            template = template.replace(/<script>[\s\S]*?<\/script>/g, '')

        //this._elemento.innerHTML = this.template(model);
        this._elemento.html(template);
    }

    abstract template(model: T): string;

}
