import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages 서브경로 배포를 위한 base 경로 설정
  // 이 값이 없으면 빌드된 에셋 경로가 '/'로 시작하여 GitHub Pages에서 404 에러 발생
  base: '/product_list_with_cart/',
})
