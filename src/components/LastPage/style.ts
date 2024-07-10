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

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    gap: 28px;
`;


export const Button = styled.button`
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
    cursor: pointer;
    margin-bottom: 20px;
`;

export const CardInfo = styled.div`
    display: flex;
    gap: 28px;
`;
