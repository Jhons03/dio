import { useNavigate } from 'react-router-dom';

import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { api } from '../../services/api';
import { useState } from 'react';


import { Container, Title, Column, CriarText, SubTitleLogin, TitleLogin, Wrapper } from './styles';
import { IFormData } from '../cadastro/types';

const schema = yup.object({
  nome: yup.string().required('Campo obrigatório'),
  email: yup.string().email('email não é válido').required('Campo obrigatório'),
  password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatório'),
}).required();


const Cadastro = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    
        const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
            resolver: yupResolver(schema),
            mode: 'onChange',
        });
    
        const onSubmit = async (formData: IFormData) => {
            try {
                const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
                if(data.length === 1){
                    navigate('/login')
                }
            } catch {
                alert('Houve um erro, tente novamente')
            }
        };

    return(
    <>
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
                <TitleLogin>Comece agora grátis</TitleLogin>
                <SubTitleLogin>Crie sua conta e make the change.</SubTitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name="nome" placeholder="Nome completo" control={control}  leftIcon={<MdPerson />} required />
                    <Input name="email" type="email" control={control} errorMessage={errors?.email?.message} placeholder="E-mail" onChange={e => setEmail(e.target.value)} leftIcon={<MdEmail />} required />
                    <Input name="password" placeholder="Senha" control={control} errorMessage={errors?.password?.message} type="password" onChange={e => setPassword(e.target.value)} leftIcon={<MdLock />} required />
                    <Button title="Criar minha conta" variant="secondary" type="submit" />
                </form>
                <SubTitleLogin>Ao clicar em "criar minha conta", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</SubTitleLogin>
                <CriarText>Já tenho conta. <span>Fazer login</span></CriarText>
            </Wrapper>
        </Column>
    </Container>
    </>)
}

export { Cadastro };