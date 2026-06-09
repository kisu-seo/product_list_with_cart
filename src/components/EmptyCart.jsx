/**
 * @file EmptyCart.jsx
 * @description 장바구니가 비어 있을 때 표시되는 빈 상태(Empty State) UI 컴포넌트.
 *              CartSection에서 cartItems 배열이 빈 배열일 때 조건부 렌더링됩니다.
 *
 * - 일러스트 이미지와 안내 문구를 세로 중앙 정렬로 표시합니다.
 * - 별도의 props를 받지 않으며 순수하게 정적인 뷰(View)만 담당합니다.
 */
import { BASE_URL } from '../utils/image'

function EmptyCart() {
  return (
    <div className="flex flex-col items-center gap-4 pt-6 pb-0">
      {/* 빈 장바구니 일러스트 (장식 이미지이므로 alt 값을 빈 문자열로 설정) */}
      <img src={`${BASE_URL}assets/images/illustration-empty-cart.svg`} alt="" />
      <p className="text-preset-4 font-bold text-rose-500 pb-4">
        Your added items will appear here
      </p>
    </div>
  )
}

export default EmptyCart
