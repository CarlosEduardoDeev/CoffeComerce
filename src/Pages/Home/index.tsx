import { useContext } from "react";
import { HomeBanner } from "../../Components/BannerHome";
import { Card } from "../../Components/Card";
import { coffees } from "../../Contexts/Context";
import { ContainerListCoffee, ContainerPage, ListContainerCoffee, TitleMenuCoffee } from "./style";



console.log(coffees)

export function Home(){
    return (
        <ContainerPage>
       <HomeBanner/>
       <TitleMenuCoffee>
        Nossos cafés
       </TitleMenuCoffee>
       <ListContainerCoffee>
            <ContainerListCoffee>
            {coffees.map(coffee =>{
                return(
                    <Card
                        id={coffee.id}
                        image={coffee.image}
                        type={coffee.type}
                        name={coffee.name}
                        description={coffee.description} 
                    />
                )
            })}
            </ContainerListCoffee>
       </ListContainerCoffee>
        </ContainerPage>
    )
}