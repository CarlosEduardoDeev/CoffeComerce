import { HomeBanner } from "../../Components/BannerHome";
import { Card } from "../../Components/Card";
import { coffees } from "../../Contexts/Context";
import { ContainerListCoffee, ListContainerCoffee, TitleMenuCoffee } from "./style";



export function Home(){
    return (
        <>
       <HomeBanner/>
       <TitleMenuCoffee>
        Nossos cafés
       </TitleMenuCoffee>
       <ListContainerCoffee>
            <ContainerListCoffee>
            {coffees.map(coffee =>{
                return(
                    <Card
                    type={coffee.type}
                    name={coffee.name}
                    description={coffee.description}

                    />
                )
            })}
            </ContainerListCoffee>
       </ListContainerCoffee>
        </>
    )
}