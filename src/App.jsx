/**
 * @file App.jsx
 * @description 애플리케이션 루트(Root) 컴포넌트.
 *
 * [역할]
 * - useCart 훅에서 상태와 핸들러를 가져와 하위 컴포넌트에 prop으로 내려줍니다.
 * - 페이지 전체의 2단 레이아웃(상품 목록 | 장바구니)을 조립하는 역할만 담당합니다.
 * - 비즈니스 로직(장바구니 CRUD)은 useCart 훅에 완전히 위임합니다.
 *
 * [레이아웃 구조]
 * - 모바일:   세로 방향(flex-col), 상품 목록 → 장바구니 순서
 * - 데스크톱: 가로 방향(flex-row), 좌측 상품 목록(flex-1) + 우측 장바구니(384px 고정)
 */
import { useCart } from './hooks/useCart'
import ProductListSection from './components/ProductListSection'
import CartSection from './components/CartSection'
import OrderConfirmedModal from './components/OrderConfirmedModal'

function App() {
  // 장바구니 상태 및 핸들러를 커스텀 훅으로부터 구조 분해(Destructuring)하여 가져옵니다.
  const {
    cartItems,
    isModalOpen,
    handleAdd,
    handleIncrement,
    handleDecrement,
    handleRemove,
    handleConfirm,
    handleStartNewOrder,
  } = useCart()

  return (
    /*
     * <main> 요소: 페이지 전체 레이아웃 컨테이너
     * - 모바일/태블릿: 가운데 정렬, 최대 너비 제한, 내부 padding 적용
     * - 데스크톱(lg): padding 제거 후 margin으로 여백 제어 (my-[88px] mx-[112px])
     */
    <main className="mx-auto max-w-md md:max-w-[768px] lg:max-w-[1216px] lg:my-[88px] lg:mx-[112px] p-6 md:p-10 lg:p-0 flex flex-col lg:flex-row lg:items-start lg:gap-8">
      {/* 좌측: 상품 목록 섹션 (데스크톱에서 남은 공간을 flex-1로 채움) */}
      <ProductListSection
        cartItems={cartItems}
        onAdd={handleAdd}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />

      {/* 우측: 장바구니 섹션 (데스크톱에서 384px 고정 너비) */}
      <CartSection cartItems={cartItems} onRemove={handleRemove} onConfirm={handleConfirm} />

      {/* 주문 확인 모달: isModalOpen이 true일 때만 DOM에 렌더링 */}
      {isModalOpen && (
        <OrderConfirmedModal cartItems={cartItems} onStartNewOrder={handleStartNewOrder} />
      )}
    </main>
  )
}

export default App
