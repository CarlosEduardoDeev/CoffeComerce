import styled, {css}from "styled-components";
import background from '../../assets/Background.svg'


export type IconsVariants = 'orange' | 'yellow' | 'grey' | 'purple'

interface IconsContainerProps {
    variant: IconsVariants;
}

const iconsVariants = {
    'orange' : '#C47F17',
    'yellow' : '#DBAC2C',
    'grey' : '#574f4d',
    'purple' : '#8047f8',
    'white' : '#FFFFFF'
}

export const BannerHomeContainer = styled.div`
    height: 34rem;
    background-repeat: no-repeat;
    background-image: url(${background});
    display: flex;
    justify-content: center;
    align-items: center;
    gap:3.5rem;
    img{
        width:29.75rem;
        height: 22.5rem;
       
    }
`
export const TextHomeContainer = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction: column;
`
export const TitleHome = styled.div`
    font-family: 'Baloo 2';
    font-size: 3rem;
    width: 36.75rem;
    line-height: 3.9rem;
    font-weight: 800;
 

    p{
        font-family: 'Roboto';
        font-size: 1.25rem;
        font-weight: 400;
        line-height: 1.625rem;
        gap: 12px;
    }
`



export const BaseIconHomeBanner = styled.div<IconsContainerProps>`
    width: 2rem;
    height: 2rem;
    border-radius: 1000px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    

    ${props =>{
        return css`background-color: ${iconsVariants[props.variant]}`
    }}

`


export const TextSubtititleBannerHome = styled.p`
    color: ${(props) => props.theme["base-text"]};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3rem;

    
`
export const TextSubtitleContainer = styled.div`
    height: 2rem;
    align-items: center;
    display: flex;
    gap: 12px;

`

export const SubtitlesBannerHome = styled.div`
    width:36.438rem;
    height:5.25rem;
    gap: 20px;
    flex-wrap: wrap;
    display: flex;
    
`
