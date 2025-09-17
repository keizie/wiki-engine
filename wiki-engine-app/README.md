This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Wiki Engine 문서화 및 품질/성능 테스트 계획

## 문서화

- 주요 서비스 및 API 구조 설명
- 데이터 모델(Entity) 정의
- 확장(Extension) 구조 및 샘플 설명
- 사용 예시 및 빠른 시작(Quickstart)
- 테스트 및 품질 관리 방법

## 품질/성능 테스트

- 통합 테스트: 주요 서비스 및 API 정상 동작 확인
- 린트/포맷: Biome 기반 코드 스타일 및 오류 검사
- 커버리지: Jest 기반 테스트 커버리지 측정
- 성능: 대용량 파일/페이지 처리 시 응답 시간 측정(추후 구현)

---

### 빠른 시작

1. 의존성 설치
   ```bash
   npm install
   ```
2. 개발 서버 실행
   ```bash
   npm run dev
   ```
3. 테스트 실행
   ```bash
   npm test
   ```
4. 린트/포맷 검사
   ```bash
   npx biome check .
   ```

---

### 주요 파일/폴더 구조

- `src/models/` : 데이터 모델(Entity)
- `src/services/` : 서비스 로직
- `src/extensions/` : 확장 샘플
- `pages/api/` : Next.js API 엔드포인트
- `tests/integration/` : 통합 테스트
- `jest.config.js` : Jest 설정
- `biome.json` : Biome 설정

---

### 확장(Extension) 구조 예시

```typescript
export interface Extension {
  name: string;
  description: string;
  activate: (page: WikiPage) => void;
}
```

---

### 품질/성능 관리

- 모든 커밋 전 Biome lint/포맷 검사 필수
- 통합 테스트 자동화 및 커버리지 측정
- 성능 테스트는 추후 대용량 처리 로직 구현 시 추가

---
