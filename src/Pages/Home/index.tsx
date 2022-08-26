import { useContext, useState } from "react";
import { HomeBanner } from "../../Components/BannerHome";
import { Card } from "../../Components/Card";
import { coffees } from "../../Contexts/Context";
import { ContainerListCoffee, ContainerPage, ListContainerCoffee, TitleMenuCoffee } from "./style";


    


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
                        key={coffee.id}
                        id={coffee.id}
                        image={coffee.image}
                        type={coffee.type}
                        name={coffee.name}
                        amount={coffee.amount}
                        description={coffee.description} 
                    />
                )
            })}
            </ContainerListCoffee>
       </ListContainerCoffee>
        </ContainerPage>
    )
}