import styled from "styled-components";


export const PriceContainer = styled.div`
    margin: 0 auto;
    padding: 12px 16px 12px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 290px;
    height: 70px;
    border-top: 2px;
    border-right: 2px;
    border-left: 2px;
    border-style: solid;
    border-color: #E5E5E5;

    &:last-child {
        border-bottom: 2px solid #E5E5E5;
        border-radius: 0px 0px 10px 10px;
    }

    &:hover {
        background-color: #F4FBF9;
        border-color:  #03D69D;
        cursor: pointer;
    }

`;

export const Prices = styled.div`
    display: flex;
    flex-direction: column;

`;

export const Price = styled.p`
    font-size: 20px;
    font-weight: 500;
`

export const Bold = styled.span`
    font-weight: bold;
`;

export const Total = styled.p`
    font-size: 12px;
    font-weight: 600;
    line-height: 21.82px;
    text-align: left;
    color: #AFAFAF;
`;

export const Check = styled.input`
    width: 26px;
    height: 26px;
    top: 201px;
    left: 397px;
    gap: 0px;
    border: 2px 0px 0px 0px;
    opacity: 0px;
    border: 2px solid #E5E5E5

`

export const Badge = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;

    color:  #4D4D4D;
    font-weight: 800;

    width: 157px;
    height: 27px;

    top: 305px;
    left: 46px;

    border-radius: 100px;
    background-color: #E5E5E5;

    @media (min-width: 768px) {
        top: 305px;
        left: 830px;
    }

`;

export const DivRow = styled.div`
        display: flex;
        justify-content: space-between;
`

export const DivColumn = styled.div`
        display: flex;
        flex-direction: column;
        margin-top: 8px;
`

export const Tag = styled.p`
    font-size: 12px;
    margin-top: 2px;
    background-color: #133A6F;
    padding: 8px 25px 8px 8px;
    color: white;
    border-radius: 2px;
    margin-bottom: 1rem;
`;

export const WhiteDiv = styled.div`
    position: relative;
    right: 8px;
    top: 6px;
    height: 20px;
    width: 20px;
    transform: rotate(45deg);
    background-color: white;
`;

export const AdjustDivRow = styled.div`
    display: flex;
    justify-content: space-between;
    width: 285px;
`;

export const RadioDiv = styled.div`
    width: 40px;
`

export const AdjustDivCol = styled.div`;
    display: flex;
    flex-direction: column;

`;
