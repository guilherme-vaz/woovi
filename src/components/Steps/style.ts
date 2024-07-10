import styled from "styled-components";

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

export const PaymentContainer = styled.div`
    display: flex;
    justiify-content: space-between;
    align-items: start;
    padding: 0px 18px;
    margin-top: 20px;

    @media (min-width: 768px) {
        display: block;
        margin: 20px auto;
        width: fit-content;
    }
`

export const StepsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

`
export const Step1 = styled.div`
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid #03D69D;
`;

export const Connector = styled.div`
    height: 16px;
    margin-left: 8px;
    width: 0px;
    border-left: 2px solid #E5E5E5;
`;

export const Step2 = styled.div`
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid #E5E5E5;
`;

export const FirstStep = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px; 
`;

export const StepRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PixPrice = styled.p`
    font-weight: bold;
    margin-left: 5rem;
`

export const PixPrice2 = styled.p`
    font-weight: bold;
    margin-left: 7.3rem;
`;

export const Divisor = styled.div`
    margin: 20px auto;
    width: 350px;
    height: 0px;
    border: 1px solid #E5E5E5;
`;

export const OtherInfo = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0px 18px;

    p:first-child {
        color: #4D4D4D;
        font-size: 14px;
    }

    p {
        font-size: 16px;
    }

    @media (min-width: 768px) {
        width: 300px;
        margin: 0 auto;
        
    }
`

export const Bold = styled.span`
    font-weight: bold;
`;