import corrida from "@/core/fundamentos/Corrida";
import TerminalUtil from "../util/TerminalUtil";

export default async function dip() {
    TerminalUtil.titulo('DIP')
    corrida()
    await TerminalUtil.esperarEnter()
    
}