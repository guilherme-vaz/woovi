import * as C from './style'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


export function Steps() {

    const price = localStorage.getItem('selectedPrice');
    
    return (
        <>
            <C.PaymentContainer>
                <C.StepsContainer>
                    <C.StepRow>
                        <C.FirstStep>
                            <C.Step1></C.Step1>
                            <p>1ª entrada no pix</p>
                        </C.FirstStep>
                        <C.PixPrice>R${price},00</C.PixPrice>
                    </C.StepRow>
                    <C.Connector></C.Connector>
                    <C.StepRow>
                        <C.FirstStep>
                            <C.Step2></C.Step2>
                            <p>2ª no cartão</p>
                        </C.FirstStep>
                        <C.PixPrice2>R${price},00</C.PixPrice2>
                    </C.StepRow>
                </C.StepsContainer>
            </C.PaymentContainer>
            <C.Divisor></C.Divisor>
            <C.OtherInfo>
                <p>CET: 0,5%</p>
                <p>Total: R$ 30.600,00</p>
            </C.OtherInfo>
            <C.Divisor></C.Divisor>
            <C.OtherInfo>
                <C.Bold><p>Como funciona?</p></C.Bold>
                <p><KeyboardArrowUpIcon /></p>
            </C.OtherInfo>
            <C.Divisor></C.Divisor>
            <C.PaymentPrice>
                <C.PaymentPriceWhiteText>Identificador:</C.PaymentPriceWhiteText>
                <C.PaymentPriceBlackText>2c1b951f356c4680b13ba1c9fc889c47</C.PaymentPriceBlackText>
            </C.PaymentPrice>
        </>
    )
}