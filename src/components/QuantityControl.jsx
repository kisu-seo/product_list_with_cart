/**
 * @file QuantityControl.jsx
 * @description 상품 카드 이미지 하단에 표시되는 수량 조절(+/-) 버튼 그룹 컴포넌트.
 *              ProductCard에서 quantity > 0 일 때만 렌더링됩니다.
 *
 * [접근성(A11y)]
 * - role="group": 두 버튼을 하나의 기능 그룹으로 묶어 스크린 리더에 맥락을 제공합니다.
 * - aria-label (group): 어떤 상품의 수량 조절인지 상품명을 포함해 명확히 안내합니다.
 * - aria-label (button): 각 버튼이 증가/감소 중 어떤 동작인지 명시합니다.
 * - aria-live="polite": 수량 숫자가 변경될 때 스크린 리더가 자연스럽게 값을 읽어줍니다.
 * - pointer-events-none (img): 아이콘 이미지가 클릭 이벤트를 방해하지 않도록 차단합니다.
 */

/**
 * @param {object}   props
 * @param {string}   props.productName  - 수량 조절 대상 상품명 (aria-label에 활용)
 * @param {number}   props.quantity     - 현재 수량 (화면 중앙에 표시)
 * @param {function} props.onDecrement  - '-' 버튼 클릭 핸들러
 * @param {function} props.onIncrement  - '+' 버튼 클릭 핸들러
 */
function QuantityControl({ productName, quantity, onDecrement, onIncrement }) {
  return (
    // 이미지 하단 중앙에 absolute로 배치 (-bottom-5, left-1/2, -translate-x-1/2)
    <div
      className="absolute left-1/2 -bottom-5 flex w-[160px] h-[44px] -translate-x-1/2 items-center justify-between rounded-full bg-red px-3 py-2 text-white"
      role="group"
      aria-label={`${productName} 수량 조절`}
    >
      {/* 수량 감소 버튼 */}
      <button
        type="button"
        onClick={onDecrement}
        aria-label="수량 줄이기"
        className="flex h-6 w-6 items-center justify-center rounded-full border border-white"
      >
        <img
          src="/assets/images/icon-decrement-quantity.svg"
          alt=""
          className="pointer-events-none"
        />
      </button>

      {/* 현재 수량 표시: 변경 시 스크린 리더가 자동으로 읽어줌 (aria-live="polite") */}
      <span aria-live="polite" className="text-preset-4-bold">
        {quantity}
      </span>

      {/* 수량 증가 버튼 */}
      <button
        type="button"
        onClick={onIncrement}
        aria-label="수량 늘리기"
        className="flex h-6 w-6 items-center justify-center rounded-full border border-white"
      >
        <img
          src="/assets/images/icon-increment-quantity.svg"
          alt=""
          className="pointer-events-none"
        />
      </button>
    </div>
  )
}

export default QuantityControl
