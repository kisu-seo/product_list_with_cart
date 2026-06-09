/**
 * @file CartSection.jsx
 * @description 장바구니(Cart) 영역 컴포넌트.
 *              데스크톱에서 우측에 고정 너비(384px)로 표시되며,
 *              모바일에서는 상품 목록 아래에 위치합니다.
 *
 * [두 가지 표시 상태]
 * 1. 비어있을 때 → EmptyCart (일러스트 + 안내 문구)
 * 2. 상품이 있을 때 → 상품 목록(CartItem) + 합계 + 카본 중립 배너 + 주문 확인 버튼
 *
 * [상태 계산]
 * - totalQuantity: 헤딩의 "(N)" 총 수량 표시에 사용
 * - orderTotal: "Order Total" 합계 금액 계산
 * 두 값 모두 cartItems 배열을 reduce()로 집계합니다.
 */
import { formatPrice } from '../utils/format'
import EmptyCart from './EmptyCart'
import CartItem from './CartItem'

/**
 * @param {object}   props
 * @param {Array}    props.cartItems  - 현재 장바구니 상품 배열
 * @param {function} props.onRemove   - 개별 상품 제거 핸들러 (CartItem에 전달)
 * @param {function} props.onConfirm  - 주문 확인 버튼 클릭 핸들러 (모달 열기)
 */
function CartSection({ cartItems, onRemove, onConfirm }) {
  // 총 수량: 모든 상품 quantity의 합
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  // 총 결제 금액: (단가 × 수량)의 합
  const orderTotal = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0)

  return (
    // aria-labelledby: 스크린 리더가 이 섹션을 "Your Cart" 제목으로 인식
    <section
      aria-labelledby="cart-heading"
      className="mt-8 lg:mt-0 lg:w-[384px] lg:shrink-0 rounded-2xl bg-white p-6"
    >
      {/* 헤딩: 총 수량을 괄호 안에 실시간 표시 (예: "Your Cart (3)") */}
      <h2 id="cart-heading" className="text-preset-2 text-red">
        Your Cart ({totalQuantity})
      </h2>

      {/* 장바구니 상태에 따라 빈 상태 UI 또는 상품 목록 표시 */}
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          {/* 상품 목록 */}
          <ul className="mt-4 flex flex-col">
            {cartItems.map((item) => (
              <CartItem key={item.name} item={item} onRemove={onRemove} />
            ))}
          </ul>

          {/* 합계 영역 */}
          <div className="flex items-center justify-between py-6">
            <span className="text-preset-4 text-rose-900">Order Total</span>
            <span className="text-preset-2 text-rose-900">{formatPrice(orderTotal)}</span>
          </div>

          {/* 카본 중립(Carbon-Neutral) 배달 안내 배너 */}
          <div className="flex items-center justify-center gap-2 rounded-lg bg-rose-50 py-3 text-preset-4 text-rose-900">
            <img src="/assets/images/icon-carbon-neutral.svg" alt="" />
            <span>
              This is a <strong>carbon-neutral</strong> delivery
            </span>
          </div>

          {/* 주문 확인 버튼: 클릭 시 OrderConfirmedModal이 열림 */}
          <button
            type="button"
            onClick={onConfirm}
            className="mt-6 w-full rounded-full bg-red py-3 text-preset-3 text-white"
          >
            Confirm Order
          </button>
        </>
      )}
    </section>
  )
}

export default CartSection
