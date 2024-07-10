import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    padding: 36px 20px 0px 20px;
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
    margin-bottom: 32px;
`

export const TotalPrice = styled.div`
    padding: 12px 16px 16px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid #E5E5E5;
    width: 290px;
    height: 70px;
    border-radius: 10px;
    margin-bottom: 40px;

     &:hover {
        background-color: #F4FBF9;
        border-color:  #03D69D;
        cursor: pointer;
    }
`;

export const TotalPriceDivColumn = styled.div`
        display: flex;
        flex-direction: column;
        margin-top: 8px;

`

export const TotalPriceDivRow = styled.div`
        display: flex;
        justify-content: space-between;
`

export const Price = styled.p`
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 4px;
`;

export const Bold = styled.span`
    font-weight: bold;
`

export const Cashback = styled.p`
    color: #03D69D;
    font-size: 12px;
`;

export const Badge = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;

    color:  #4D4D4D;
    font-weight: 800;

    width: 67px;
    height: 27px;

    top: 166px;
    left: 46px;

    border-radius: 100px;
    background-color: #E5E5E5;


    @media (min-width: 768px) {
        top: 166px;
        left: 830px;
    }

`;

export const Tag = styled.p`
    font-size: 12px;
    margin-top: 2px;
    background-color: #133A6F;
    padding: 8px 30px 8px 10px;
    color: white;
    border-radius: 2px;
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



