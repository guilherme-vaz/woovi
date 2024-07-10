import * as C from './style'
import Logo from '../../assets/Logo.png'
import QRcode from '../../assets/qrcode.png'
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { Footer } from '../Footer/Footer';
import { Steps } from '../Steps/Steps';
import { useNavigate } from 'react-router-dom';

export function PixPage() {
    const price = localStorage.getItem('selectedPrice');
    const navigate = useNavigate()

    const date = new Date();
    date.setDate(date.getDate() + 1);
    const formattedDate = `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()} - ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;

    return (
        <>
            <C.Container>
                <C.Img src={Logo} alt="" />
                <C.Title>João, pague a entrada de R${price},00 pelo Pix</C.Title>
                <C.QRcode>
                    <img src={QRcode} />
                </C.QRcode>
                <C.Button onClick={() => navigate('/last')}>Clique para copiar o QR CODE <FileCopyIcon /> </C.Button>
                <C.PaymentPrice>
                    <C.PaymentPriceWhiteText>Prazo de pagamento:</C.PaymentPriceWhiteText>
                    <C.PaymentPriceBlackText>{formattedDate}</C.PaymentPriceBlackText>
                </C.PaymentPrice>
            </C.Container>
            <Steps />
            <Footer />
        </>
    )
}