import React from 'react';

import ProductTemplate from '../../templates/productTemplate';

const ProductList = () => (
  <>
    <li>3 nebo 5 chodové menu podle tebou určených makronutrientů</li>
    <li>5 až 6 dní v týdnu</li>
    <li>Nutriční monitoring</li>
    <li>Rozvoz po Praze</li>
  </>
)

const Product4 = () => (
  <ProductTemplate
    productId="4"
    title="Uvaříme na míru"
    productList={ProductList}
  />
)

export default Product4
