/**
 * @file ProductListSection.jsx
 * @description 전체 상품 목록을 렌더링하는 섹션(Section) 컴포넌트.
 *
 * [데이터 흐름]
 * - data.json에서 디저트 상품 배열을 import하여 .map()으로 ProductCard를 생성합니다.
 * - cartItems 배열에서 각 상품의 현재 수량을 조회하여 ProductCard에 전달합니다.
 * - 수량이 0이면 'Add to Cart' 버튼, 1 이상이면 수량 조절 버튼으로 전환됩니다.
 *
 * [그리드 레이아웃]
 * - 모바일:   세로 단일 열 (flex-col)
 * - 태블릿/데스크톱: 3열 그리드 (grid-cols-3), 열 간격 24px, 행 간격 32px
 */
import data from '../../data.json'
import ProductCard from './ProductCard'

/**
 * @param {object}   props
 * @param {Array}    props.cartItems    - 현재 장바구니 상품 배열 (수량 조회에 사용)
 * @param {function} props.onAdd        - 상품을 처음 장바구니에 담는 핸들러
 * @param {function} props.onIncrement  - 수량 1 증가 핸들러
 * @param {function} props.onDecrement  - 수량 1 감소 핸들러
 */
function ProductListSection({ cartItems, onAdd, onIncrement, onDecrement }) {
  return (
    // aria-labelledby: 스크린 리더가 이 섹션의 제목("Desserts")을 인식하도록 연결
    <section aria-labelledby="desserts-heading" className="lg:flex-1">
      <h1 id="desserts-heading" className="mb-8 text-preset-1 text-rose-900">
        Desserts
      </h1>

      <div className="flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-x-6 md:gap-y-8">
        {data.map((product) => {
          // cartItems에서 해당 상품의 현재 수량을 조회 (없으면 0 반환)
          const cartItem = cartItems.find((item) => item.name === product.name)
          const quantity = cartItem ? cartItem.quantity : 0

          return (
            <ProductCard
              key={product.name}
              product={product}
              quantity={quantity}
              onAdd={() => onAdd(product)}
              onIncrement={() => onIncrement(product.name)}
              onDecrement={() => onDecrement(product.name)}
            />
          )
        })}
      </div>
    </section>
  )
}

export default ProductListSection
