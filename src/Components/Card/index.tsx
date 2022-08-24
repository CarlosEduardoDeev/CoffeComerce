import { CardContainer, DescriptionCoffee, TitleCoffe, TitleTypeCoffeeCard } from "./style";



interface CoffesProps {
  id: string;
  name: string;
  type: string;
  description: string
  image: any;
}


export function Card({name,description,type,image}: CoffesProps){
    return(
      <CardContainer>
            <img src={image}/>
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