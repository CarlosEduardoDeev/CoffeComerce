import { useContext, useState } from "react";
import { HomeBanner } from "../../Components/BannerHome";
import { Card } from "../../Components/Card";
import { CoffeContext} from '../../Contexts/CoffeContext'
import { ContainerListCoffee, ContainerPage, ListContainerCoffee, TitleMenuCoffee } from "./style";


    


export function Home(){

   const { coffees} = useContext(CoffeContext)
 


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
                        price={coffee.price}
                        id={coffee.id}
                        image={coffee.image}
                        type={coffee.type}
                        typeduo={coffee.typeduo}
                        typetrio={coffee.typetrio}
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