import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
    background: #565656;
    border-radius: 22px;
    position: relative;

    color: #FFF;
    padding: 2px 12px;
    width: 100%;

    //criando uma propriedade com estilo diferente caso atenda as condições
    ${({variant}) => variant !== "primary"  && css`
        min-width: 167px;
        height: 33px;
        
        background: #e4105D;

        &::after {
            content: '',
            position: absolute;
            border: 1px solid #E4105D;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `}

`
