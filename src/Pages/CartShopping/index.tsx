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
    RuaInput,
    NumeroInput,
    ComplementoInput,
    ContainerDisplay,
    BairroInput,
    CidadeInput,
    UFinput,
    PayChoseContainer,
    BaseTypePay} from './style'
import {CreditCard, CurrencyDollar, MapPinLine} from 'phosphor-react'
import { useContext } from 'react'
import { CoffeContext } from '../../Contexts/CoffeContext'

export function CartShopping(){

    const {coffees,test} =useContext(CoffeContext)

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
                    type="number"
                  
                    />
                    <RuaInput
                    placeholder='Rua'
                    />
                <ContainerDisplay>
                    <NumeroInput
                    placeholder='Numero'
                    type="number"
                    />
                    <ComplementoInput
                    placeholder='Complemento'
                    
                    />
                </ContainerDisplay>
                <ContainerDisplay>
                    <BairroInput
                    placeholder='Bairro'
                    />
                    <CidadeInput
                    placeholder='Cidade'
                    />
                    <UFinput
                    placeholder='UF'
                    maxLength={2}
                    />
                </ContainerDisplay>
            </FormsContainer>
            <PayContainer>
                 <TitleFormContainer>
                    <TitleTextoForm><CurrencyDollar width={22} height={22} color=" #8047F8"/>Pagamento</TitleTextoForm>
                    <SubtitlesForm>O pagamento é feito na entrega. Escolha a forma que deseja pagar</SubtitlesForm>
                </TitleFormContainer>

                <PayChoseContainer>
                    <BaseTypePay>
                      <CreditCard color='#8047F8' width={16} height={16}/>  <p>CARTÃO DE CREDITO</p>
                    </BaseTypePay>
                    <BaseTypePay>
                      <CreditCard color='#8047F8' width={16} height={16}/>  <p>CARTÃO DE DÉBITO</p>
                    </BaseTypePay>
                    <BaseTypePay>
                      <CreditCard color='#8047F8' width={16} height={16}/>  <p>DINHEIRO</p>
                    </BaseTypePay>
                </PayChoseContainer>
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