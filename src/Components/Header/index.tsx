import { HeaderContainer, IconContainer, LocalContainerText } from "./style";
import  Logo  from '../../../src/assets/Logo.svg'
import { MapPin, ShoppingCart} from 'phosphor-react'
export function Header(){
    return(
        <HeaderContainer>
            <img src={Logo} alt=""/>
            <nav>
                <LocalContainerText>
                    <MapPin weight="fill" width={22} height={22}/>
                    <p>Porto Alegre,RS</p>
                </LocalContainerText>
                <IconContainer>
                    <ShoppingCart size={22} color="#c47f17" weight="fill"  />
                </IconContainer>
            </nav>
        </HeaderContainer>
    )
}