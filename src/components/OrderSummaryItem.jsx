/**
 * @file OrderSummaryItem.jsx
 * @description 주문 확인 모달(OrderConfirmedModal) 내 개별 상품 요약 항목 컴포넌트.
 *
 * [표시 정보]
 * - 썸네일 이미지, 상품명(말줄임 처리), 수량(Nx), 단가(@ $X.XX), 소계($X.XX)
 *
 * [Tailwind CSS 포인트]
 * - first:pt-0: 목록의 첫 번째 항목은 상단 padding을 제거하여 리스트 컨테이너와 간격을 맞춥니다.
 * - last:border-none: 목록의 마지막 항목은 하단 구분선(border-b)을 제거합니다.
 * - block truncate: 긴 상품명이 컨테이너를 넘치지 않도록 말줄임(...)으로 처리합니다.
 * - min-w-0: flex 자식 요소가 overflow를 정상적으로 처리하도록 최소 너비를 0으로 설정합니다.
 */
import { resolveImagePath } from '../utils/image'
import { formatPrice } from '../utils/format'

/**
 * @param {object} props
 * @param {object} props.item - 장바구니 상품 객체 ({ name, price, quantity, image })
 */
function OrderSummaryItem({ item }) {
  return (
    <li className="flex items-center justify-between gap-3 border-b border-rose-100 py-4 first:pt-0 last:border-none">
      {/* 좌측: 썸네일 + 상품명/수량/단가 */}
      <div className="flex items-center gap-3 min-w-0">
        {/* 썸네일 이미지: data.json 경로를 절대 경로로 변환하여 사용 */}
        <img
          src={resolveImagePath(item.image.thumbnail)}
          alt=""
          className="h-12 w-12 rounded-md object-cover"
        />
        {/* min-w-0: 이 div가 flex 자식이므로 truncate가 올바르게 동작하려면 필수 */}
        <div className="flex flex-col min-w-0">
          {/* 상품명: 긴 이름은 말줄임 처리 */}
          <span className="text-preset-4-bold text-rose-900 block truncate">{item.name}</span>
          <div className="flex items-center gap-2">
            <span className="text-preset-4-bold text-red">{item.quantity}x</span>
            <span className="text-preset-4 text-rose-400">@ {formatPrice(item.price)}</span>
          </div>
        </div>
      </div>

      {/* 우측: 소계 (수량 × 단가) */}
      <span className="text-preset-3 text-rose-900">
        {formatPrice(item.quantity * item.price)}
      </span>
    </li>
  )
}

export default OrderSummaryItem
