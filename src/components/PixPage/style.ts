import styled from "styled-components";


export const Container = styled.div`
    margin: 0 auto;
    padding: 36px 20px 16px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Img = styled.img`
    width: 123.51px;
    height: 36.65px;
`;

export const Title = styled.div`
    font-size: 20px;
    font-weight: 800;
    line-height: 32.74px;
    color: #4D4D4D;
    margin-top: 40px;
    margin-bottom: 20px;
    text-align:center;
`;

export const QRcode = styled.div`
    width: 250px;
    height: 250px;
    border: 2px solid #03D69D;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items:center;

    img {
        width: 240px;
        height: 240px;
    }

`;

export const Button = styled.button`
    width: 310px;
    height: 39px;
    border: none;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 16px;
    padding: 8px 0px;
    border-radius: 8px;
    background: #133A6F;
    margin-top: 36px;
    cursor: pointer;
`;

export const PaymentPrice = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    gap: 4px;
`;

export const PaymentPriceWhiteText = styled.p`
    color: #B2B2B2;
    font-size: 12px;
`
export const PaymentPriceBlackText = styled.p`
    color: #4D4D4D;
    font-size: 12px;
    font-weight: bold;
`

export const Bold = styled.span`
    font-weight: bold;
`;
