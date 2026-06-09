/**
 * @file useCart.js
 * @description 장바구니(Cart)와 주문 확인 모달(Modal)의 상태 및 핸들러를 관리하는 커스텀 훅(Custom Hook).
 *
 * [역할 분리 원칙]
 * - App.jsx가 레이아웃 조립에만 집중할 수 있도록 비즈니스 로직을 이 훅으로 완전히 분리합니다.
 * - 장바구니 상태(`cartItems`)는 항상 불변성(Immutability)을 유지하며 업데이트됩니다.
 *
 * [반환 값 구조]
 * - cartItems:          현재 장바구니 상품 배열 ({ name, price, image, quantity })
 * - isModalOpen:        주문 확인 모달 표시 여부
 * - handleAdd:          새 상품을 장바구니에 추가 (수량 1로 초기화)
 * - handleIncrement:    특정 상품의 수량 1 증가
 * - handleDecrement:    특정 상품의 수량 1 감소 (수량 0이 되면 목록에서 자동 제거)
 * - handleRemove:       특정 상품을 장바구니에서 즉시 제거
 * - handleConfirm:      주문 확인 모달 열기
 * - handleStartNewOrder: 장바구니 초기화 및 모달 닫기
 */
import { useState } from 'react'

export function useCart() {
  // 장바구니에 담긴 상품 목록 (각 항목: { name, price, image, quantity })
  const [cartItems, setCartItems] = useState([])

  // 주문 확인 모달의 표시 여부
  const [isModalOpen, setIsModalOpen] = useState(false)

  // ─── 장바구니 수량 조작 핸들러 ──────────────────────────────────────────

  /**
   * 상품을 장바구니에 처음 추가합니다.
   * 이미 담긴 상품을 다시 추가하는 케이스는 ProductCard에서 버튼 조건 분기로 방지합니다.
   */
  const handleAdd = (product) => {
    setCartItems((prev) => [
      ...prev,
      { name: product.name, price: product.price, image: product.image, quantity: 1 },
    ])
  }

  /**
   * 특정 상품의 수량을 1 증가시킵니다.
   * 상품명(name)을 고유 식별자로 사용합니다.
   */
  const handleIncrement = (name) => {
    setCartItems((prev) =>
      prev.map((item) => (item.name === name ? { ...item, quantity: item.quantity + 1 } : item)),
    )
  }

  /**
   * 특정 상품의 수량을 1 감소시킵니다.
   * 수량이 0이 된 상품은 filter()로 목록에서 자동 제거합니다.
   */
  const handleDecrement = (name) => {
    setCartItems((prev) =>
      prev
        .map((item) => (item.name === name ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0), // 수량 0인 항목은 장바구니에서 제거
    )
  }

  /**
   * 특정 상품을 수량과 관계없이 즉시 장바구니에서 제거합니다.
   * CartItem의 '✕' 버튼에 연결됩니다.
   */
  const handleRemove = (name) => {
    setCartItems((prev) => prev.filter((item) => item.name !== name))
  }

  // ─── 모달 제어 핸들러 ────────────────────────────────────────────────────

  /**
   * 'Confirm Order' 버튼 클릭 시 주문 확인 모달을 엽니다.
   */
  const handleConfirm = () => {
    setIsModalOpen(true)
  }

  /**
   * 'Start New Order' 버튼 클릭 시 장바구니를 빈 배열로 초기화하고 모달을 닫습니다.
   */
  const handleStartNewOrder = () => {
    setCartItems([])
    setIsModalOpen(false)
  }

  return {
    cartItems,
    isModalOpen,
    handleAdd,
    handleIncrement,
    handleDecrement,
    handleRemove,
    handleConfirm,
    handleStartNewOrder,
  }
}
