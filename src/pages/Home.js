import styled from "styled-components"
import sair from "../assets/img/sair.svg"
import mais from "../assets/img/mais.svg"
import menos from "../assets/img/menos.svg"

export default function Home() {
    return (
        <Main>
            <div>
                <p>Olá, Fulano</p>
                <img src={sair} alt="" />
            </div>
            <div>
                <p>Não há registros de <br /> entrada ou saída</p>
            </div>
            <div>
                <div>
                    <img src={mais} alt="" />
                    <p>Nova <br /> entrada</p>
                </div>
                <div>
                    <img src={menos} alt="" />
                    <p>Nova <br /> saída</p>
                </div>
            </div>
        </Main >
    )
}

const Main = styled.main`
    max-width: 500px;
    width: 100%;
    height: 100vh;
    margin: 0 auto; 
    padding: 0 25px;
    background-color: #8C11BE;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    > div:nth-of-type(1){
        width: 100%;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
        display: flex;
        justify-content: space-between;
    }
    > div:nth-of-type(2){
        width: 100%;
        height: 446px;
        background: #FFFFFF;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 23px 0 13px;
        > p {
            font-size: 20px;
            line-height: 23px;
            text-align: center;
            color: #868686;
        }
    }
    > div:nth-of-type(3){
        width: 100%;
        display: flex;
        justify-content: space-between;
        > div {
            width: calc(50% - 15px/2);
            height: 114px;
            background: #A328D6;
            border-radius: 5px;
            padding: 9px;
            > p {
                height: 40px;
                font-weight: 700;
                font-size: 17px;
                line-height: 20px;
                color: #FFFFFF;
                margin-top: 31px;
            }
        }
    }
`