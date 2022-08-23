import { CardContainer, DescriptionCoffee, TitleCoffe, TitleTypeCoffeeCard } from "./style";
import CoffeeOne from '../../assets/CoffeTypes/CoffeeOne.svg'

export function Card(){
    return(
      <CardContainer>
        <img src={CoffeeOne}/>
        <TitleTypeCoffeeCard>
            TRADICIONAL
        </TitleTypeCoffeeCard>
        <TitleCoffe>
            Expresso Tradicional 
        </TitleCoffe>
        <DescriptionCoffee>
             O tradicional café feito com 
             água quente e grãos moídos
        </DescriptionCoffee>
      </CardContainer>  
    )
}