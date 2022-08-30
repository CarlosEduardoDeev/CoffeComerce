import styled from "styled-components";

export const CartContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
   gap: 15px;
    
`
export const FormsContainer = styled.div`
    
    width: 40rem;
    height: 23.25rem;
    background-color: ${(props) => props.theme["base-card"]};
`
export const PayContainer = styled.div`
    background-color: ${(props) => props.theme["base-card"]};
    height: 12.938rem;
    width: 40rem;

`
export const InputsContainer = styled.div`
    display: flex;
    padding: 40px;
`
export const TitleForms = styled.div`

`
export const PageContainer = styled.div`
    display: flex;
    justify-content: center;
    gap:32px;
    margin-top: 2rem;       
`

export const CartFinishContainer = styled.div`
   display: flex;
   
    flex-direction: column;
   gap: 15px;
`
export const CartFinish = styled.div`

    width: 28rem;
    height:31.125rem;
    background-color: ${(props) => props.theme["base-card"]};
`