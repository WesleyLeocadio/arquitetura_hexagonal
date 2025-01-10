import { terminal } from "terminal-kit";
import Fusca from "./Fusca";

export default function corrida (){
    const carro = new Fusca();
    Array.from({length:10}).forEach(()=> {
        carro.acelerar()
        terminal.red(`\n velocidade: ${carro.velocidadeAtual}`)
    })
    Array.from({length:10}).forEach(()=> {
        carro.frear()
        terminal.red(`\n velocidade: ${carro.velocidadeAtual}`)
    })
}