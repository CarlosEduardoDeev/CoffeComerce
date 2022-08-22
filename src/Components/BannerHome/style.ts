import styled from "styled-components";
import background from '../../assets/Background.svg'


export const BannerHomeContainer = styled.div`
    height: 34rem;
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
    }
`
export const BaseIconHomeBanner = styled.div`
    width: ;

`

export const SubtitlesBannerHome = styled.div`

`
