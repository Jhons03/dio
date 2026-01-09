import React from 'react'

import { 
    BuscarInputContainer,
    Column,
    Row,
    Container,
    Input,
    Menu,
    MenuRight,
    UserPicture,
    Wrapper  
} from './styles'
import { Button } from '../Button';
import logo from '../../assets/logo-dio.png';
import { Link } from 'react-router-dom';

const Header = ({ autenticado }) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={ logo } alt='Logo da dio' />
                {autenticado ? (<>
                    <BuscarInputContainer>
                    <Input placeholder='Buscar...' />
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>   
                    </>
                ) : null}
            </Row>
            <Row>
                {autenticado ? (
                    <>
                    <UserPicture src='https://avatars.githubusercontent.com/u/100775300?v=4' /> 
                    </>
                    
                ) : (
                    <>
                    <MenuRight href= "/">Home</MenuRight>
                    <Button title="Entrar"/>
                    <Button title="Cadastrar"/>
                    </>
                )}

            </Row>

        </Container>
    </Wrapper>
  )
}

export { Header };
