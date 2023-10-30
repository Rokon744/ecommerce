import React from 'react'
import { useContext } from 'react'
import { ShopContex } from '../Context/ShopContex'
import {useParams} from 'react-router-dom'
import Breadcrum from '../Components/Breadcrums/Breadcrum'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Components/DescriptionBox.jsx/DescriptionBox'
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct'

const Product = () => {
  const {all_product} = useContext(ShopContex)
  const {productId} = useParams()
  const product = all_product.find((e)=>e.id===Number(productId))

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProduct />
    </div>
  )
}

export default Product
