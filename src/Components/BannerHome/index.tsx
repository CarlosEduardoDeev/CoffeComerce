import { 
    BannerHomeContainer,
    BaseIconHomeBanner,
    SubtitlesBannerHome, 
    TextHomeContainer, 
    TextSubtititleBannerHome, 
    TextSubtitleContainer, 
    TitleHome } from "./style";
import imageLogo from '../../../src/assets/Imagem.svg'
import {ShoppingCart,Timer,Package,Coffee} from 'phosphor-react'




export function HomeBanner({ variant }:any){



    return(
        <BannerHomeContainer>
            <TextHomeContainer>
                <TitleHome>
                Encontre o café perfeito para qualquer hora do dia
                <p> Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                </TitleHome>
                <SubtitlesBannerHome>
                    <TextSubtitleContainer>
                        <BaseIconHomeBanner variant={variant ='orange'}>
                            <ShoppingCart weight="fill" width={16} height={16}/>
                        </BaseIconHomeBanner>
                        <TextSubtititleBannerHome>
                            Compra simples e segura     
                        </TextSubtititleBannerHome>
                    </TextSubtitleContainer>
                    <TextSubtitleContainer>
                        <BaseIconHomeBanner variant={variant ='grey'}>
                            <Package weight="fill" width={16} height={16}/>
                        </BaseIconHomeBanner>
                        <TextSubtititleBannerHome>
                        Embalagem mantém o café intacto
                        </TextSubtititleBannerHome>
                    </TextSubtitleContainer>
                    <TextSubtitleContainer>
                        <BaseIconHomeBanner variant={variant ='yellow'}>
                            <Timer weight="fill" width={16} height={16}/> 
                        </BaseIconHomeBanner>
                        <TextSubtititleBannerHome>
                        Entrega rápida e rastreada
                        </TextSubtititleBannerHome>
                    </TextSubtitleContainer>
                    <TextSubtitleContainer>
                        <BaseIconHomeBanner variant={variant ='purple'}>
                            <Coffee weight="fill" width={16} height={16}/>
                        </BaseIconHomeBanner>
                        <TextSubtititleBannerHome>
                        O café chega fresquinho até você
                        </TextSubtititleBannerHome>
                    </TextSubtitleContainer>
                    
                    
                </SubtitlesBannerHome>
                
            </TextHomeContainer>
            <img src={imageLogo} alt=""/>
        </BannerHomeContainer>
    )
} 