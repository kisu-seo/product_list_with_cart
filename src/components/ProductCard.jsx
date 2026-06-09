/**
 * @file ProductCard.jsx
 * @description 개별 디저트 상품 카드 컴포넌트.
 *
 * [주요 동작]
 * 1. <picture> 태그로 기기 해상도별 최적 이미지를 자동 선택합니다.
 *    - 1028px 이상 → 데스크톱 이미지 (250.67×240px)
 *    - 768px 이상  → 태블릿 이미지 (높이 212px)
 *    - 기본값       → 모바일 이미지 (전체 너비)
 * 2. 상품이 장바구니에 담기면 이미지에 붉은 테두리(border-red)가 추가됩니다.
 * 3. 수량(quantity)에 따라 버튼이 두 가지 모드로 전환됩니다.
 *    - quantity === 0: 'Add to Cart' 버튼 (흰색 아웃라인 스타일)
 *    - quantity > 0:  수량 조절 버튼 그룹 QuantityControl (붉은 배경)
 */
import { resolveImagePath } from '../utils/image'
import QuantityControl from './QuantityControl'

/**
 * @param {object}   props
 * @param {object}   props.product      - data.json의 단일 상품 객체 (image, name, category, price)
 * @param {number}   props.quantity     - 현재 장바구니에 담긴 수량 (0이면 미담김 상태)
 * @param {function} props.onAdd        - 'Add to Cart' 버튼 클릭 핸들러
 * @param {function} props.onIncrement  - '+' 버튼 클릭 핸들러
 * @param {function} props.onDecrement  - '-' 버튼 클릭 핸들러
 */
function ProductCard({ product, quantity, onAdd, onIncrement, onDecrement }) {
  // 수량이 1 이상이면 장바구니에 담긴 상태
  const isInCart = quantity > 0

  // data.json의 상대 경로를 Vite public 기준 절대 경로로 변환
  const imageMobile = resolveImagePath(product.image.mobile)
  const imageTablet = resolveImagePath(product.image.tablet)
  const imageDesktop = resolveImagePath(product.image.desktop)

  return (
    <article className="flex flex-col">
      {/* 이미지 영역: 버튼이 이미지 하단 중앙에 absolute로 겹쳐 배치되므로 relative 설정 */}
      <div className="relative">
        {/*
         * <picture>: 반응형 이미지 제공 요소.
         * 브라우저가 media 조건에 맞는 <source>를 순서대로 평가하고,
         * 조건에 맞지 않으면 기본 <img> (모바일 이미지)를 사용합니다.
         */}
        <picture>
          <source media="(min-width: 1028px)" srcSet={imageDesktop} />
          <source media="(min-width: 768px)" srcSet={imageTablet} />
          <img
            src={imageMobile}
            alt={product.name}
            className={`w-full md:h-[212px] lg:w-[250.67px] lg:h-[240px] rounded-lg object-cover ${
              // 장바구니에 담긴 상품에 붉은 테두리 추가
              isInCart ? 'border-2 border-red' : ''
            }`}
          />
        </picture>

        {/* 수량에 따라 버튼 모드 조건부 렌더링 */}
        {isInCart ? (
          // 수량 1 이상: 수량 조절 버튼 그룹
          <QuantityControl
            productName={product.name}
            quantity={quantity}
            onDecrement={onDecrement}
            onIncrement={onIncrement}
          />
        ) : (
          // 수량 0: Add to Cart 버튼 (이미지 하단 중앙에 absolute 배치)
          <button
            type="button"
            onClick={onAdd}
            className="absolute left-1/2 -bottom-5 flex w-[160px] h-[44px] -translate-x-1/2 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-rose-300 bg-white text-preset-4-bold text-rose-900 shadow-sm"
          >
            <img src="/assets/images/icon-add-to-cart.svg" alt="" />
            Add to Cart
          </button>
        )}
      </div>

      {/* 상품 정보: 카테고리, 이름, 가격 */}
      {/* mt-[38px]: 버튼이 이미지 아래로 돌출(-bottom-5, 20px)되므로 충분한 간격 확보 */}
      <div className="mt-[38px] flex flex-col">
        <span className="text-preset-4 text-rose-500">{product.category}</span>
        <h2 className="text-preset-3 text-rose-900">{product.name}</h2>
        <span className="text-preset-3 text-red">${product.price.toFixed(2)}</span>
      </div>
    </article>
  )
}

export default ProductCard
