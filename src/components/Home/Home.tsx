import Logo from '../../assets/Logo.png'
import { Price } from '../Price/Price'
import Radio from '@mui/material/Radio';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { styled } from '@mui/material/styles';
import * as C from './style'
import { useState } from 'react';
import { Footer } from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';

interface PriceProps {
    price: string
    total: string
}

export function Home({ price, total }: PriceProps) {

    const CustomRadio = styled(Radio)(({ theme }) => ({
        '&.Mui-checked': {
            color: '#03D69D'
        },
    }));

    const [selectedValue, setSelectedValue] = useState('a');
    const navigate = useNavigate()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
        localStorage.setItem('selectedPrice', price);
        localStorage.setItem('selectedTotal', total);
        navigate('/pix')
        console.log(price)
        console.log(total)
    };

    return (
        <>
            <C.Container>
                <C.Img src={Logo} alt="" />
                <C.Title>João, como você quer pagar?</C.Title>
                <C.Badge>Pix</C.Badge>
                <C.TotalPrice>
                    <C.TotalPriceDivColumn>
                        <C.TotalPriceDivRow>
                            <C.TotalPriceDivColumn>
                                <C.Price><C.Bold>1x</C.Bold> R$30.500,00</C.Price>
                                <C.Cashback>Ganhe <C.Bold>3%</C.Bold> de Cashback</C.Cashback>
                            </C.TotalPriceDivColumn>
                            <CustomRadio
                                onChange={handleChange}
                                value={"30.500,00"}
                                name="radio-button-demo"
                                inputProps={{ 'aria-label': 'A' }}
                                icon={<RadioButtonUncheckedIcon />}
                                checkedIcon={<CheckCircleIcon />}
                            />
                        </C.TotalPriceDivRow>
                        <C.TotalPriceDivRow>
                            <C.Tag>🤑 <C.Bold>R$ 300,00</C.Bold> de volta no seu Pix na hora</C.Tag>
                            <C.WhiteDiv></C.WhiteDiv>
                        </C.TotalPriceDivRow>
                    </C.TotalPriceDivColumn>
                </C.TotalPrice>
                <Price parcela={2} price={"15.300"} total={"30.600"} />
                <Price parcela={3} price={"10.196"} total={"30.620"} />
                <Price parcela={4} price={"7.725"} total={"30.900"} desconto />
                <Price parcela={5} price={"6.300"} total={"31.500"} />
                <Price parcela={6} price={"5.283"} total={"31.699"} />
                <Price parcela={7} price={"4.542"} total={"30.800"} />
            </C.Container>
            <Footer />

        </>

    )

}