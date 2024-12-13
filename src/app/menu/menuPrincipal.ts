import TerminalUtil from '@/app/util/TerminalUtil'
import menuFundamentos from './menuFundamentos';

export default async function menuPrincipal() {
    TerminalUtil.titulo('Menu Principal')
  
    const [indece] =  await TerminalUtil.menu(['1. Fundamentos', 'Sair'])

    switch(indece) {
        case 0 : await menuFundamentos(); break
        case 1 : process.exit(0)
    }
    menuPrincipal()
}