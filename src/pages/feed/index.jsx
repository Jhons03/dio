import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import bannerImage from "../../assets/banner.png";
import { Container, Column, Title, TitleHighlight } from "./styles";

const Feed = () => {
    return(<>
    <Header autenticado={true}/>
    <Container>
        <Column flex={3}>
            <Title>Feed</Title>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </Column>
        <Column flex={1}>
            <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
            <UserInfo percentual={87} name="Edson Marco" image='https://avatars.githubusercontent.com/u/100775300?v=4' /> 
            <UserInfo percentual={71} name="Edson Marco" image='https://avatars.githubusercontent.com/u/100775300?v=4' /> 
            <UserInfo percentual={68} name="Edson Marco" image='https://avatars.githubusercontent.com/u/100775300?v=4' /> 
            <UserInfo percentual={53} name="Edson Marco" image='https://avatars.githubusercontent.com/u/100775300?v=4' /> 
            <UserInfo percentual={28} name="Edson Marco" image='https://avatars.githubusercontent.com/u/100775300?v=4' /> 
        </Column>       
    </Container>
    </>)
}

export { Feed };