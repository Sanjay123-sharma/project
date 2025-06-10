import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ApiData } from '../Store/Slice'
import ProductList from './ProductList'

export default function Home() {
    const loading=useSelector((state)=>state.product.loading)
    const error=useSelector((state)=>state.product.error)
    const Product=useSelector((state)=>state.product.Product)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(ApiData());
    },[dispatch])
  return (
    <div>

        <ProductList  loading={loading} error={error} Product={Product} /> 
      
    </div>
  )
}
