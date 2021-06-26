import React, { useEffect, useMemo, useState } from 'react'

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
  const [wishList, setWishList] = useState<number[]>([])

  function addToWishList(id: number) {
    setWishList([...wishList, id])
  }

  useEffect(() => {
    console.log(wishList)
  }, [wishList])

  return (
    <div>
      <h2>Total: {totalPrice}</h2>
      {products.map((product) => (
        <ProductItem
          product={product}
          key={product.id}
          onAddToWishList={addToWishList}
        />
      ))}
    </div>
  )
}

export default SearchResults
