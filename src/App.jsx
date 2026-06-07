import { useState } from 'react'
import ProductListSection from './components/ProductListSection'
import CartSection from './components/CartSection'
import OrderConfirmedModal from './components/OrderConfirmedModal'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleAdd = (product) => {
    setCartItems((items) => [
      ...items,
      { name: product.name, price: product.price, image: product.image, quantity: 1 },
    ])
  }

  const handleIncrement = (name) => {
    setCartItems((items) =>
      items.map((item) => (item.name === name ? { ...item, quantity: item.quantity + 1 } : item)),
    )
  }

  const handleDecrement = (name) => {
    setCartItems((items) =>
      items
        .map((item) => (item.name === name ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0),
    )
  }

  const handleRemove = (name) => {
    setCartItems((items) => items.filter((item) => item.name !== name))
  }

  const handleConfirm = () => {
    setIsModalOpen(true)
  }

  const handleStartNewOrder = () => {
    setCartItems([])
    setIsModalOpen(false)
  }

  return (
    <main className="mx-auto max-w-md p-6">
      <ProductListSection
        cartItems={cartItems}
        onAdd={handleAdd}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />

      <CartSection cartItems={cartItems} onRemove={handleRemove} onConfirm={handleConfirm} />

      {isModalOpen && (
        <OrderConfirmedModal cartItems={cartItems} onStartNewOrder={handleStartNewOrder} />
      )}
    </main>
  )
}

export default App
