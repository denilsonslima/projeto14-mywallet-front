import { useState } from "react"
import styled from "styled-components"

export default function NewEntry() {
    const [form, setForm] = useState({
        valor: "",
        descricao: ""
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
            <div>
                <p>Nova entrada</p>
            </div>
            <form onSubmit={autenticar}>
                <input
                    required
                    type="text"
                    placeholder="Valor"
                    name="valor"
                    onChange={handleForm}
                    value={form.valor}
                />
                <input
                    required
                    type="text"
                    placeholder="Descrição"
                    name="descricao"
                    onChange={handleForm}
                    value={form.descricao}
                />
                <button type="submit">Salvar entrada</button>
            </form>
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
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    > div:nth-of-type(1){
        width: 100%;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
        margin-bottom: 40px;
    }
    > form {
        display: flex;
        flex-direction: column;
        gap: 13px;
        width: 100%;
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
`