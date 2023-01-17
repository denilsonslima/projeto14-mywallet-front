import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Login() {
    const [form, setForm] = useState({
        email: "",
        senha: ""
    })

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    function autenticar(e) {
        e.preventDefault()
    }
    return (
        <Main>
            <h1>MyWallet</h1>
            <form onSubmit={autenticar}>
                <input
                    required
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    onChange={handleForm}
                    value={form.email}
                />
                <input
                    required
                    type="password"
                    placeholder="Senha"
                    name="senha"
                    onChange={handleForm}
                    value={form.senha}
                />
                <button type="submit">Entrar</button>
            </form>
            <Link to={"/cadastro"}>
                <p>Primeira vez? Cadastre-se!</p>
            </Link>
        </Main>
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
    > h1 {
        font-family: 'Saira Stencil One';
        font-size: 32px;
        line-height: 50px;
        color: #FFFFFF;
        margin-bottom: 24px;
    }
    > form {
        > input {
            width: 100%;
            height: 58px;
            padding-left: 15px;
            border: none;
            border-radius: 5px;
            font-size: 20px;
            line-height: 23px;
            color: #000000;
            outline: none;
        }
        > input[type=password] {
            margin: 13px 0;
        }
        > button {
            width: 100%;
            height: 46px;
            margin-bottom: 36px;
            background-color: #A328D6;
            border-radius: 5px;
            border: none;
            font-weight: 700;
            font-size: 20px;
            line-height: 23px;
            color: #FFFFFF;
            cursor: pointer;
            :hover {
                background-color: #b620f7;
            }
        }
    }
    > a {
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
        text-decoration: none;
    }
`