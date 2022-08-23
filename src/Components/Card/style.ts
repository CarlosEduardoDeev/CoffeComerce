import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16rem;
    height:19.375rem;
    border-radius: 6px 36px ;
    flex-direction: column;
    background-color: ${props => props.theme["background-card"]};

    img{
        margin-top: -20px;
    }

`
export const TitleTypeCoffeeCard = styled.div`
    font-size:0.625rem ;
    font-weight: 700;
    width:5.063rem ;
    height:1.313rem ;
    align-items: center;
    justify-content: center;
    display: flex;
    border-radius: 100px;
    padding: 4px 12px;
    margin-top:12px ;
    
    color: ${props => props.theme["yellow-dark"]};
    background-color: ${props => props.theme["yellow-light"]};


`
export const TitleCoffe = styled.div`
    font-family: "Baloo 2";
    line-height: 1.625rem;
    font-size:1.25rem ;
    font-weight: 700;
    margin-top: 16px;

`
export const DescriptionCoffee = styled.div`
    font-size:0.875rem ;
    align-items: center;
    display: flex;
    text-align: center;
    justify-content: center;
    font-size:0.875rem ;
    font-weight: 400;
    line-height: 1.138rem;
    width: 13.5rem;
    margin-top: 8px;
    color: ${props => props.theme["base-label"]};
`