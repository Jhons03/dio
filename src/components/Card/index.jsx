import React from 'react'

import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from './styles';
import { FiThumbsUp } from 'react-icons/fi';
import banner from '../../assets/bgdio.png';

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground  src={banner}/>
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/100775300?v=4'/>
                <div>
                    <h4>Edson Marco</h4>
                    <p>Há 35 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito no curso de html e css no bootcamp dio Global avanade...<strong>Saiba mais!</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #Javascript</h4>
                <p>
                    <FiThumbsUp /> 20
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card };