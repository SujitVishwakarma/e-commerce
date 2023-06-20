import React from 'react'
import {images, payment} from '../images/index'
import styled from 'styled-components'
import {FaFacebook,FaMapMarkerAlt} from 'react-icons/fa'
import { mobile } from '../assets/Responsive'
import {AiFillTwitterCircle,AiFillInstagram,AiFillLinkedin,AiFillPhone,AiFillMail} from 'react-icons/ai'

const Container = styled.div`
    display:flex;
    ${mobile({flexDirection:'column'})}
`
const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;

`
const Logo = styled.h1``
const Des = styled.p`
    margin:20px 0px;
`
const SocilContainer = styled.div`
    display:flex;
`
const SocialIcon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    font-size: 20px;
    color:white;
    background-color:#${props=>props.color};
    display:flex;
    align-items:center;
    justify-content:center;
    margin:15px;
`

const Center = styled.div`
    flex:1;
    padding:20px;
    ${mobile({display:'none'})}
`
const Title = styled.h3`
    margin-bottom:30px;

`
const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`
const ListItem = styled.li`
    width:50%;
    margin-bottom:20px;
`

const Right = styled.div`
    flex:1;
    padding:20px;
    ${mobile({backgroundColor:'#fff8f8'})}
`
const ContactItem = styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;

`
const Payment = styled.img`
    width:60%;
`


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Wiki.</Logo>
            <Des>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, voluptatum aliquam. Vel, in numquam ducimus dolores excepturi ab officiis praesentium doloribus repudiandae nemo est impedit veritatis.
            </Des>
            <SocilContainer>
                <SocialIcon color='3B5999'>
                    <FaFacebook/>
                </SocialIcon>
                <SocialIcon color='E4405F'>
                    <AiFillTwitterCircle/>
                </SocialIcon>
                <SocialIcon color='55ACEE'>
                    <AiFillLinkedin/>
                </SocialIcon>
                <SocialIcon color='E60023'>
                    <AiFillInstagram/>
                </SocialIcon>
            </SocilContainer>
        </Left>
        <Center>
            <Title>USEFUL LINKS</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>

            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><FaMapMarkerAlt style={{marginRight:"10px"}}/>522 Sankarpur, Cuttack-10</ContactItem>
            <ContactItem><AiFillPhone style={{marginRight:"10px"}}/>+91 8875848695</ContactItem>
            <ContactItem><AiFillMail style={{marginRight:"10px"}}/>sujitv257@gmail.com</ContactItem>
            <Payment src={payment}/>
        </Right>
      
    </Container>
  )
}

export default Footer
