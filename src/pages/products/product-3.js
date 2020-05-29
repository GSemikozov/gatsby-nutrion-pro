import React from 'react';

import ProductTemplate from '../../templates/productTemplate';

const ProductList = () => (
  <>
    <li>3 nebo 5 chodové menu</li>
    <li>5 až 6 dní v týdnu</li>
    <li>Rozvoz po Praze</li>
  </>
)

const Product3 = () => (
  <ProductTemplate
    productId="3"
    title="Udržovací program"
    productList={ProductList}
  />
)

export default Product3
