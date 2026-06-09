/**
 * @file OrderConfirmedModal.jsx
 * @description 주문 완료 확인 모달(Modal) 컴포넌트.
 *              'Confirm Order' 버튼 클릭 시 App.jsx에서 조건부 렌더링됩니다.
 *
 * [레이아웃 구조]
 * - 외부 오버레이(Overlay): fixed + inset-0으로 화면 전체를 반투명(bg-black/50) 배경으로 덮습니다.
 * - 내부 모달 카드: 화면 크기에 따라 위치와 너비가 다르게 적용됩니다.
 *   - 모바일:    상단에서 95px 아래 위치 (pt-[95px]), 최대 너비 제한
 *   - 태블릿:    좌우 40px 여백 내 전체 너비, 사방 둥근 모서리(rounded-xl)
 *   - 데스크톱:  화면 수직/수평 중앙 (lg:items-center), 너비 592px 고정
 *
 * [접근성(A11y)]
 * - role="dialog": 이 요소가 대화 상자임을 보조 기기에 알립니다.
 * - aria-modal="true": 모달 외부 콘텐츠가 비활성 상태임을 스크린 리더에 알립니다.
 * - aria-labelledby: 모달 제목(h2)을 이 대화 상자의 접근 가능한 이름으로 지정합니다.
 */
import { formatPrice } from '../utils/format'
import OrderSummaryItem from './OrderSummaryItem'

/**
 * @param {object}   props
 * @param {Array}    props.cartItems        - 주문된 상품 목록 (주문 내역 표시에 사용)
 * @param {function} props.onStartNewOrder  - 'Start New Order' 버튼 클릭 핸들러 (장바구니 초기화 + 모달 닫기)
 */
function OrderConfirmedModal({ cartItems, onStartNewOrder }) {
  // 주문 총액: 모든 상품의 (단가 × 수량) 합계
  const orderTotal = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0)

  return (
    /*
     * 반투명 오버레이(Overlay): fixed + inset-0으로 뷰포트 전체를 덮습니다.
     * overflow-y-auto: 모달 내용이 길어질 경우 스크롤 가능하도록 설정합니다.
     */
    <div className="fixed inset-0 z-50 flex items-start lg:items-center justify-center bg-black/50 overflow-y-auto pt-[95px] lg:pt-0 md:px-10">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-confirmed-heading"
        className="w-full max-w-md md:max-w-none md:w-full lg:w-[592px] rounded-t-xl md:rounded-xl bg-white p-10 flex flex-col gap-8"
      >
        {/* 모달 상단: 체크 아이콘, 제목, 부제목, 주문 내역 리스트 */}
        <div>
          {/* 주문 완료 체크 아이콘: 장식 이미지이므로 alt 빈 문자열 */}
          <img src="/assets/images/icon-order-confirmed.svg" alt="" className="mb-[27px]" />

          <h2 id="order-confirmed-heading" className="text-preset-1 text-rose-900">
            Order Confirmed
          </h2>
          <p className="mt-2 text-preset-3 font-normal text-rose-500">
            We hope you enjoy your food!
          </p>

          {/* 주문 상품 요약 리스트 */}
          <ul className="mt-8 flex flex-col rounded-2xl bg-rose-50 p-6">
            {cartItems.map((item) => (
              // key를 상품명으로 설정 (cartItems 내에서 name은 고유합니다)
              <OrderSummaryItem key={item.name} item={item} />
            ))}

            {/* 주문 합계 행: 리스트의 마지막 항목으로 합계 금액을 표시 */}
            <li className="flex items-center justify-between pt-4 pb-0">
              <span className="text-preset-4 text-rose-900">Order Total</span>
              <span className="text-preset-2 text-rose-900">{formatPrice(orderTotal)}</span>
            </li>
          </ul>
        </div>

        {/* 새 주문 시작 버튼: 클릭 시 장바구니 초기화 및 모달 닫기 */}
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
