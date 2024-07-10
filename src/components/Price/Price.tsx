import * as C from './style'
import Radio from '@mui/material/Radio';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CustomRadio = styled(Radio)(({ theme }) => ({
    '&.Mui-checked': {
        color: '#03D69D'
    },
}));

interface PriceProps {
    price: string
    total: string
    parcela: number
    desconto?: boolean
}


export function Price({ price, total, parcela, desconto }: PriceProps) {

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
            <C.Badge>Pix Parcelado</C.Badge>
            <C.PriceContainer>
                <C.Prices>

                    {desconto ?
                        <C.DivColumn>
                            <C.DivRow>
                                <C.DivColumn>
                                    <C.Price><C.Bold>{parcela}x</C.Bold> R$ {price},00</C.Price>
                                    <C.Total>Total: R$ {total},00</C.Total>
                                </C.DivColumn>
                                <CustomRadio
                                    // checked={selectedValue === 'a'}
                                    onChange={handleChange}
                                    value={price}
                                    name="radio-button-demo"
                                    inputProps={{ 'aria-label': 'A' }}
                                    icon={<RadioButtonUncheckedIcon />}
                                    checkedIcon={<CheckCircleIcon />}
                                />
                            </C.DivRow>
                            <C.DivRow>
                                <C.Tag>
                                    <C.Bold>-3 de juros: </C.Bold>melhor opção de parcelamento
                                </C.Tag>
                                <C.WhiteDiv></C.WhiteDiv>
                            </C.DivRow>
                        </C.DivColumn>
                        :
                        <C.AdjustDivRow>
                            <C.AdjustDivCol>
                                <C.Price><C.Bold>{parcela}x</C.Bold> R$ {price},00</C.Price>
                                <C.Total>Total: R$ {total},00</C.Total>
                            </C.AdjustDivCol>

                            <C.RadioDiv>
                                <CustomRadio
                                    // checked={selectedValue === 'a'}
                                    onChange={handleChange}
                                    value={price}
                                    name="radio-button-demo"
                                    inputProps={{ 'aria-label': 'A' }}
                                    icon={<RadioButtonUncheckedIcon />}
                                    checkedIcon={<CheckCircleIcon />}
                                />
                            </C.RadioDiv>
                        </C.AdjustDivRow>
                    }

                </C.Prices>
                {/* <C.Check type="radio" /> */}

            </C.PriceContainer>
        </>
    )
}