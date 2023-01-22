import styled from "styled-components"
import sair from "../assets/img/sair.svg"
import mais from "../assets/img/mais.svg"
import menos from "../assets/img/menos.svg"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios"

export default function Home({ token, name }) {
    const navigate = useNavigate()
    const [dados, setDados] = useState([])

    useEffect(() => {
        const dados = async () => {
            const url = `${process.env.REACT_APP_API_URL}/movement`
            const dados = await axios.get(url, { headers: { Authorization: `Bearer ${token}` } })
            setDados([...dados.data])
        }
        dados()
    }, [token])

    const calcular = () => {
        if (dados.length >= 0) {
            const result = dados.reduce((acc, entry) => {
                switch (entry.type) {
                    case 'entrada':
                        return acc + entry.value;
                    case 'saida':
                        return acc - entry.value;
                    default:
                        return acc;
                }
            }, 0);

            return result.toFixed(2)
        }
    }
    const valor = calcular()

    return (
        <Main>
            <div>
                <p>Olá, {name}</p>
                <img src={sair} alt="" onClick={() => navigate("/")} />
            </div>
            <Div valor={dados.length === 0}>
                {dados.length !== 0 ?
                    <>
                        <div>
                            {dados.map((e) => (
                                <div key={e._id}>
                                    <div>
                                        <p>{e.date}</p>
                                        <h2>{e.description}</h2>
                                    </div>
                                    <p style={e.type === "entrada" ? { color: "#03AC00" } : { color: "#C70000" }}>{e.value.toFixed(2)}</p>
                                </div>
                            ))}
                        </div>
                        <div>
                            <h2>SALDO</h2>
                            <p style={valor > 0 ? { color: "#03AC00" } : valor < 0 ? { color: "#C70000" } : null}>{valor}</p>
                        </div>
                    </>
                    : <p>Não há registros de <br /> entrada ou saída</p>}
            </Div>
            <div>
                <div onClick={() => navigate("/nova-entrada")}>
                    <img src={mais} alt="" />
                    <p>Nova <br /> entrada</p>
                </div>
                <div onClick={() => navigate("/nova-saida")}>
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
    padding: 25px 25px 16px;
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
        > img {
            width: 25px;
            height: 25px;
            cursor: pointer;
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
            cursor: pointer;
            :hover {
                background-color: #b620f7;
            }
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

const Div = styled.div`
    width: 100%;
    height: 446px;
    background: #FFFFFF;
    border-radius: 5px;
    display: ${props => props.valor ? "flex" : "block"};
    justify-content: center;
    align-items: center;
    margin: 23px 0 13px;
    padding: 23px 12px 10px;
    position: relative;
    overflow-y: auto;
    > p {
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #868686;
    }
    > div:nth-of-type(1){
        height: calc(100% - 40px);
        overflow-x: auto;
        > div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
        > div {
            display: flex;
            font-size: 16px;
            line-height: 19px;
            gap: 8px;
            overflow: hidden;
        > p {
            color: #C6C6C6;
        }
        > h2 {
            color: #000000;
            max-width: 170px;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        }
        }
    }
    > div:nth-last-child(1) {
        width: 100%;
        background-color: #FFFFFF;
        display: flex;
        justify-content: space-between;
        position: absolute;
        bottom: 0;
        right: 0;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;
        margin-bottom: 0;
        padding: 10px 15px;
    > h2 {
        font-weight: 700;
    }
    }
    `