import * as C from './style'
import Logo from '../../assets/Logo.png'
import { Steps } from '../Steps/Steps'
import { Footer } from '../Footer/Footer'
import { Container, TextField, MenuItem, Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function LastPage() {

    const price = localStorage.getItem('selectedPrice');
    const navigate = useNavigate()
    const [formValues, setFormValues] = useState({
        nomeCompleto: '',
        cpf: '',
        numeroCartao: '',
        vencimento: '',
        cvv: '',
        parcelas: '',
    });

    const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };
    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        console.log(formValues);
    };



    return (
        <>
            <C.Container>
                <C.Img src={Logo} alt="" />
                <C.Title>João, pague o restante em 1x no cartão</C.Title>
            </C.Container>

            <Container maxWidth="sm">
                <form onSubmit={handleSubmit}>
                    <C.Form>
                        <TextField
                            fullWidth
                            label="Nome Completo"
                            name="nomeCompleto"
                            value={formValues.nomeCompleto}
                            onChange={handleInputChange}
                        />

                        <TextField
                            fullWidth
                            label="CPF"
                            name="cpf"
                            value={formValues.cpf}
                            onChange={handleInputChange}
                        />
                        <TextField
                            fullWidth
                            label="Número do Cartão"
                            name="numeroCartao"
                            value={formValues.numeroCartao}
                            onChange={handleInputChange}
                        />
                        <C.CardInfo>
                            <TextField
                                fullWidth
                                label="Vencimento"
                                name="vencimento"
                                value={formValues.vencimento}
                                onChange={handleInputChange}
                            />

                            <TextField
                                fullWidth
                                label="CVV"
                                name="cvv"
                                value={formValues.cvv}
                                onChange={handleInputChange}
                            />
                        </C.CardInfo>


                        <TextField
                            fullWidth
                            select
                            label="Parcelas"
                            name="parcelas"
                            value={formValues.parcelas}
                            onChange={handleInputChange}
                        >
                            <MenuItem value={`1x de R$ ${price},00`}>1x de R$ {price},00</MenuItem>
                        </TextField>

                        <C.Button type="submit" onClick={() => navigate('/')}>
                            Pagar
                        </C.Button>
                    </C.Form>
                </form>
            </Container>



            <Steps />
            <Footer />
        </>
    )
}