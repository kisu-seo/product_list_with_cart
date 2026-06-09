/**
 * @file format.js
 * @description 화면 표시용 데이터 포매팅(Formatting) 유틸리티 모음.
 *              현재 숫자 금액을 달러($) 표시 형식으로 변환하는 함수를 제공합니다.
 *              새로운 포매팅 로직이 필요할 경우 이 파일에 추가합니다.
 */

/**
 * 숫자 금액을 달러 표시 형식의 문자열로 변환합니다.
 *
 * @param {number} amount - 변환할 숫자 금액 (예: 6.5)
 * @returns {string} 소수점 둘째 자리까지 표시된 달러 문자열 (예: "$6.50")
 *
 * @example
 * formatPrice(6.5)   // → "$6.50"
 * formatPrice(12)    // → "$12.00"
 */
export const formatPrice = (amount) => `$${amount.toFixed(2)}`
