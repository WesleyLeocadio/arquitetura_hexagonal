import TerminalUtil from '@/app/util/TerminalUtil'
import polimorfismo from '../fundamentos/polimorfismo';


export default async function menuFundamentos() {
    TerminalUtil.titulo('Fundamentos')
    const [indece] =  await TerminalUtil.menu(['1. Polimorfismo', 'Voltar'])
    switch(indece) {
        case 0 : 
            await polimorfismo()
            break
        case 1: return
    }
    menuFundamentos()
}