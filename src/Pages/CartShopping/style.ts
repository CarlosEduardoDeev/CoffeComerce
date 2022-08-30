import styled from "styled-components";

export const CartContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
   gap: 15px;
    p{
        font-family: "Baloo 2";
        font-weight: 700;
        font-size: 1.125rem;

    }
`
export const FormsContainer = styled.div`
    
    width: 40rem;
    height: 23.25rem;
    background-color: ${(props) => props.theme["base-card"]};
    padding: 2.5rem;
    
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
   p{
        font-family: "Baloo 2";
        font-weight: 700;
        font-size: 1.125rem;

    }
`
export const CartFinish = styled.div`

    width: 28rem;
    height:31.125rem;
    background-color: ${(props) => props.theme["base-card"]};
`

export const TitleFormContainer = styled.div`

`

export const TitleTextoForm = styled.div`
    display: flex;
    align-items: center;
    font-family: "Roboto";
    font-weight: 400;
    color: ${props => props.theme["base-subtitle"]};
    gap: 8px;
`
export const SubtitlesForm = styled.div`
    font-size:0.875rem ;
    font-weight: 400;
    margin-left: 31px;
    color: ${props => props.theme["base-text"]};

`
export const BaseInputContainer = styled.input`
        display: flex;
        align-items: center;
        padding: 12px;
        gap: 12px;
        color: ${props => props.theme["base-label"]};
        border-radius: 6px;
        background-color: ${props => props.theme["base-input"]} ;
        border: 1px solid ${props => props.theme["base-button"]};
`
export const CepInput = styled(BaseInputContainer)`
        width: 12.5rem;
        height:2.625rem;
        margin-top: 32px;
`
export const RuaInput = styled(BaseInputContainer)`
        width: 35rem;
        height:2.625rem;
        margin-top: 1rem;
       
`