import { HomeBanner } from "../../Components/BannerHome";
import { Card } from "../../Components/Card";
import { ListContainerCoffee, TitleMenuCoffee } from "./style";


export function Home(){
    return (
        <>
       <HomeBanner/>
       <TitleMenuCoffee>
        Nossos cafés
       </TitleMenuCoffee>
       <ListContainerCoffee>
        <Card/>
       </ListContainerCoffee>
        </>
    )
}