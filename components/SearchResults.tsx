import React from 'react'

import ProductItem from './ProductItem'

type Product = {
  id: number
  price: number
  title: string
}

interface SearchResultsProps {
  products: Product[]
}

function SearchResults({ products }: SearchResultsProps) {
  return (
    <div>
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  )
}

export default SearchResults
