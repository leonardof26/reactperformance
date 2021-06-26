import { memo, useState } from 'react'
import { AddProductToWishListProps } from './AddProductToWishList'
import dynamic from 'next/dynamic'

// import { AddProductToWishList } from './AddProductToWishList'

const AddProductToWishList = dynamic<AddProductToWishListProps>(
  () => {
    return import('./AddProductToWishList').then(
      (mod) => mod.AddProductToWishList
    )
  },
  {
    loading: () => <span>Carregando</span>,
  }
)

type Product = {
  id: number
  price: number
  title: string
}

interface ProductItemProps {
  product: Product
  onAddToWishList: (id: number) => void
}

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
  const [isAddingToWishList, setIsAddingToWishList] = useState(false)

  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
      <button onClick={() => setIsAddingToWishList(true)}>
        Adicionar aos favoritos
      </button>
      {isAddingToWishList && (
        <AddProductToWishList
          onAddToWishList={() => {
            onAddToWishList(product.id)
            setIsAddingToWishList(false)
          }}
          onRequestClose={() => setIsAddingToWishList(false)}
        />
      )}
    </div>
  )
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product)
  }
)
