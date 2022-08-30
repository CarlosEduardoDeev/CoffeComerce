import { TypeContainer,CardContainer,ButtonShopCart, DescriptionCoffee, TitleCoffe, TitleTypeCoffeeCard,PriceAndAmountContainer, CounterContainer } from "./style";
import {Plus,Minus,ShoppingCartSimple} from 'phosphor-react'
import { useContext, useState } from "react";
import { CoffeContext } from "../../Contexts/CoffeContext";


interface CoffesProps {
  id: string;
  name: string;
  type: string;
  typeduo?: string;
  typetrio?: string;
  description: string,
  amount: string | any;
  image: string | any;
  price:string | any;
}



export function Card({name,description,type,image,id,typeduo,typetrio,price}: CoffesProps){
  const [shopingBuy,setShopingBuy] = useState([] as any)
  const [contadorAmount,setContadorAmount] = useState(0)

  const {coffees} =useContext(CoffeContext)

  const idCoffes = id
  function funcContadorPlus(){
    setContadorAmount( contadorAmount + 1)
  }
  function funcContadorMinus(){
    setContadorAmount( contadorAmount -1 )
  }

  function AmountCoffe (){

    const CoffeId = coffees.filter(coffee =>{
      if(coffee.id === idCoffes){
        return {
          ...coffee,
          amount: (contadorAmount)
        }
      }
      return coffee
      
    })
    
    setShopingBuy(CoffeId)
    console.log(shopingBuy)
  }

  
  

  

    return(
      <CardContainer>
            <img src={image}/>
        <TypeContainer>

        <TitleTypeCoffeeCard>
            {type}
        </TitleTypeCoffeeCard>

      {typeduo === undefined ?   <div></div>:<TitleTypeCoffeeCard> {typeduo}</TitleTypeCoffeeCard> }
      {typetrio === undefined ?  <div></div> : <TitleTypeCoffeeCard> {typetrio}</TitleTypeCoffeeCard>}
        

        </TypeContainer>
     
        <TitleCoffe>
            {name}
        </TitleCoffe>
        <DescriptionCoffee>
            {description}
        </DescriptionCoffee>
        <PriceAndAmountContainer>
          <p>R$<strong>{price}</strong></p>
          <CounterContainer>
            <button >
            <Minus onClick={funcContadorMinus} />
            </button>
                
                <p>{contadorAmount}</p>
            <button >
            <Plus onClick={funcContadorPlus}/>
            </button>
           
          </CounterContainer>
           <ButtonShopCart onClick={AmountCoffe}>
              <ShoppingCartSimple width={22} height={22} weight="fill"/>
            </ButtonShopCart>
        </PriceAndAmountContainer>
      </CardContainer>  
    )
}