import LogoGray from '../../assets/LogoGray.png'
import Shield from '../../assets/shield.png'
import * as C from './style'
export function Footer() {
    return (
        <C.Footer>
            <img src={Shield} alt="" />
            <p>Pagamento 100% seguro via:</p>
            <C.GrayLogo src={LogoGray} />
        </C.Footer>
    )
}