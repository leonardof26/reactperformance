import { memo, useState } from 'react'
import { AddProductToWishListProps } from './AddProductToWishList'
import dynamic from 'next/dynamic'
import lodash from 'lodash'

// import { AddProductToWishList } from './AddProductToWishList'

const AddProductToWishList = dynamic<AddProductToWishListProps>(
  () => {
    return import('./AddProductToWishList').then(
      (mod) => mod.AddProductToWishList
    )
  },
  {
    // eslint-disable-next-line react/display-name
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
    return lodash.isEqual(prevProps.product, nextProps.product)
  }
)
