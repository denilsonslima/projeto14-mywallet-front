import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

export default function SignUp() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        senha: "",
        confirmacao: ""
    })
    console.log(form)
    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    function autenticar(e) {
        e.preventDefault()
        alert("oi")
    }
    return (
        <Main>
            <h1>MyWallet</h1>
            <form onSubmit={autenticar}>
                <input
                    required
                    type="text"
                    placeholder="Name"
                    name="name"
                    onChange={handleForm}
                    value={form.name}
                />
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
                <input
                    required
                    type="password"
                    placeholder="Confirme a senha"
                    name="confirmacao"
                    onChange={handleForm}
                    value={form.confirmacao}
                />
                <button type="submit">Entrar</button>
            </form>
            <Link to={"/"}>
                <p>Já tem uma conta? Entre agora!</p>
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
    > h1 {
        font-family: 'Saira Stencil One';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 50px;
        color: #FFFFFF;
        margin-bottom: 24px;
    }
    > form {
        display: flex;
        flex-direction: column;
        gap: 13px;
        width: 100%;
        > input {
            height: 58px;
            padding-left: 15px;font-family: 'Raleway';
            border: none;
            border-radius: 5px;
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
            color: #000000;
            outline: none;
        }
        > button {
            width: 100%;
            height: 46px;
            margin-bottom: 32px;
            background-color: #A328D6;
            border-radius: 5px;
            border: none;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 23px;
            color: #FFFFFF;
        }
    }
    > a {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
        text-decoration: none;
    }
`