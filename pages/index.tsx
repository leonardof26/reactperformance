import React, { FormEvent, useState } from 'react'
import SearchResults from '../components/SearchResults'

type Product = {
  id: number
  price: number
  title: string
}

type Results = {
  totalPrice: number
  data: Product[]
}

export default function Home() {
  const [searchInput, setSearchInput] = useState('')
  const [results, setResults] = useState<Results>({} as Results)

  async function handleSearch(event: FormEvent) {
    event.preventDefault()

    if (!searchInput.trim()) {
      return
    }

    const resp = await fetch(`http://localhost:3333/products?q=${searchInput}`)
    const data = await resp.json()

    const totalPrice = data.reduce((acc: any, product: any) => {
      return acc + product.price
    }, 0)

    setResults({ totalPrice, data })
  }

  return (
    <div>
      <h1>Search</h1>

      <form onSubmit={handleSearch}>
        <input
          type='text'
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button type='submit'>Procurar</button>
      </form>

      <SearchResults
        products={results.data || []}
        totalPrice={results.totalPrice}
      />
    </div>
  )
}
