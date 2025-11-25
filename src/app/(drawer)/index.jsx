import React from "react";
import { ScrollView } from "react-native";
import { 
    CadastroContainer, 
    ContainerEmpresa, 
    EmpresasParceiras,
    HomeImage, 
    RelatosHome,
    SectionEmpresas,
    TextoRelatos 
} from "../../styles/home";
import Header from "../../components/header/Header";
import RelatoCard from "../../components/RelatoCard";
import EmpresaBadge from "../../components/EmpresaBadge";

const relatos = [
    {
        image: require('../../assets/images/MarianaS.png'),
        titulo: 'Mariana S. - Mãe do Lucas (7 anos, TEA nível 2)',
        texto:
            'Meu filho sempre teve dificuldades com lugares novos e interações sociais. Com os óculos personalizados conseguimos criar simulações controladas que ajudaram ele a se sentir mais seguro antes de sair para ambientes diferentes. Ele adora os momentos de imersão e até melhorou na escola! Foi uma das melhores decisões que tomamos.',
    },
    {
        image: require('../../assets/images/RafaelM.png'),
        titulo: 'Rafael M. - Psicólogo infantil',
        texto:
            'Trabalho com crianças no espectro autista e sempre busco ferramentas que possam ajudá-las no desenvolvimento das habilidades sociais e emocionais. Esses óculos são incríveis porque permitem personalizar estímulos e tornar a terapia mais envolvente. Meus pacientes adoram e vejo resultados positivos no dia a dia!',
    },
    {
        image: require('../../assets/images/BeatrizL.png'),
        titulo: 'Beatriz L. - Estudante Universitária (21 anos, TEA nível 1)',
        texto:
            'Sempre tive dificuldades com ambientes muito barulhentos e imprevisíveis. Os óculos me ajudam a treinar situações do dia a dia antes de enfrentá-las na realidade. Além disso, os filtros de luz me permitem estudar por mais tempo sem sentir tanto desconforto sensorial. Recomendo para qualquer pessoa que busca mais autonomia!',
    },
    {
        image: require('../../assets/images/CarlosF.png'),
        titulo: 'Carlos F. - Pai do Henrique (12 anos, TEA nível 3)',
        texto:
            'O Henrique tem dificuldades para lidar com mudanças na rotina e se sente facilmente sobrecarregado. Com os óculos de realidade virtual personalizados, conseguimos criar um ambiente seguro onde ele pode explorar novos desafios de forma gradual. Isso tem feito uma diferença enorme na nossa vida!',
    },
    {
        image: require('../../assets/images/JulioC.png'),
        titulo: 'Julio C. - Programador (Ansiedade social e TEA nível 1)',
        texto:
            'Sempre tive dificuldade em interações sociais e ambientes desconhecidos me deixavam muito ansioso. Com os óculos personalizados, consegui treinar situações como entrevistas de emprego e apresentações em público sem o medo de errar. Isso me deu mais confiança para encarar o mundo real no meu próprio ritmo. Foi um divisor de águas para mim!',
    },
];

const empresas = [
    {
        image: require('../../assets/images/aacdlogo.png'),
        descricao: 'Associação de assistência à criança deficiente',
    },
    {
        image: require('../../assets/images/ama.png'),
        descricao: 'Associação de amigos do autista',
    },
    {
        image: require('../../assets/images/ijc.png'),
        descricao: 'Instituição Jô Clemente',
    },
    {
        image: require('../../assets/images/lemda.png'),
        descricao: 'Lar Mãe do Divino Amor',
    },
];

export default function Home() {
    return (
        <ScrollView 
            style={{ flex: 1 }} 
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >
            <CadastroContainer>
                {/* Topo */}
                <Header/>

                <HomeImage source={require('../../assets/images/Personalizado.png')}/>

                {/* Relatos */}
                <RelatosHome>Relatos</RelatosHome>
                <TextoRelatos>
                    Alguns de nossos clientes relataram suas experiências com nossos produtos.
                </TextoRelatos>
                <TextoRelatos>Dê uma olhada:</TextoRelatos>

                {/* Carrossel de relatos */}
                <ScrollView 
                    horizontal 
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    snapToAlignment="center"
                    decelerationRate="fast"
                    contentContainerStyle={{ 
                        paddingHorizontal: 20, 
                        gap: 20
                    }}
                >
                    {relatos.map((r, idx) => (
                        <RelatoCard
                            key={idx}
                            imageSource={r.image}
                            titulo={r.titulo}
                            texto={r.texto}
                        />
                    ))}
                </ScrollView>

                {/* Empresas parceiras */}
                <SectionEmpresas>
                    <EmpresasParceiras>Empresas Parceiras</EmpresasParceiras>
                    <ContainerEmpresa>
                        {empresas.map((e, idx) => (
                            <EmpresaBadge
                                key={idx}
                                imageSource={e.image}
                                descricao={e.descricao}
                            />
                        ))}
                    </ContainerEmpresa>
                </SectionEmpresas>

            </CadastroContainer>
        </ScrollView>
    );
}
