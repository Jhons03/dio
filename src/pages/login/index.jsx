import { useNavigate } from 'react-router-dom';

import { MdEmail, MdLock } from 'react-icons/md'
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


import { Container, Title, Column, Row, CriarText, EsqueciText, SubTitleLogin, TitleLogin, Wrapper } from './styles';

const schema = yup.object({
  email: yup.string().email('email não é válido').required('Campo obrigatório'),
  password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatório'),
}).required();


const Login = () => {

    const navigate = useNavigate();
    const handleClickSignIn = () => {
        navigate('/feed')
    }
    const { control, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    console.log(isValid, errors);

    const onSubmit = data => console.log(data);

    return(<>
    <Header />
    <Container>
        <Column>
            <Title>
                A plataforma para você aprender com experts, dominar as principais tecnologias 
                e entrar mais rápido nas empresas mais desejadas.
            </Title>
        </Column>
        <Column>
            <Wrapper>
                <TitleLogin>Faça seu cadastro!</TitleLogin>
                <SubTitleLogin>Faça seu Login e make the change.</SubTitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />} />
                    <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />}/>
                    <Button title="Entrar" variant="secondary" type='submit'/>
                </form>
                <Row>
                    <EsqueciText>Esqueci minha senha</EsqueciText>
                    <CriarText>Criar Conta</CriarText>
                </Row>
            </Wrapper>
        </Column>
    </Container>
    </>)
}

export { Login };