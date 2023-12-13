import React from 'react'
import SectionTitle from './SectionTitle';
import ProductsGrid from './ProductsGrid';

const FeaturedProducts = () => {
  return (
    <div className='pt-20'>
      <SectionTitle text="featured products"/>
      <ProductsGrid />
    </div>
  )
}

export default FeaturedProducts;
