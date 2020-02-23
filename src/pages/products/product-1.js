import React from 'react';

import ProductTemplate from '../../templates/productTemplate';

const ProductList = () => (
  <>
    <li>3 nebo 5 chodové menu</li>
    <li>5 až 6 dní v týdnu</li>
    <li>Nutriční monitoring</li>
    <li>Rozvoz po Praze</li>
    <li>Možnost nastavení rychlosti hubnutí</li>
  </>
)

const Product1 = () => (
  <ProductTemplate
    productId="1"
    title="Hubnoucí program"
    productList={ProductList}
  />
)

export default Product1
