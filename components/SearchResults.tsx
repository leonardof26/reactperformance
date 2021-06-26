import React, { useMemo } from 'react'

import { ProductItem } from './ProductItem'

type Product = {
  id: number
  price: number
  title: string
}

interface SearchResultsProps {
  totalPrice: number
  products: Product[]
}

function SearchResults({ products, totalPrice }: SearchResultsProps) {
  return (
    <div>
      <h2>Total: {totalPrice}</h2>
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  )
}

export default SearchResults
