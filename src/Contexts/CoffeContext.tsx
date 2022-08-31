import { ReactNode, createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid'
import Coffee1 from '../../src/assets/CoffeTypes/Coffee1.svg'
import Coffee2 from '../../src/assets/CoffeTypes/Coffee2.svg'
import Coffee3 from '../../src/assets/CoffeTypes/Coffee3.svg'
import Coffee4 from '../../src/assets/CoffeTypes/Coffee4.svg'
import Coffee5 from '../../src/assets/CoffeTypes/Coffee5.svg'
import Coffee6 from '../../src/assets/CoffeTypes/Coffee6.svg'
import Coffee7 from '../../src/assets/CoffeTypes/Coffee7.svg'
import Coffee8 from '../../src/assets/CoffeTypes/Coffee8.svg'
import Coffee9 from '../../src/assets/CoffeTypes/Coffee9.svg'
import Coffee10 from '../../src/assets/CoffeTypes/Coffee10.svg'
import Coffee11 from '../../src/assets/CoffeTypes/Coffee11.svg'
import Coffee12 from '../../src/assets/CoffeTypes/Coffee12.svg'
import Coffee13 from '../../src/assets/CoffeTypes/Coffee13.svg'
import Coffee14 from '../../src/assets/CoffeTypes/Coffee14.svg'

    interface CoffesProps {
    id: string;
    name: string;
    type: string;
    typeduo?: string;
    typetrio?: string;
    description: string,
    amount?: number;
    image: string | any;
    price:string | any;
  } 

  

    interface CoffeeContextType {
        coffees:CoffesProps[];
        test:any
    }
    interface ChildrenProps{
        children:ReactNode
    }

   


export const CoffeContext = createContext({} as CoffeeContextType)


export function CoffeContextProvider({children}:ChildrenProps){



    const [test,setTest] = useState(5)

     const coffees = [
        {
            id:uuidv4(),
            image:Coffee1,
            name:"Expresso Tradicional",
            type:"TRADICIONAL",
            amount:0,
            price:"9,90",
            description:"O tradicional café feito com água quente e grãos moídos"
    
        },
         {
             id:uuidv4(),
             image:Coffee2,
             name:"Expresso Americano",
             type:"TRADICIONAL",
             amount:0,
             price:"9,90",
             description:"Expresso diluído, menos intenso que o tradicional"
    
         },
         {
             id:uuidv4(),
             image:Coffee3,
             name:"Expresso Cremoso",
             type:"TRADICIONAL",
             amount:0,
             price:"9,90",
             description:"Café expresso tradicional com espuma cremosa"
    
         },
         {
             id:uuidv4(),
             image:Coffee4,
             name:"Expresso Gelado",
             type:"TRADICIONAL",
             typeduo:"GELADO",
             amount:0,
             price:"9,90",
             description:"Bebida preparada com café expresso e cubos de gelo"
    
         },
         {
             id:uuidv4(),
             image:Coffee5,
             name:"Café com Leite",
             type:"TRADICIONAL",
             typeduo:"COM LEITE",
             amount:0,
             price:"9,90",
             description:"Meio a meio de expresso tradicional com leite vaporizado"
    
         },
         {
             id:uuidv4(),
             image:Coffee6,
             name:"Latte",
             typeduo:"COM LEITE",
             type:"TRADICIONAL",
             price:"9,90",
             description:"Uma dose de café expresso com o dobro de leite e espuma cremosa"
    
         },
         {
             id:uuidv4(),
             image:Coffee7,
             name:"Capuccino",
             typeduo:"COM LEITE",
             type:"TRADICIONAL",
             price:"9,90",
             description:"Bebida com canela feita de doses iguais de café, leite e espuma"
    
         },
         {
             id:uuidv4(),
             image:Coffee8,
             name:"Macchiato",
             typeduo:"COM LEITE",
             type:"TRADICIONAL",
             price:"9,90",
             description:"Café expresso misturado com um pouco de leite quente e espuma"
    
         },
         {
             id:uuidv4(),
             image:Coffee9,
             name:"Mocaccino",
             typeduo:"COM LEITE",
             type:"TRADICIONAL",
             price:"9,90",
             description:"Café expresso com calda de chocolate, pouco leite e espuma"
    
         },
         {
             id:uuidv4(),
             image:Coffee10,
             name:"Chocolate Quente",
             type:"COM LEITE",
             typeduo:"ESPECIAL",
             price:"9,90",
             description:"Bebida feita com chocolate dissolvido no leite quente e café"
    
         },
         {
             id:uuidv4(),
             image:Coffee11,
             name:"Cubano",
             typeduo:"ALCOÓLICO",
             typetrio:"GELADO",
             price:"9,90",
             type:"ESPECIAL",
             description:"Drink gelado de café expresso com rum, creme de leite e hortelã"
    
         },{
             id:uuidv4(),
             image:Coffee12,
             name:"Havaiano",
             type:"ESPECIAL",
             price:"9,90",
             description:"Bebida adocicada preparada com café e leite de coco"
    
         },{
             id:uuidv4(),
             image:Coffee13,
             name:"Árabe",
             type:"ESPECIAL",
             price:"9,90",
             description:"Bebida preparada com grãos de café árabe e especiarias"
    
         },{
             id:uuidv4(),
             image:Coffee14,
             name:"Irlandês",
             type:"ESPECIAL",
             price:"9,90",
             typeduo:'ALCOÓLICO',
             description:"Bebida a base de café, uísque irlandês, açúcar e chantilly"
    
         },
    ]

    return(
        <CoffeContext.Provider
            value={{
                coffees,
                test,
            }}
        >
            {children}
        </CoffeContext.Provider>

    )
}