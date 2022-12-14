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


`
export const TitleTypeCoffeeCard = styled.div`
    font-size:0.625rem ;
    font-weight: 700;
   
    align-items: center;
    justify-content: center;
    display: flex;
    border-radius: 100px;
    padding: 4px 8px;
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
    margin-bottom: 8px;
    color: ${props => props.theme["base-label"]};
`
export const PriceAndAmountContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    flex-direction: row;
    margin-top: 33px;
    margin-bottom: 20px;
    text-align :right ;
   
    
    p{  
       text-align :right ;
       line-height: 1.138rem;
       font-weight: 400;
       font-size: 0.875rem
       
      
    }
      strong{
            font-family: 'Baloo 2';
            font-weight: 800;
            line-height: 1.95rem;
            font-size: 1.5rem;
        }

`
export const CounterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4.5rem;
    height: 2.375rem;
    background-color: ${props => props.theme["base-button"]};
    border-radius: 6px;

    padding: 8px;

    button{
        display: flex;
        align-items: center;
        cursor: pointer;
        color: ${props => props.theme["purple"]};
        border: unset;
        background: none;
        width: 14px;
        height: 14px;
    }

    button:hover{
        color: ${props => props.theme["purple-dark"]};
    }

    p{   
        display: flex;
        align-items: center;
        padding: 8px;
        font-size: 1rem;
        font-weight: 400;
        color: ${props => props.theme["base-title"]};
    }
    
`
export const ButtonShopCart = styled.button`
            display: flex;
            width: 38px;
            border: transparent;
            cursor: pointer;
            height: 38px;
            color: ${props => props.theme["white"]};
            background-color: ${props => props.theme["purple-dark"]};
            justify-content: center;
            align-items: center;
            border-radius: 6px;
            transition:0.2s;

            &:hover{

                background-color: ${props => props.theme["purple"]};
            }
`
export const TypeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap:4px
`