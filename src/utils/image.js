/**
 * @file image.js
 * @description 이미지 경로 처리 유틸리티 모음.
 *              data.json은 이미지 경로를 './assets/...' 상대 경로로 저장하지만,
 *              Vite(바이트) 번들러의 public 폴더는 '/assets/...' 절대 경로 기준으로 동작합니다.
 *              이 유틸로 경로를 일괄 변환하여 이미지가 정상 로드되도록 합니다.
 */

/**
 * data.json의 상대 경로를 Vite public 폴더 기준 절대 경로로 변환합니다.
 *
 * @param {string} path - data.json에 저장된 원본 이미지 상대 경로 (예: "./assets/images/foo.jpg")
 * @returns {string} Vite가 제공하는 절대 경로 (예: "/assets/images/foo.jpg")
 *
 * @example
 * resolveImagePath('./assets/images/image-waffle-mobile.jpg')
 * // → '/assets/images/image-waffle-mobile.jpg'
 */
export const resolveImagePath = (path) => path.replace('./assets', '/assets')
