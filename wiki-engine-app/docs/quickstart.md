# Quickstart: Wiki Engine (Next.js 기반)

## 1. 프로젝트 설치

```bash
# 저장소 클론 및 의존성 설치
$ git clone <repo-url>
$ cd wiki-engine
$ npm install
```

## 2. 개발 서버 실행

```bash
$ npm run dev
```

## 3. 페이지/파일 생성 및 관리

- `/api/page` 엔드포인트로 페이지 생성/조회
- `/api/file` 엔드포인트로 파일 업로드/조회
- private 속성 설정 시 퍼블리싱 및 외부 접근 제한

## 4. 퍼블리싱

- 페이지 수정 시 HTML 자동 생성
- 뷰어는 `/public/html/` 내 HTML 파일 접근

## 5. 확장/플러그인

- 플러그인 구조로 AI 분석, 외부 검색 등 확장 가능

## 6. 테스트

```bash
$ npm test
```

---
