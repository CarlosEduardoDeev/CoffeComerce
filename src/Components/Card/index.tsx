import { CardContainer, DescriptionCoffee, TitleCoffe, TitleTypeCoffeeCard,PriceAndAmountContainer, CounterContainer } from "./style";
import {Plus,Minus} from 'phosphor-react'


interface CoffesProps {
  id: string;
  name: string;
  type: string;
  description: string,
  amount: number;
  image: any;
}


export function Card({name,description,type,image}: CoffesProps){

  const Start = () =>{
    console.log('Test')
  }
  
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
        <PriceAndAmountContainer>
          <p>R$<strong>9,90</strong></p>
          <CounterContainer>
            <button onClick={Start}>
            <Minus />
            </button>
              
                <p>1</p>
            <button onClick={Start}>
            <Plus/>
            </button>
          </CounterContainer>
        </PriceAndAmountContainer>
      </CardContainer>  
    )
}