import React from 'react'
import { categories } from '../Data'
import styled from 'styled-components'
import CategoryItem from './CategoryItem'
import { mobile } from '../assets/Responsive'

const Container = styled.div`
    display:flex;
    padding:20px;
    justify-content:space-between;
    ${mobile({padding:'0px', flexDirection:'column'})}

`

const Categories = () => {
  return (
    <Container>
      {categories.map(item=>(
        <CategoryItem item ={item}/>
      ))}
    </Container>
  )
}

export default Categories
