type Product = {
  id: number
  price: number
  title: string
}

interface ProductItemProps {
  product: Product
}

function ProductItem({ product }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  )
}

export default ProductItem
