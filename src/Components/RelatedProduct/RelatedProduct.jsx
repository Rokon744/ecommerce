import React from 'react'
import './RelatedProduct.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const RelatedProduct = () => {
    return (
        <div className='relatedproduct'>
            <h1>Related Products</h1>
            <hr />
            <div className="relatedproduct-item">
                {data_product.map((item) => {
                    return <Item
                        key={item.id}
                        name={item.name}
                        image={item.image}
                        id={item.id}
                        old_price={item.old_price}
                        new_price={item.new_price}
                    />
                })}
            </div>
        </div>
    )
}

export default RelatedProduct
