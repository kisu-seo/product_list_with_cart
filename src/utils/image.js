/**
 * @file image.js
 * @description 이미지 경로 처리 유틸리티 모음.
 *              import.meta.env.BASE_URL을 사용하여 dev('/') 와 GitHub Pages('/product_list_with_cart/')
 *              환경 모두에서 올바른 경로를 생성합니다.
 */

// Vite가 빌드 환경에 따라 주입하는 base 경로 (dev: '/', prod: '/product_list_with_cart/')
export const BASE_URL = import.meta.env.BASE_URL

/**
 * data.json의 './assets/...' 상대 경로를 base 경로를 포함한 절대 경로로 변환합니다.
 *
 * @example
 * resolveImagePath('./assets/images/image-waffle-mobile.jpg')
 * // dev  → '/assets/images/image-waffle-mobile.jpg'
 * // prod → '/product_list_with_cart/assets/images/image-waffle-mobile.jpg'
 */
export const resolveImagePath = (path) => `${BASE_URL}${path.replace('./', '')}`
