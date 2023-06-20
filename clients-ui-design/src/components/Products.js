import React, { useEffect, useState } from 'react'
import { popularProducts } from '../Data'
import styled from 'styled-components'
import Product from './Product'
import axios from 'axios'
import { product5Bag } from '../images'

const Container = styled.div`
    padding:20px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
`

const Products = ({cat,filter,sort}) => {
  

  const [product , setProduct] = useState([]);
  const [filteredProduct , setFilteredProduct] = useState([]);

  useEffect(()=>{
    const getProducts = async ()=>{
      try{
        const res = await axios.get(cat ? "https://localhost:5000/api/products?category=${cat}":
        "https://localhost:5000/api/products"
        );
        setProduct(res.data)
      }catch(err){

      }
    }
    getProducts();
  },[cat]);
  useEffect(()=>{
    cat && setFilteredProduct(
      product.filter(item=>Object.entries(filter).every(([key,value])=>
        item[key].includes(value)
      )
      )
    )
  },[product,cat,filter]);
  useEffect(()=>{
    if(sort==="newest"){
      setFilteredProduct(prev=>
        [...prev].sort((a,b)=>a.createdAt - b.createdAt)
      )
    }else if(sort==="acs"){
      setFilteredProduct(prev=>
        [...prev].sort((a,b)=>a.price - b.price)
      )
    }else{
      setFilteredProduct(prev=>
        [...prev].sort((a,b)=>b.price - a.price)
      )
    }
  })

  return (
    <Container>
      {cat
        ? popularProducts.map((item)=><Product item={item} key={item.id}/>)
        :popularProducts
          .slice(0.8)
          .map((item)=><Product item={item} key={item.id}/>)
      }
    </Container>
  )
}

export default Products
