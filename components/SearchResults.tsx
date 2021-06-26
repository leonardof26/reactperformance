import React, { useEffect, useMemo, useState } from 'react'

import { List, ListRowRenderer } from 'react-virtualized'

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

  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem
          product={products[index]}
          onAddToWishList={addToWishList}
        />
      </div>
    )
  }

  function addToWishList(id: number) {
    setWishList([...wishList, id])
  }

  useEffect(() => {
    console.log(wishList)
  }, [wishList])

  return (
    <div>
      <h2>Total: {totalPrice}</h2>
      <List
        height={300}
        rowHeight={25}
        width={900}
        overscanRowCount={5}
        rowCount={products.length}
        rowRenderer={rowRenderer}
      />
    </div>
  )
}

export default SearchResults
