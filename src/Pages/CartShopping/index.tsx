import {
    CepInput,
    TitleTextoForm,
    CartContainer,
    CartFinish,
    PageContainer, 
    FormsContainer, 
    PayContainer,
    CartFinishContainer, 
    TitleFormContainer, 
    SubtitlesForm,
    RuaInput} from './style'
import {MapPinLine} from 'phosphor-react'
import { useContext } from 'react'
import { CoffeContext } from '../../Contexts/CoffeContext'

export function CartShopping(){

    const {coffees} =useContext(CoffeContext)

    console.log(coffees)
    return (
    <PageContainer>
        
        <CartContainer>
        <p>Complete seu pedido</p>
            <FormsContainer>
                <TitleFormContainer>
                    <TitleTextoForm><MapPinLine width={22} height={22} color="#C47F17"/>Endereço de Entrega</TitleTextoForm>
                    <SubtitlesForm>Informe o endereço onde deseja receber seu pedido</SubtitlesForm>
                </TitleFormContainer>
                <CepInput
                placeholder='CEP'
                />
                <RuaInput
                placeholder='Rua'
                />
                <div>

                </div>

            </FormsContainer>
            <PayContainer>

            </PayContainer>
        </CartContainer>
        
        <CartFinishContainer>
        <p>Complete seu pedido</p>
            <CartFinish>

            </CartFinish>

        </CartFinishContainer>

    </PageContainer>
    )
}