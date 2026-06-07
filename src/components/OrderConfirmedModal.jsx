function OrderConfirmedModal({ cartItems, onStartNewOrder }) {
  const orderTotal = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0)

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 overflow-y-auto pt-[95px]">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-confirmed-heading"
        className="w-full max-w-md rounded-3xl bg-white p-6 flex flex-col gap-8"
      >
        <div>
          <img src="/assets/images/icon-order-confirmed.svg" alt="" className="mb-4" />
          <h2 id="order-confirmed-heading" className="text-preset-1 text-rose-900">
            Order Confirmed
          </h2>
          <p className="mt-2 text-preset-4 text-rose-500">We hope you enjoy your food!</p>

          <ul className="mt-6 flex flex-col rounded-2xl bg-rose-50 px-4">
            {cartItems.map((item) => (
              <li key={item.name} className="flex items-center justify-between gap-3 border-b border-rose-100 py-4 last:border-none">
                <div className="flex items-center gap-3">
                  <img
                    src={item.image.thumbnail.replace('./assets', '/assets')}
                    alt=""
                    className="h-10 w-10 rounded-md object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="text-preset-4-bold text-rose-900">{item.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-preset-4-bold text-red">{item.quantity}x</span>
                      <span className="text-preset-4 text-rose-400">@ ${item.price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <span className="text-preset-4-bold text-rose-900">${(item.quantity * item.price).toFixed(2)}</span>
              </li>
            ))}

            <li className="flex items-center justify-between py-4">
              <span className="text-preset-4 text-rose-900">Order Total</span>
              <span className="text-preset-2 text-rose-900">${orderTotal.toFixed(2)}</span>
            </li>
          </ul>
        </div>

        <button
          type="button"
          onClick={onStartNewOrder}
          className="w-full rounded-full bg-red py-3 text-preset-3 text-white"
        >
          Start New Order
        </button>
      </div>
    </div>
  )
}

export default OrderConfirmedModal
