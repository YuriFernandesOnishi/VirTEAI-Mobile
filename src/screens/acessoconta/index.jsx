
import { 
    AcessoConta,
    AcessoText,
    AcessoView,
    Button,
    ContainerAcesso,
    ContainerContinuar,
    ContinuarText,
    HomeImage,
    Logo, 
    Menu, 
    Navegacao, 
    OfertasContainer, 
    Perfil, 
    TelaFundo, 
    Termos, 
    Textinho, 
    TextoButton,
    TituloCompras,
} from "./styles";

export default function SuaConta () {
    return (
        <AcessoConta>
                        {/* Topo */}
            <Navegacao>
                <Logo source={require('../../assets/virteailogo.png')}/>
                <Menu source={require('../../assets/menu.png')}/>
                </Navegacao>
                       
                <TelaFundo source={require('../../assets/technologybackground.png')}>
                <AcessoView>
                    <AcessoText>Acesse sua conta </AcessoText>
                </AcessoView>
                <ContainerAcesso>
                <Perfil source={require('../../assets/perfilicon.png')}/>
                <ContainerContinuar>
                    <ContinuarText>Continuar</ContinuarText>
                </ContainerContinuar>
                <Textinho>Ao continuar você concorda com nossos</Textinho>
                <Termos>Termos de Uso</Termos>
                </ContainerAcesso>
                </TelaFundo>
        </AcessoConta>
            );
        }
