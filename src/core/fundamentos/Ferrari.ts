import Carro from "./Carro";

export default class Ferrari implements Carro {
    constructor (
        readonly velocidadeMaxima: number = 324,
        private _velocidadeAtual: number = 0 // Valor inicial padr�o
    ){}

    acelerar(): void {
        this._velocidadeAtual = Math.min(
            this._velocidadeAtual + 20, this.velocidadeMaxima
        );
    }

    frear(): void {
        this._velocidadeAtual = Math.max(
            this._velocidadeAtual - 20, 0
        );
    }

    get velocidadeAtual(): number {
        return this._velocidadeAtual;
    }

    set velocidadeAtual(valor: number) {
        this._velocidadeAtual = Math.min(valor, this.velocidadeMaxima);
    }
}