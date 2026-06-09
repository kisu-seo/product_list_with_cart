/**
 * @file CartItem.jsx
 * @description 장바구니 목록(CartSection)의 개별 상품 항목 컴포넌트.
 *
 * [표시 정보]
 * - 상품명, 수량(Nx), 단가(@ $X.XX), 소계($X.XX) 를 한 줄에 표시합니다.
 * - 우측의 '✕' 버튼으로 해당 상품을 장바구니에서 즉시 제거할 수 있습니다.
 *
 * [접근성(A11y)]
 * - 제거 버튼의 aria-label에 상품명을 포함시켜 스크린 리더 사용자가 어떤 상품을 제거하는지 알 수 있게 합니다.
 * - 아이콘 이미지는 장식용이므로 alt를 빈 문자열로 설정하고, pointer-events-none으로 클릭 차단합니다.
 */
import { formatPrice } from '../utils/format'

/**
 * @param {object}   props
 * @param {object}   props.item      - 장바구니 상품 객체 ({ name, price, quantity, image })
 * @param {function} props.onRemove  - 상품명(name)을 인자로 받아 장바구니에서 제거하는 핸들러
 */
function CartItem({ item, onRemove }) {
  return (
    <li className="flex items-center justify-between gap-3 border-b border-rose-100 py-4">
      {/* 좌측: 상품명 + 수량/단가/소계 */}
      <div className="flex flex-col gap-1">
        <span className="text-preset-4-bold text-rose-900">{item.name}</span>
        <div className="flex items-center gap-2">
          {/* 수량 표시 (예: "2x") */}
          <span className="text-preset-4-bold text-red">{item.quantity}x</span>
          {/* 단가 표시 (예: "@ $6.50") */}
          <span className="text-preset-4 text-rose-400">@ {formatPrice(item.price)}</span>
          {/* 소계 = 수량 × 단가 */}
          <span className="text-preset-4-bold text-rose-400">
            {formatPrice(item.quantity * item.price)}
          </span>
        </div>
      </div>

      {/* 우측: 항목 제거 버튼 */}
      <button
        type="button"
        onClick={() => onRemove(item.name)}
        aria-label={`${item.name} 장바구니에서 제거`}
        className="flex h-5 w-5 items-center justify-center rounded-full border border-rose-400"
      >
        <img
          src="/assets/images/icon-remove-item.svg"
          alt=""
          className="pointer-events-none"
        />
      </button>
    </li>
  )
}

export default CartItem
