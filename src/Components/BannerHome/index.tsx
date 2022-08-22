import { BannerHomeContainer, SubtitlesBannerHome, TextHomeContainer, TitleHome } from "./style";
import imageLogo from '../../../src/assets/Imagem.svg'
export function HomeBanner(){
    return(
        <BannerHomeContainer>
            <TextHomeContainer>
                <TitleHome>
                Encontre o café perfeito para qualquer hora do dia
                <p> Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                </TitleHome>
                <SubtitlesBannerHome>
                    <p></p>
                </SubtitlesBannerHome>
                
            </TextHomeContainer>
            <img src={imageLogo} alt=""/>
        </BannerHomeContainer>
    )
} 