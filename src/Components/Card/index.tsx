import { CardContainer, DescriptionCoffee, TitleCoffe, TitleTypeCoffeeCard } from "./style";

import CoffeeOne from '../../assets/CoffeTypes/CoffeeOne.svg'


interface CoffesProps {
  name: string;
  type: string;
  description: string;
}


export function Card({name,description,type}: CoffesProps){
    return(
      <CardContainer>
        <img src={CoffeeOne}/>
        <TitleTypeCoffeeCard>
            {type}
        </TitleTypeCoffeeCard>
        <TitleCoffe>
            {name}
        </TitleCoffe>
        <DescriptionCoffee>
            {description}
        </DescriptionCoffee>
      </CardContainer>  
    )
}