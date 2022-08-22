import styled from "styled-components";

export const HeaderContainer = styled.header`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 2rem 8rem ;
    height: 6.5rem;
    
    nav{
        display: flex;
        gap: 0.5rem;
        align-items: center;
  
    }
   
`

export const IconContainer = styled.div`
    width: 2.375rem;
    height: 2.375rem;
    border-radius: 0.375rem;
    background-color: ${(props) => props.theme["yellow-light"]};
    align-items: center;
    display: flex;
    justify-content: center;
  

`
export const LocalContainerText = styled.div`
    width: 8.938rem;
    height:2.375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme["purple-light"]};
    border-radius: 0.375rem;
    color: ${(props) => props.theme["purple-dark"]};

 

    p{
    font-family: 'Roboto';
    font-weight: 400;
    color: ${(props) => props.theme["purple-dark"]};
    }
    

`