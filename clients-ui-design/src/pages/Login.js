import React, { useState } from 'react'
import styled from 'styled-components'
import { mobile } from '../assets/Responsive'
import { login } from '../redux/apiCalls'
import { useDispatch, useSelector } from 'react-redux'

const Container = styled.div`
    width:100vw;
    height:100vh;
    background-color: pink;
    display:flex;
    align-items:center;
    justify-content:center;

`
const Wrapper = styled.div`
    width:25%;
    padding:20px;
    background-color:white;
    ${mobile({width:'75%'})}

`
const Title = styled.h1`
    font-size:25px;
    font-weight:300;
`
const Form = styled.form`
    display:flex;
    flex-direction:column;
`
const Input = styled.input`
    flex:1;
    min-width:40%;
    margin:10px 0px;
    padding:10px;
`
const Button = styled.button`
    width:40%;
    border:none;
    padding:15px 20px;
    background-color:teal;
    font-color:white;
    cursor:pointer;
    margin-button:10px;
    &:disabled{
        color:green;
        cursor:not-allowed;
    }
`
const Link = styled.div`
    margin:5px 0px;
    font-size:12px;
    text-decoration:underline;
    cursor:pointer;
`
const Error =styled.span`
color:red;
`

const Login = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const dispatch = useDispatch();
    const {isFetching, error} = useSelector((state)=>state.user)
    const handleClick = (e)=>{
        e.preventDefault()
        login(dispatch,{username,password})
    }
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
                <Input type='password' placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
                <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
                {error && <Error>Something went wrong....</Error>}
                <Link>DO NOT REMEMBER THE PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login
