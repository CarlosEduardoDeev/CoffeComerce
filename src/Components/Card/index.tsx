import { CardContainer,ButtonShopCart, DescriptionCoffee, TitleCoffe, TitleTypeCoffeeCard,PriceAndAmountContainer, CounterContainer } from "./style";
import {Plus,Minus,ShoppingCartSimple} from 'phosphor-react'
import { useState } from "react";
import { coffees } from "../../Contexts/Context";

interface CoffesProps {
  id: string;
  name: string;
  type: string;
  description: string,
  amount: number;
  image: any;
}



export function Card({name,description,type,image,id,amount}: CoffesProps){
  const [shopingBuy,setShopingBuy] = useState([] as any)


  const idCoffes = id

  function AmountCoffe (){

    const CoffeId = coffees.map(coffee =>{
      if(coffee.id === idCoffes){
        return {
          ...coffee,
          amount: (amount + 1)
        }
      }
      return coffee
    })
    setShopingBuy(CoffeId)
  }

  console.log(shopingBuy.amount)

  

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
            <button >
            <Minus />
            </button>
              
                <p>{amount}</p>
            <button >
            <Plus onClick={AmountCoffe}/>
            </button>
           
          </CounterContainer>
           <ButtonShopCart>
              <ShoppingCartSimple width={22} height={22} weight="fill"/>
            </ButtonShopCart>
        </PriceAndAmountContainer>
      </CardContainer>  
    )
}